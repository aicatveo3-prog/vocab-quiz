# 아이콘 생성 스크립트 — icon.svg 와 같은 도안을 PNG 여러 크기로 굽는다.
# 의존성 없이 Windows 의 System.Drawing 만 쓴다.
#   powershell -ExecutionPolicy Bypass -File tools/make-icons.ps1
#
# 왜 PNG 가 필요한가
#   · iOS 는 apple-touch-icon 에 SVG 를 받지 않는다 (PNG 180 필요)
#   · 안드로이드는 maskable 아이콘으로 원형/둥근 모양을 잘라내므로 안전 영역이 필요
#   · 스토어/설치 프롬프트는 정사각 PNG 를 요구한다

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$bg   = [System.Drawing.ColorTranslator]::FromHtml('#0f1116')
$blue = [System.Drawing.ColorTranslator]::FromHtml('#5b8def')
$ink  = [System.Drawing.ColorTranslator]::FromHtml('#0f1116')

function New-RoundedRectPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  if ($d -le 0) { $p.AddRectangle((New-Object System.Drawing.RectangleF($x, $y, $w, $h))); return $p }
  $p.AddArc($x, $y, $d, $d, 180, 90)
  $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()
  return $p
}

# 캔버스를 512 기준으로 그린 뒤 요청 크기로 스케일한다.
#   $safe  : 도안을 안전 영역 안에 줄여 그릴지 (maskable/iOS)
#   $round : 배경(검정) 모서리를 둥글게 할지 (일반 아이콘), 아니면 꽉 채움
function New-Icon([string]$path, [int]$size, [bool]$safe, [bool]$round) {
  $S = 512.0
  # 도안은 항상 512 캔버스에 그린다. 요청 크기가 다르면 마지막에 축소한다.
  $bmp = New-Object System.Drawing.Bitmap(512, 512)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.Clear([System.Drawing.Color]::Transparent)

  # 배경
  $bgPath = if ($round) { New-RoundedRectPath 0 0 $S $S 112 } else { New-RoundedRectPath 0 0 $S $S 0 }
  $bgBrush = New-Object System.Drawing.SolidBrush($bg)
  $g.FillPath($bgBrush, $bgPath)

  # 파란 사각형 — safe 면 더 안쪽으로
  $inset  = if ($safe) { 96 } else { 56 }
  $side   = $S - ($inset * 2)
  $radius = if ($safe) { 72 } else { 88 }
  $bluePath = New-RoundedRectPath $inset $inset $side $side $radius
  $blueBrush = New-Object System.Drawing.SolidBrush($blue)
  $g.FillPath($blueBrush, $bluePath)

  # Aa 글자
  $fontSize = 210
  if ($safe) { $fontSize = 172 }
  $font = [System.Drawing.Font]::new('Segoe UI', [float]$fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $inkBrush = New-Object System.Drawing.SolidBrush($ink)
  $box = New-Object System.Drawing.RectangleF(0, 0, $S, $S)
  $g.DrawString('Aa', $font, $inkBrush, $box, $sf)

  $g.Dispose()

  # HighQualityBicubic 로 최종 크기 확정 (512 기준 도안 → 요청 크기)
  if ($size -ne 512) {
    $out = New-Object System.Drawing.Bitmap($size, $size)
    $g2 = [System.Drawing.Graphics]::FromImage($out)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.DrawImage($bmp, 0, 0, $size, $size)
    $g2.Dispose()
    $bmp.Dispose()
    $bmp = $out
  }

  $full = Join-Path $root $path
  $bmp.Save($full, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Output ("wrote {0} ({1}x{1})" -f $path, $size)
}

# 일반 아이콘 (둥근 모서리, 바깥 투명) — Chrome/Edge/안드로이드 'any'
New-Icon 'icon-192.png' 192 $false $true
New-Icon 'icon-512.png' 512 $false $true

# maskable — 안드로이드가 원형으로 잘라도 안전하도록 안쪽 배치 + 배경 꽉 채움
New-Icon 'icon-maskable-512.png' 512 $true $false

# iOS 홈화면 아이콘 — 투명이 검게 보이므로 배경 꽉 채움
New-Icon 'apple-touch-icon.png' 180 $true $false

Write-Output 'done'

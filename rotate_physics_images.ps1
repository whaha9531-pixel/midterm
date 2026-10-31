Add-Type -AssemblyName System.Drawing

$imgMap = @(
    @{ src = "media_1793429118496.jpg"; name = "physics_p1_part2" },
    @{ src = "media_1793429118523.jpg"; name = "physics_p1_part1_card" },
    @{ src = "media_1793429118546.jpg"; name = "physics_p2_part1" },
    @{ src = "media_1793429118569.jpg"; name = "physics_p2_part2" },
    @{ src = "media_1793429118583.jpg"; name = "physics_fillin" }
)

$baseDir = "C:\Users\周欣儀\.gemini\antigravity-ide\brain\a50da325-cf99-4af1-b8c5-ff1747b32eae\.user_uploaded"
$destDir = (Resolve-Path "images").Path

foreach ($item in $imgMap) {
    $srcPath = Join-Path $baseDir $item.src
    $dstRaw = Join-Path $destDir "$($item.name).jpg"
    $dstUpright = Join-Path $destDir "$($item.name)_upright.jpg"

    Copy-Item $srcPath $dstRaw -Force
    $img = [System.Drawing.Image]::FromFile($srcPath)
    $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
    $img.Save($dstUpright, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
    Write-Host "Created $($item.name)_upright.jpg"
}

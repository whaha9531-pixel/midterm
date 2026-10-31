Add-Type -AssemblyName System.Drawing

$files = @(
    @{ src = "images/media_1793429118496.jpg"; dst = "images/physics_p1_part2.jpg"; upright = "images/physics_p1_part2_upright.jpg" },
    @{ src = "images/media_1793429118523.jpg"; dst = "images/physics_p1_card.jpg"; upright = "images/physics_p1_card_upright.jpg" },
    @{ src = "images/media_1793429118546.jpg"; dst = "images/physics_p2_part1.jpg"; upright = "images/physics_p2_part1_upright.jpg" },
    @{ src = "images/media_1793429118569.jpg"; dst = "images/physics_p2_part2.jpg"; upright = "images/physics_p2_part2_upright.jpg" },
    @{ src = "images/media_1793429118583.jpg"; dst = "images/physics_fillin.jpg"; upright = "images/physics_fillin_upright.jpg" }
)

foreach ($item in $files) {
    Copy-Item $item.src $item.dst -Force
    $srcResolved = (Resolve-Path $item.dst).Path
    $img = [System.Drawing.Image]::FromFile($srcResolved)
    $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
    $uprightResolved = [System.IO.Path]::GetFullPath($item.upright)
    $img.Save($uprightResolved, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
    Write-Host "Created $($item.upright)"
}

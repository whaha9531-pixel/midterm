Add-Type -AssemblyName System.Drawing
$names = @('eng_p1','eng_dialog','eng_reading','eng_fillin','eng_answersheet')
foreach ($name in $names) {
    $src = "images/$name.jpg"
    $dst = "images/${name}_upright.jpg"
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $src).Path)
    $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
    $img.Save((Join-Path (Resolve-Path 'images').Path "${name}_upright.jpg"), [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
    Write-Host "Created ${name}_upright.jpg"
}

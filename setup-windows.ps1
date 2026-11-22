# ==============================================================================
# Clumsy Giants Storefront - Windows PowerShell Setup Script
# Streetwear for Large Breed Lovers
# ==============================================================================

Write-Host ""
Write-Host "🐾 ====================================================== 🐾" -ForegroundColor Cyan
Write-Host "   CLUMSY GIANTS - WINDOWS POWERSHELL SETUP SCRIPT" -ForegroundColor Cyan
Write-Host "   Streetwear for Large Breed Lovers" -ForegroundColor Cyan
Write-Host "🐾 ====================================================== 🐾" -ForegroundColor Cyan
Write-Host ""

# 1. Check Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed or not in your PATH." -ForegroundColor Red
    Write-Host "Please download and install the LTS version from: https://nodejs.org/" -ForegroundColor Yellow
    Exit 1
}

$nodeVer = node -v
$npmVer = npm -v
Write-Host "✅ Detected Node.js $nodeVer and npm $npmVer" -ForegroundColor Green

# 2. Check .env
if (-not (Test-Path .env)) {
    if (Test-Path .env.example) {
        Copy-Item .env.example .env
        Write-Host "✅ Created .env file from .env.example" -ForegroundColor Green
    }
} else {
    Write-Host "ℹ️ Existing .env file found." -ForegroundColor Gray
}

# 3. Dependencies
Write-Host "`n📦 Installing project dependencies (npm install)..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm install failed." -ForegroundColor Red
    Exit 1
}

Write-Host "`n🎉 Setup complete! Clumsy Giants is ready." -ForegroundColor Green
Write-Host "To start the site anytime: npm run dev" -ForegroundColor Cyan
Write-Host "URL: http://localhost:4321`n" -ForegroundColor White

$launch = Read-Host "Would you like to start the website right now? (Y/n)"
if ($launch -eq "" -or $launch -match "^[Yy]$") {
    Start-Process "http://localhost:4321"
    npm run dev
}

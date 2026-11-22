@echo off
setlocal enabledelayedexpansion

echo.
echo ======================================================
echo    CLUMSY GIANTS - LOCAL WINDOWS SETUP SCRIPT
echo    Streetwear for Large Breed Lovers
echo ======================================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not installed or not in your PATH.
    echo Please download and install the LTS version from:
    echo   https://nodejs.org/
    echo Then restart your Command Prompt or PowerShell and rerun this script.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
for /f "tokens=*" %%i in ('npm -v') do set NPM_VER=%%i
echo [OK] Detected Node.js %NODE_VER% and npm %NPM_VER%
echo.

if not exist .env (
    if exist .env.example (
        copy .env.example .env >nul
        echo [OK] Created .env from .env.example
    ) else (
        echo STRIPE_SECRET_KEY=sk_test_placeholder_for_local_dev> .env
        echo STRIPE_WEBHOOK_SECRET=whsec_placeholder_for_local_dev>> .env
        echo PUBLIC_SITE_URL=http://localhost:4321>> .env
        echo POD_API_URL=https://api.printprovider.example.com/v1/orders>> .env
        echo POD_API_KEY=pod_test_key_sample>> .env
        echo [OK] Created default .env
    )
) else (
    echo [INFO] Existing .env file found.
)

echo.
echo [INFO] Installing project dependencies (npm install)...
call npm install
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
)

echo.
echo ======================================================
echo    SETUP COMPLETE! Clumsy Giants is ready to run.
echo ======================================================
echo.
echo To start manually anytime:
echo   npm run dev
echo Then open: http://localhost:4321
echo.

set /p START_NOW="Would you like to start the website now? (Y/n): "
if /i "%START_NOW%"=="" set START_NOW=Y
if /i "%START_NOW%"=="Y" (
    echo.
    echo [INFO] Starting dev server at http://localhost:4321...
    start http://localhost:4321
    call npm run dev
)

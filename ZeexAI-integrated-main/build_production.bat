@echo off
REM Production build script for ZeexAI Frontend (Windows)

echo Building ZeexAI Frontend for production...

REM Check if API URL is set
if "%VITE_API_BASE_URL%"=="" (
    echo WARNING: VITE_API_BASE_URL not set!
    echo Using default: http://127.0.0.1:8000
    echo Set VITE_API_BASE_URL environment variable for production build
    echo.
    echo Example:
    echo   set VITE_API_BASE_URL=https://api.zeexai.com
    echo   npm run build
    echo.
)

REM Install dependencies
echo Installing dependencies...
call npm install

REM Build for production
echo Building production bundle...
call npm run build

echo.
echo Build complete! Files are in the 'dist' folder.
echo Deploy the 'dist' folder to your hosting provider.


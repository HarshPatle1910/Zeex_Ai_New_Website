@echo off
REM Production startup script for ZeexAI Backend (Windows)

REM Activate virtual environment if it exists
if exist venv\Scripts\activate.bat (
    call venv\Scripts\activate.bat
)

REM Check if .env file exists
if not exist .env (
    echo ERROR: .env file not found!
    echo Please create .env file from env.template
    exit /b 1
)

REM Check if waitress is installed
pip show waitress >nul 2>&1
if errorlevel 1 (
    echo Installing waitress...
    pip install waitress
)

REM Start the application
echo Starting ZeexAI Backend in production mode...
waitress-serve --host=0.0.0.0 --port=8000 app:app


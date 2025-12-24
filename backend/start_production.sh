#!/bin/bash
# Production startup script for ZeexAI Backend

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "ERROR: .env file not found!"
    echo "Please create .env file from env.template"
    exit 1
fi

# Check if gunicorn is installed
if ! command -v gunicorn &> /dev/null; then
    echo "Installing gunicorn..."
    pip install gunicorn
fi

# Start the application
echo "Starting ZeexAI Backend in production mode..."
gunicorn -w 4 -b 0.0.0.0:8000 --timeout 120 --access-logfile - --error-logfile - app:app


"""
Flask configuration - Unified config for career and contact modules
"""
import os
from pathlib import Path

# Build paths
BASE_DIR = Path(__file__).resolve().parent


class Config:
    """Base configuration"""
    # Secret key
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'django-insecure-ix0k1f%0cujp*x_h@x!ht0it9y#s0+hh9mi-q_vqvv65$wjs1m'
    
    # Debug mode
    DEBUG = os.environ.get('DEBUG', 'True').lower() == 'true'
    
    # Database configuration (SQLite - for career module)
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or f'sqlite:///{BASE_DIR / "db.sqlite3"}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # File upload configuration (for career module)
    MAX_CONTENT_LENGTH = 1 * 1024 * 1024  # 1MB max file size
    UPLOAD_FOLDER = BASE_DIR / 'media' / 'resumes'
    MEDIA_URL = '/media/'
    MEDIA_ROOT = BASE_DIR / 'media'
    
    # CORS configuration
    CORS_ORIGINS = [
        "http://localhost:5173",  # Vite default port
        "http://localhost:3000",  # React default port
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ]
    
    # Allowed file extensions (for career module)
    ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx'}
    
    # Email configuration (for contact module)
    # These will be loaded from .env file via python-dotenv
    RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
    FROM_EMAIL = os.environ.get('FROM_EMAIL')
    TEST_EMAIL = os.environ.get('TEST_EMAIL')


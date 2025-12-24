"""
Flask configuration - Unified config for career and contact modules
"""
import os
from pathlib import Path

# Build paths
BASE_DIR = Path(__file__).resolve().parent


class Config:
    """Base configuration"""
    # Secret key - MUST be set in production via environment variable
    SECRET_KEY = os.environ.get('SECRET_KEY')
    if not SECRET_KEY:
        # Only use default in development
        import warnings
        warnings.warn("SECRET_KEY not set! Using default key. This is insecure for production!")
        SECRET_KEY = 'django-insecure-ix0k1f%0cujp*x_h@x!ht0it9y#s0+hh9mi-q_vqvv65$wjs1m'
    
    # Debug mode - Default to False in production
    DEBUG = os.environ.get('DEBUG', 'False').lower() == 'true'
    
    # Database configuration (SQLite - for career module)
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or f'sqlite:///{BASE_DIR / "db.sqlite3"}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # File upload configuration (for career module)
    MAX_CONTENT_LENGTH = 1 * 1024 * 1024  # 1MB max file size
    UPLOAD_FOLDER = BASE_DIR / 'media' / 'resumes'
    MEDIA_URL = '/media/'
    MEDIA_ROOT = BASE_DIR / 'media'
    
    # CORS configuration
    # Get CORS origins from environment variable, fallback to development origins
    cors_origins_env = os.environ.get('CORS_ORIGINS', '')
    if cors_origins_env:
        # Split comma-separated list of origins
        CORS_ORIGINS = [origin.strip() for origin in cors_origins_env.split(',')]
    else:
        # Default development origins
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


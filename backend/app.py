"""
Flask application entry point - Unified backend for career and contact modules
"""
from flask import Flask, send_from_directory
from flask_cors import CORS
from pathlib import Path
from config import Config
from modules.career.models import db
from modules.career.routes import applications_bp
from modules.contact.routes import contact_bp

def create_app(config_class=Config):
    """Application factory pattern"""
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Initialize extensions
    db.init_app(app)
    
    # Configure CORS
    CORS(app, 
         origins=app.config['CORS_ORIGINS'],
         supports_credentials=True)
    
    # Register blueprints
    # Career module routes with /api prefix (maintains existing API structure)
    app.register_blueprint(applications_bp, url_prefix='/api')
    
    # Contact module routes (no prefix, maintains existing /contact endpoint)
    app.register_blueprint(contact_bp)
    
    # Serve media files (matching Django's MEDIA_URL)
    @app.route('/media/<path:filename>')
    def media_files(filename):
        """Serve media files"""
        return send_from_directory(
            app.config['MEDIA_ROOT'],
            filename
        )
    
    # Root route
    @app.route('/', methods=['GET'])
    def root():
        """Root endpoint - API information"""
        return {
            "message": "Zeex AI Backend API",
            "status": "running",
            "version": "1.0.0",
            "endpoints": {
                "health": "/health",
                "contact": "/contact (POST)",
                "demo_request": "/demo-request (POST)",
                "applications": "/api/applications/ (POST)",
                "check_data": "/api/check-data (GET)",
                "media": "/media/<filename> (GET)"
            }
        }, 200
    
    # Health check route
    @app.route('/health', methods=['GET'])
    def health():
        return {"status": "ok"}, 200
    
    # Create tables if they don't exist
    with app.app_context():
        db.create_all()
    
    return app


if __name__ == '__main__':
    import os
    app = create_app()
    # Get host and port from environment variables for production
    host = os.environ.get('FLASK_HOST', '127.0.0.1')
    port = int(os.environ.get('FLASK_PORT', 8000))
    debug = os.environ.get('DEBUG', 'False').lower() == 'true'
    app.run(debug=debug, host=host, port=port)


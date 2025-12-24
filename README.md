# ZEEX AI Flask Backend

This is a unified Flask backend combining career and contact modules.

## Structure

```
backend/
├── app.py                 # Main Flask application entry point
├── config.py              # Unified configuration
├── requirements.txt       # Python dependencies
├── env.template          # Environment variables template
└── modules/
    ├── career/           # Career module (job applications)
    │   ├── models/       # Database models
    │   ├── routes/       # API routes
    │   └── services/     # Business logic services
    └── contact/          # Contact module (contact form)
        ├── routes/       # API routes
        └── services/     # Email service
```
## 🔑 .env Template (create this file)


```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@resend.dev
TEST_EMAIL=admin@zeexai.com
```
## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Copy environment template:
```bash
cp env.template .env
```

3. Edit `.env` and add your Resend API credentials (for contact module)

4. Run the application:
```bash
python app.py
```

The server will start on `http://127.0.0.1:8000`

## API Endpoints

### Career Module (Job Applications)
- `POST /api/applications/` - Submit a job application
- `GET /api/check-data` - Get all job applications

### Contact Module
- `POST /contact` - Submit contact form

### General
- `GET /health` - Health check endpoint
- `GET /media/<filename>` - Serve uploaded resume files

## Modules

### Career Module
Handles job application submissions with file uploads (resumes). Uses SQLite database to store applications.

### Contact Module
Handles contact form submissions and sends emails via Resend API.

## Configuration

All configuration is in `config.py`. Key settings:
- Database: SQLite (configurable via `DATABASE_URL` env var)
- CORS: Configured for localhost development
- File uploads: Max 1MB, allowed extensions: pdf, doc, docx
- Email: Configured via Resend API (requires `.env` file)





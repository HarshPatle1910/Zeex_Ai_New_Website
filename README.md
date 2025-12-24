# Zeex AI Website - Full Stack Application

Complete full-stack website with React/TypeScript frontend and Flask backend.

## 🚀 Quick Start

### Development

**Backend:**
```bash
cd backend
pip install -r requirements.txt
cp env.template .env
# Edit .env with your credentials
python app.py
```

**Frontend:**
```bash
cd ZeexAI-integrated-main
npm install
npm run dev
```

### Production

See [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md) for detailed deployment instructions.

**Quick Production Build:**

**Backend:**
```bash
cd backend
# Create .env with production settings
bash start_production.sh  # Linux/Mac
# OR
start_production.bat      # Windows
```

**Frontend:**
```bash
cd ZeexAI-integrated-main
VITE_API_BASE_URL=https://api.zeexai.com npm run build
# Deploy dist/ folder
```

---

## 📁 Project Structure

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
- CORS: Configured via `CORS_ORIGINS` environment variable
- File uploads: Max 1MB, allowed extensions: pdf, doc, docx
- Email: Configured via Resend API (requires `.env` file)

## 🔐 Environment Variables

### Backend (.env)
See `backend/env.template` for all available options.

**Required:**
- `RESEND_API_KEY` - Resend API key for email
- `FROM_EMAIL` - Verified email domain
- `SECRET_KEY` - Strong secret key (generate with: `python -c "import secrets; print(secrets.token_urlsafe(32))"`)
- `CORS_ORIGINS` - Comma-separated list of allowed frontend URLs

**Optional:**
- `DEBUG` - Set to `False` for production
- `FLASK_HOST` - Server host (default: 0.0.0.0)
- `FLASK_PORT` - Server port (default: 8000)
- `DATABASE_URL` - Database connection string

### Frontend
Set `VITE_API_BASE_URL` environment variable before building:
```bash
VITE_API_BASE_URL=https://api.zeexai.com npm run build
```

## 📚 Documentation

- [Production Deployment Guide](./PRODUCTION_DEPLOYMENT.md) - Complete deployment instructions
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md) - Pre-deployment checklist
- [Network Error Troubleshooting](./NETWORK_ERROR_TROUBLESHOOTING.md) - Troubleshooting guide





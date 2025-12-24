# Production Deployment Guide

This guide will help you deploy the Zeex AI website to production.

## Prerequisites

- Node.js (v18 or higher)
- Python 3.8 or higher
- Domain name (for production)
- SSL certificate (HTTPS required)
- Resend API account with verified domain

## Architecture

- **Frontend**: React + TypeScript + Vite (Static files)
- **Backend**: Flask (Python API server)
- **Database**: SQLite (can be upgraded to PostgreSQL for production)

## Deployment Options

### Option 1: Separate Hosting (Recommended)

**Frontend**: Deploy to Vercel, Netlify, or any static hosting
**Backend**: Deploy to Railway, Render, Heroku, or VPS

### Option 2: Single Server

Deploy both frontend and backend on the same server (VPS, AWS EC2, etc.)

---

## Step 1: Backend Deployment

### 1.1 Prepare Backend Environment

```bash
cd backend
```

### 1.2 Create Production .env File

```bash
cp env.template .env
```

Edit `.env` with production values:

```env
# Email Configuration
RESEND_API_KEY=re_your_actual_api_key
FROM_EMAIL=noreply@zeexai.com  # Use your verified domain

# Security (CRITICAL - Generate a strong random key)
SECRET_KEY=generate-a-strong-random-secret-key-here
DEBUG=False

# Server Configuration
FLASK_HOST=0.0.0.0
FLASK_PORT=8000

# CORS - Add your production frontend URL
CORS_ORIGINS=https://www.zeexai.com,https://zeexai.com

# Database (Optional - for PostgreSQL)
# DATABASE_URL=postgresql://user:password@localhost/dbname
```

**Generate a secure SECRET_KEY:**
```python
python -c "import secrets; print(secrets.token_urlsafe(32))"
```

### 1.3 Install Dependencies

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 1.4 Production Server Options

#### Using Gunicorn (Recommended for Linux/Mac)

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

#### Using Waitress (Windows compatible)

```bash
pip install waitress
waitress-serve --host=0.0.0.0 --port=8000 app:app
```

#### Using uWSGI

```bash
pip install uwsgi
uwsgi --http 0.0.0.0:8000 --module app:app --processes 4
```

### 1.5 Create systemd Service (Linux)

Create `/etc/systemd/system/zeexai-backend.service`:

```ini
[Unit]
Description=ZeexAI Backend API
After=network.target

[Service]
User=www-data
WorkingDirectory=/path/to/backend
Environment="PATH=/path/to/backend/venv/bin"
ExecStart=/path/to/backend/venv/bin/gunicorn -w 4 -b 0.0.0.0:8000 app:app
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl enable zeexai-backend
sudo systemctl start zeexai-backend
```

### 1.6 Setup Nginx Reverse Proxy (Optional but Recommended)

```nginx
server {
    listen 80;
    server_name api.zeexai.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Step 2: Frontend Deployment

### 2.1 Build Frontend

```bash
cd ZeexAI-integrated-main
npm install
npm run build
```

This creates a `dist/` folder with production-ready static files.

### 2.2 Set Production API URL

Create `.env.production` file:

```env
VITE_API_BASE_URL=https://api.zeexai.com
```

Or set it during build:
```bash
VITE_API_BASE_URL=https://api.zeexai.com npm run build
```

### 2.3 Deploy Static Files

#### Option A: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Set environment variable: `VITE_API_BASE_URL=https://api.zeexai.com`

#### Option B: Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Set environment variable in Netlify dashboard

#### Option C: Traditional Web Server (Nginx)

```nginx
server {
    listen 80;
    server_name www.zeexai.com zeexai.com;

    root /path/to/ZeexAI-integrated-main/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Step 3: Environment Variables Summary

### Backend (.env)
- `RESEND_API_KEY` - Required
- `FROM_EMAIL` - Required (verified domain)
- `SECRET_KEY` - Required (generate strong key)
- `DEBUG=False` - Required for production
- `CORS_ORIGINS` - Required (your frontend URL)
- `FLASK_HOST` - Optional (default: 0.0.0.0)
- `FLASK_PORT` - Optional (default: 8000)

### Frontend (.env.production)
- `VITE_API_BASE_URL` - Required (your backend API URL)

---

## Step 4: SSL/HTTPS Setup

### Using Let's Encrypt (Free)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d www.zeexai.com -d zeexai.com
sudo certbot --nginx -d api.zeexai.com
```

### Update Nginx for HTTPS

```nginx
server {
    listen 443 ssl http2;
    server_name api.zeexai.com;

    ssl_certificate /etc/letsencrypt/live/api.zeexai.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.zeexai.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Step 5: Database Setup

### SQLite (Default - Simple)

No additional setup needed. Database file: `backend/db.sqlite3`

### PostgreSQL (Recommended for Production)

1. Install PostgreSQL
2. Create database:
```sql
CREATE DATABASE zeexai_db;
CREATE USER zeexai_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE zeexai_db TO zeexai_user;
```

3. Update `.env`:
```env
DATABASE_URL=postgresql://zeexai_user:your_password@localhost/zeexai_db
```

4. Install PostgreSQL driver:
```bash
pip install psycopg2-binary
```

---

## Step 6: File Storage

### Local Storage (Default)

Resumes are stored in `backend/media/resumes/`

Ensure directory exists:
```bash
mkdir -p backend/media/resumes
chmod 755 backend/media/resumes
```

### Cloud Storage (Recommended for Production)

Consider using AWS S3, Google Cloud Storage, or Azure Blob Storage for file uploads.

---

## Step 7: Monitoring & Logging

### Setup Logging

Update `backend/app.py` to add logging:

```python
import logging
from logging.handlers import RotatingFileHandler

if not app.debug:
    file_handler = RotatingFileHandler('logs/zeexai.log', maxBytes=10240, backupCount=10)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
    ))
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.INFO)
```

### Health Checks

Monitor the `/health` endpoint:
```bash
curl https://api.zeexai.com/health
```

---

## Step 8: Security Checklist

- [ ] `SECRET_KEY` is set and strong
- [ ] `DEBUG=False` in production
- [ ] CORS origins are restricted to your domain
- [ ] HTTPS is enabled
- [ ] `.env` file is not committed to git
- [ ] Database credentials are secure
- [ ] File upload limits are set (1MB default)
- [ ] Resend API key is secure
- [ ] Server firewall is configured
- [ ] Regular backups are scheduled

---

## Step 9: Testing Production Build

### Test Backend

```bash
# Test health endpoint
curl https://api.zeexai.com/health

# Test contact endpoint
curl -X POST https://api.zeexai.com/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test"}'
```

### Test Frontend

1. Visit your production URL
2. Test all forms (Contact, Career, Demo Request)
3. Verify API calls work
4. Check console for errors

---

## Common Issues

### CORS Errors

- Ensure `CORS_ORIGINS` includes your exact frontend URL (with https://)
- Check for trailing slashes
- Verify protocol matches (http vs https)

### API Not Found

- Verify `VITE_API_BASE_URL` is set correctly
- Check backend is running and accessible
- Verify firewall/security groups allow connections

### Email Not Sending

- Verify Resend API key is correct
- Check domain is verified in Resend
- Ensure `FROM_EMAIL` uses verified domain
- Check Resend dashboard for errors

---

## Quick Start Commands

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# Create .env file
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

### Frontend
```bash
cd ZeexAI-integrated-main
npm install
VITE_API_BASE_URL=https://api.zeexai.com npm run build
# Deploy dist/ folder
```

---

## Support

For issues or questions, check:
- Backend logs: `backend/logs/` (if configured)
- Browser console for frontend errors
- Server logs for deployment issues


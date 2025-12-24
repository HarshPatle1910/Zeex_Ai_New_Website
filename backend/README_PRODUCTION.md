# Backend Production Configuration

## Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

### Required Variables

```env
# Email Service
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=noreply@zeexai.com  # Must be verified domain

# Security
SECRET_KEY=your-strong-secret-key-here  # Generate with: python -c "import secrets; print(secrets.token_urlsafe(32))"
DEBUG=False

# CORS - Add your production frontend URL(s)
CORS_ORIGINS=https://www.zeexai.com,https://zeexai.com
```

### Optional Variables

```env
# Server Configuration
FLASK_HOST=0.0.0.0
FLASK_PORT=8000

# Database (defaults to SQLite)
# DATABASE_URL=postgresql://user:password@localhost/dbname

# Test Email (only needed if using @resend.dev)
# TEST_EMAIL=your_email@gmail.com
```

## Production Server

### Linux/Mac (Gunicorn)

```bash
gunicorn -w 4 -b 0.0.0.0:8000 --timeout 120 app:app
```

Or use the provided script:
```bash
bash start_production.sh
```

### Windows (Waitress)

```bash
waitress-serve --host=0.0.0.0 --port=8000 app:app
```

Or use the provided script:
```bash
start_production.bat
```

## Security Checklist

- [ ] `SECRET_KEY` is set and strong (32+ characters)
- [ ] `DEBUG=False` in production
- [ ] `CORS_ORIGINS` only includes your production domains
- [ ] `.env` file is not committed to git
- [ ] Resend domain is verified
- [ ] HTTPS is enabled
- [ ] Firewall rules are configured

## Health Check

Test your production backend:
```bash
curl https://api.zeexai.com/health
```

Should return: `{"status": "ok"}`


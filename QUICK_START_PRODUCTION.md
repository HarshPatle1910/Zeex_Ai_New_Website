# Quick Start - Production Deployment

## 🚀 Fastest Path to Production

### Step 1: Backend Setup

```bash
cd backend

# 1. Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Create .env file
cp env.template .env

# 4. Edit .env with production values:
#    - RESEND_API_KEY=your_key
#    - FROM_EMAIL=noreply@zeexai.com
#    - SECRET_KEY=<generate with: python -c "import secrets; print(secrets.token_urlsafe(32))">
#    - DEBUG=False
#    - CORS_ORIGINS=https://www.zeexai.com,https://zeexai.com

# 5. Start production server
bash start_production.sh  # Windows: start_production.bat
```

### Step 2: Frontend Build

```bash
cd ZeexAI-integrated-main

# 1. Install dependencies
npm install

# 2. Build with production API URL
VITE_API_BASE_URL=https://api.zeexai.com npm run build

# 3. Deploy the 'dist' folder to your hosting
```

### Step 3: Environment Variables

**Backend (.env):**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=noreply@zeexai.com
SECRET_KEY=<generate-strong-key>
DEBUG=False
CORS_ORIGINS=https://www.zeexai.com,https://zeexai.com
FLASK_HOST=0.0.0.0
FLASK_PORT=8000
```

**Frontend (set before build):**
```bash
export VITE_API_BASE_URL=https://api.zeexai.com  # Linux/Mac
set VITE_API_BASE_URL=https://api.zeexai.com     # Windows
```

## 📦 Deployment Platforms

### Vercel (Frontend) + Railway (Backend)

**Frontend:**
1. Install Vercel CLI: `npm i -g vercel`
2. `cd ZeexAI-integrated-main`
3. `vercel --prod`
4. Set env var: `VITE_API_BASE_URL`

**Backend:**
1. Connect GitHub repo to Railway
2. Set root directory: `backend`
3. Add environment variables
4. Deploy

### Netlify (Frontend) + Render (Backend)

**Frontend:**
1. Connect repo to Netlify
2. Build command: `cd ZeexAI-integrated-main && npm install && npm run build`
3. Publish directory: `ZeexAI-integrated-main/dist`
4. Add env var: `VITE_API_BASE_URL`

**Backend:**
1. Connect repo to Render
2. Build command: `cd backend && pip install -r requirements.txt`
3. Start command: `cd backend && gunicorn -w 4 -b 0.0.0.0:$PORT app:app`
4. Add environment variables

## ✅ Pre-Launch Checklist

- [ ] Backend `.env` configured
- [ ] Frontend `VITE_API_BASE_URL` set
- [ ] CORS origins match frontend URL
- [ ] SSL/HTTPS enabled
- [ ] Email service tested
- [ ] All forms tested
- [ ] Admin login works
- [ ] File uploads work

## 🔗 Important URLs

After deployment, update these:
- Frontend URL: `https://www.zeexai.com`
- Backend API URL: `https://api.zeexai.com`
- Update `CORS_ORIGINS` in backend `.env`
- Update `VITE_API_BASE_URL` in frontend build


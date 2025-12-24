# ZEEX AI Website - Setup and Run Instructions

This is a full-stack application with a **Python Flask backend** and a **React + TypeScript frontend**.

## Prerequisites

Before starting, ensure you have the following installed:
- **Python 3.8+** (check with `python --version` or `python3 --version`)
- **Node.js 16+** and npm (check with `node --version` and `npm --version`)
- **Git** (if cloning from repository)

---

## 🚀 Quick Start Guide

### Step 1: Backend Setup (Flask)

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   # Copy the template file
   copy env.template .env
   # On macOS/Linux: cp env.template .env
   ```

5. **Edit the `.env` file** and add your Resend API credentials:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   TEST_EMAIL=your_email@gmail.com
   ```
   
   > **Note:** For testing, you can use `noreply@resend.dev` as `FROM_EMAIL` and set `TEST_EMAIL` to your account owner email. For production, verify your domain in Resend dashboard.

6. **Run the Flask backend:**
   ```bash
   python app.py
   ```
   
   The backend will start on **http://127.0.0.1:8000**

---

### Step 2: Frontend Setup (React + Vite)

1. **Open a new terminal window** (keep the backend running in the first terminal)

2. **Navigate to the frontend directory:**
   ```bash
   cd ZeexAI-integrated-main
   ```

3. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The frontend will start on **http://localhost:5173** (or another port if 5173 is busy)

---

## 📋 Complete Command Reference

### Backend Commands

```bash
# Navigate to backend
cd backend

# Create virtual environment (Windows)
python -m venv venv
venv\Scripts\activate

# Create virtual environment (macOS/Linux)
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file from template
copy env.template .env  # Windows
# OR
cp env.template .env    # macOS/Linux

# Run the server
python app.py
```

### Frontend Commands

```bash
# Navigate to frontend
cd ZeexAI-integrated-main

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🔧 Configuration

### Backend Configuration

- **Port:** 8000 (default)
- **Database:** SQLite (`db.sqlite3` in backend directory)
- **CORS:** Configured for `localhost:5173` and `localhost:3000`
- **File Upload:** Max 1MB, allowed: PDF, DOC, DOCX

### Frontend Configuration

- **Port:** 5173 (Vite default, auto-increments if busy)
- **Framework:** React 19.2.0 with TypeScript
- **Build Tool:** Vite 7.2.4

---

## 🌐 Accessing the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://127.0.0.1:8000
- **Health Check:** http://127.0.0.1:8000/health

---

## 📡 API Endpoints

### Career Module
- `POST /api/applications/` - Submit job application
- `GET /api/check-data` - Get all applications

### Contact Module
- `POST /contact` - Submit contact form

### General
- `GET /health` - Health check
- `GET /media/<filename>` - Serve uploaded files

---

## ⚠️ Troubleshooting

### Backend Issues

1. **Port 8000 already in use:**
   - Change port in `backend/app.py` (line 55): `app.run(debug=True, host='127.0.0.1', port=8000)`

2. **Module not found errors:**
   - Ensure virtual environment is activated
   - Reinstall dependencies: `pip install -r requirements.txt`

3. **Database errors:**
   - Delete `db.sqlite3` and restart the server (it will recreate automatically)

### Frontend Issues

1. **Port 5173 already in use:**
   - Vite will automatically use the next available port
   - Check the terminal output for the actual port

2. **npm install fails:**
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`, then run `npm install` again

3. **CORS errors:**
   - Ensure backend is running
   - Check that backend CORS configuration includes your frontend port

---

## 🔐 Environment Variables

The backend requires a `.env` file in the `backend/` directory with:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@yourdomain.com
TEST_EMAIL=your_email@gmail.com  # Optional for testing
```

**To get a Resend API Key:**
1. Go to https://resend.com
2. Sign up for a free account
3. Navigate to API Keys in dashboard
4. Create a new API key
5. Copy and paste into `.env` file

---

## 📦 Project Structure

```
.
├── backend/              # Flask backend
│   ├── app.py           # Main application
│   ├── config.py        # Configuration
│   ├── requirements.txt # Python dependencies
│   ├── .env            # Environment variables (create this)
│   └── modules/         # Application modules
│       ├── career/      # Job applications
│       └── contact/     # Contact form
│
└── ZeexAI-integrated-main/  # React frontend
    ├── src/             # Source code
    ├── package.json     # Node dependencies
    └── vite.config.ts   # Vite configuration
```

---

## ✅ Verification Checklist

- [ ] Python 3.8+ installed
- [ ] Node.js 16+ and npm installed
- [ ] Backend dependencies installed (`pip install -r requirements.txt`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] `.env` file created in `backend/` directory
- [ ] Resend API key added to `.env`
- [ ] Backend running on http://127.0.0.1:8000
- [ ] Frontend running on http://localhost:5173
- [ ] Health check endpoint returns `{"status": "ok"}`

---

## 🎯 Next Steps

1. Open http://localhost:5173 in your browser
2. Test the contact form (requires valid Resend API key)
3. Test job application submission
4. Check backend logs for any errors

---

## 📝 Notes

- The backend uses SQLite by default (no additional database setup required)
- File uploads are stored in `backend/media/resumes/`
- The database is automatically created on first run
- Both servers support hot-reload during development


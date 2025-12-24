# Backend Error Fix Guide

## Problem Found

The backend is missing required Python dependencies. The error shows:
```
ModuleNotFoundError: No module named 'flask_sqlalchemy'
```

## Solution: Install Dependencies

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Create Virtual Environment (Recommended)
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

This will install:
- Flask==3.0.0
- Flask-SQLAlchemy==3.1.1
- Flask-CORS==4.0.0
- Werkzeug==3.0.1
- python-dotenv==1.0.0
- requests==2.31.0

### Step 4: Verify Installation
```bash
python test_backend.py
```

This should show all tests passing.

### Step 5: Create .env File (if not exists)
```bash
# Copy template
copy env.template .env
# On macOS/Linux: cp env.template .env
```

Then edit `.env` and add your Resend API credentials:
```env
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TEST_EMAIL=your_email@gmail.com
```

### Step 6: Start Backend Server
```bash
python app.py
```

The server should start on `http://127.0.0.1:8000`

## Testing Endpoints

Once the backend is running, test these endpoints:

1. **Health Check:**
   ```bash
   curl http://127.0.0.1:8000/health
   ```
   Should return: `{"status": "ok"}`

2. **Contact Form (test with missing data - should return 400):**
   ```bash
   curl -X POST http://127.0.0.1:8000/contact
   ```

3. **Applications (test with missing data - should return 400):**
   ```bash
   curl -X POST http://127.0.0.1:8000/api/applications/
   ```

## Common Issues

### Issue 1: ModuleNotFoundError
**Solution:** Install dependencies with `pip install -r requirements.txt`

### Issue 2: Port Already in Use
**Solution:** Change port in `app.py` line 55:
```python
app.run(debug=True, host='127.0.0.1', port=8001)  # Change 8000 to 8001
```

### Issue 3: Database Errors
**Solution:** Delete `db.sqlite3` and restart - it will recreate automatically

### Issue 4: CORS Errors
**Solution:** Backend CORS is already configured. Make sure frontend URL matches:
- `http://localhost:5173` (Vite default)
- `http://localhost:3000` (React default)

## Quick Fix Command

If you're in the backend directory and have Python/pip installed:

```bash
pip install -r requirements.txt
python app.py
```

This should start the backend server successfully.


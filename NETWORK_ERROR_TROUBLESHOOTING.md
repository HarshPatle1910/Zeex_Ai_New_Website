# Network Error Troubleshooting Guide

If you're seeing network errors in the frontend, follow these steps to diagnose and fix the issue.

## Common Causes

1. **Backend server is not running**
2. **Backend running on wrong port**
3. **CORS (Cross-Origin Resource Sharing) issues**
4. **Firewall or antivirus blocking connections**
5. **Wrong API URL configuration**

## Step-by-Step Troubleshooting

### 1. Check if Backend is Running

**Open a terminal and run:**
```bash
cd backend
python app.py
```

You should see output like:
```
 * Running on http://127.0.0.1:8000
 * Debug mode: on
```

**If the backend starts successfully:**
- The backend is running on `http://127.0.0.1:8000`
- Keep this terminal open and running

**If you get errors:**
- Check if Python is installed: `python --version`
- Install dependencies: `pip install -r requirements.txt`
- Check for port conflicts (another app might be using port 8000)

### 2. Verify Frontend API Configuration

**Check the API configuration file:**
- File: `ZeexAI-integrated-main/src/config/api.ts`
- Default URL: `http://127.0.0.1:8000`

**If your backend runs on a different port:**
1. Update `backend/app.py` to use the correct port, OR
2. Create a `.env` file in `ZeexAI-integrated-main/` with:
   ```
   VITE_API_BASE_URL=http://127.0.0.1:8000
   ```

### 3. Test Backend Connection

**Open your browser and visit:**
- `http://127.0.0.1:8000/health` - Should return `{"status": "ok"}`
- `http://127.0.0.1:8000/` - Should return API information

**If these don't work:**
- Backend is not running or not accessible
- Check firewall settings
- Try `http://localhost:8000` instead of `http://127.0.0.1:8000`

### 4. Check CORS Configuration

**The backend CORS is configured in `backend/config.py`:**
```python
CORS_ORIGINS = [
    "http://localhost:5173",  # Vite default port
    "http://localhost:3000",  # React default port
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
]
```

**Make sure your frontend URL matches one of these:**
- If frontend runs on `http://localhost:5173` ✅
- If frontend runs on `http://127.0.0.1:5173` ✅
- If frontend runs on a different port, add it to `CORS_ORIGINS` in `backend/config.py`

### 5. Check Browser Console

**Open browser Developer Tools (F12) and check:**
- **Console tab**: Look for error messages
- **Network tab**: Check if API requests are being made and their status

**Common errors:**
- `Failed to fetch` → Backend not running or CORS issue
- `404 Not Found` → Wrong API endpoint URL
- `500 Internal Server Error` → Backend error (check backend terminal)

### 6. Verify Both Servers Are Running

**You need TWO terminals running:**

**Terminal 1 - Backend:**
```bash
cd backend
python app.py
```
Should show: `Running on http://127.0.0.1:8000`

**Terminal 2 - Frontend:**
```bash
cd ZeexAI-integrated-main
npm run dev
```
Should show: `Local: http://localhost:5173`

### 7. Test API Endpoints Manually

**Using curl (or Postman):**

**Health Check:**
```bash
curl http://127.0.0.1:8000/health
```

**Contact Form:**
```bash
curl -X POST http://127.0.0.1:8000/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

**If these work but frontend doesn't:**
- It's a CORS or frontend configuration issue

## Quick Fixes

### Fix 1: Restart Both Servers
1. Stop both backend and frontend (Ctrl+C)
2. Start backend first: `cd backend && python app.py`
3. Then start frontend: `cd ZeexAI-integrated-main && npm run dev`

### Fix 2: Clear Browser Cache
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

### Fix 3: Check Port Conflicts
**If port 8000 is in use:**
```bash
# Windows
netstat -ano | findstr :8000

# Linux/Mac
lsof -i :8000
```

**Change backend port in `backend/app.py`:**
```python
app.run(debug=True, host='127.0.0.1', port=8001)  # Change to 8001
```

**Then update frontend `ZeexAI-integrated-main/src/config/api.ts`:**
```typescript
export const API_BASE_URL = 'http://127.0.0.1:8001';
```

### Fix 4: Update CORS Settings
**If frontend runs on a different port, edit `backend/config.py`:**
```python
CORS_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
    "http://localhost:YOUR_PORT",  # Add your port here
    "http://127.0.0.1:YOUR_PORT",  # Add your port here
]
```

## Error Messages Explained

### "Network error. Cannot connect to the server..."
- **Meaning**: Frontend cannot reach the backend
- **Solution**: Make sure backend is running on `http://127.0.0.1:8000`

### "Failed to fetch"
- **Meaning**: Browser blocked the request (usually CORS)
- **Solution**: Check CORS configuration in `backend/config.py`

### "Server error: 500"
- **Meaning**: Backend encountered an error
- **Solution**: Check backend terminal for error details

### "Server error: 404"
- **Meaning**: API endpoint not found
- **Solution**: Check API endpoint URLs in `ZeexAI-integrated-main/src/config/api.ts`

## Still Having Issues?

1. **Check backend logs** in the terminal where `python app.py` is running
2. **Check browser console** (F12 → Console tab)
3. **Check network tab** (F12 → Network tab) to see failed requests
4. **Verify Python dependencies**: `pip install -r backend/requirements.txt`
5. **Verify Node dependencies**: `cd ZeexAI-integrated-main && npm install`

## Contact Form vs Career Application

**Contact Form:**
- Endpoint: `POST /contact`
- No file upload required
- Uses JSON

**Career Application:**
- Endpoint: `POST /api/applications/`
- Requires file upload (resume)
- Uses FormData

Both should work if backend is running correctly.


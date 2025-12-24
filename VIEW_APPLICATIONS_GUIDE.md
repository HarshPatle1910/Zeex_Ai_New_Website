# How to View Job Applications

I've created **3 different ways** for you to view submitted job applications:

---

## 🎨 Method 1: Admin Dashboard (Easiest & Best!)

I've created a beautiful admin dashboard page for you!

### Access the Admin Page:

1. **Make sure both servers are running:**
   - Backend: `cd backend && python app.py`
   - Frontend: `cd ZeexAI-integrated-main && npm run dev`

2. **Open in browser:**
   ```
   http://localhost:5173/admin/applications
   ```

### Features:
- ✅ Beautiful, modern UI
- ✅ View all applications in cards
- ✅ Click to see full details
- ✅ View resume files
- ✅ Contact applicants (email/phone links)
- ✅ Refresh button to get latest data
- ✅ Shows application count

### What You'll See:
- Application cards with:
  - Name and ID
  - Position applied for
  - Email (clickable)
  - Phone (clickable)
  - Experience level
  - Date applied
  - View Resume button
  - View Details button

---

## 🌐 Method 2: API Endpoint (Quick Check)

### Using Browser:
1. Open your browser
2. Go to: `http://127.0.0.1:8000/api/check-data`
3. You'll see JSON data with all applications

### Using Command Line (PowerShell):
```powershell
# Using Invoke-WebRequest (PowerShell)
Invoke-WebRequest -Uri http://127.0.0.1:8000/api/check-data | Select-Object -ExpandProperty Content
```

### Using curl (if installed):
```bash
curl http://127.0.0.1:8000/api/check-data
```

---

## 🐍 Method 3: Python Script

I'll create a simple Python script you can run:

### Create Script:
Save this as `view_applications.py` in the `backend/` folder:

```python
from app import create_app
from modules.career.models import JobApplication

app = create_app()

with app.app_context():
    applications = JobApplication.query.order_by(JobApplication.created_at.desc()).all()
    
    print(f"\n{'='*60}")
    print(f"Total Applications: {len(applications)}")
    print(f"{'='*60}\n")
    
    for i, app in enumerate(applications, 1):
        print(f"Application #{i}")
        print(f"  ID: {app.id}")
        print(f"  Name: {app.full_name}")
        print(f"  Email: {app.email}")
        print(f"  Phone: {app.mobile}")
        print(f"  Position: {app.position}")
        print(f"  Experience: {app.experience}")
        print(f"  Resume: {app.resume}")
        print(f"  Applied: {app.created_at}")
        print(f"  Resume URL: http://127.0.0.1:8000/media/{app.resume}")
        print("-" * 60)
```

### Run the Script:
```bash
cd backend
python view_applications.py
```

---

## 📊 Current Status

Based on the database, you currently have **3 applications**:

1. **arjun** - AI Intern - arjun@gmail.com
2. **Harsh Patle** - Marketing Intern - harshpatle1929@gmail.com
3. **Harsh Patle** - Marketing Intern - harshpatle1929@gmail.com

---

## 🎯 Recommended Method

**Use Method 1 (Admin Dashboard)** - It's the easiest and most user-friendly!

Just visit: `http://localhost:5173/admin/applications`

---

## 📁 Viewing Resume Files

Resume files are stored in: `backend/media/resumes/`

You can access them via:
- **URL:** `http://127.0.0.1:8000/media/resumes/filename.pdf`
- **File System:** `backend/media/resumes/filename.pdf`

The admin dashboard has a "View Resume" button that opens the resume in a new tab.

---

## 🔄 Refreshing Data

- **Admin Dashboard:** Click the "Refresh" button
- **API:** Just reload the page/endpoint
- **Python Script:** Run it again

---

## 💡 Tips

1. **Bookmark the admin page** for quick access
2. **Check regularly** - new applications appear automatically
3. **Use the email/phone links** to contact applicants directly
4. **Download resumes** by right-clicking the "View Resume" link

---

## 🆘 Troubleshooting

### Admin page shows "Network error":
- Make sure backend is running on port 8000
- Check browser console for errors
- Verify API endpoint: `http://127.0.0.1:8000/api/check-data`

### No applications showing:
- Check if backend database has data
- Try the API endpoint directly
- Check backend terminal for errors

### Resume files not opening:
- Make sure backend is running
- Check file exists in `backend/media/resumes/`
- Verify file path in application data

---

Enjoy viewing your applications! 🎉


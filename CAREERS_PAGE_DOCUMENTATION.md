# Careers Page - How It Works

## Overview

The Careers page allows users to browse job openings and submit job applications. **Yes, it uses a database!** The system uses **SQLite** database to store all job applications.

---

## Architecture

### Frontend (React + TypeScript)
- **Location**: `ZeexAI-integrated-main/src/pages/Career/Career.tsx`
- **Components**: 
  - `JobCard` - Displays individual job listings
  - `ApplyModal` - Application form modal
  - `BackgroundBubbles` - Visual effects

### Backend (Flask + SQLAlchemy)
- **Location**: `backend/modules/career/`
- **Database**: SQLite (`backend/db.sqlite3`)
- **ORM**: Flask-SQLAlchemy

---

## How It Works - Step by Step

### 1. **Displaying Job Listings**

**Frontend:**
- Job listings are stored in **static data** file: `src/data/roles.ts`
- The `Career.tsx` page reads from this file and displays all available roles
- Each role is rendered as a `JobCard` component

**Data Source:**
```typescript
// src/data/roles.ts
export const roles: Role[] = [
  {
    id: 1,
    title: "Software Engineer",
    department: "Engineering",
    location: "Remote",
    // ... more fields
  },
  // ... more roles
]
```

**Note:** Job listings are **NOT stored in the database** - they're hardcoded in the frontend. Only **applications** are stored in the database.

---

### 2. **User Submits Application**

When a user clicks "Apply" on a job:

1. **Modal Opens** (`ApplyModal` component)
2. **User Fills Form:**
   - Full Name
   - Email
   - Phone Number
   - Position (pre-filled from selected job)
   - Years of Experience
   - Resume/CV file upload

3. **Form Submission:**
   - Frontend creates `FormData` with all fields
   - Sends `POST` request to: `http://127.0.0.1:8000/api/applications/`

---

### 3. **Backend Processing**

**Endpoint:** `POST /api/applications/`

**Location:** `backend/modules/career/routes/applications.py`

**Process:**

1. **Receive Form Data:**
   ```python
   full_name = request.form.get('fullName')
   email = request.form.get('email')
   phone = request.form.get('phone')
   position = request.form.get('position')
   experience = request.form.get('experience')
   resume_file = request.files.get('resume')
   ```

2. **Validation:**
   - Validates all required fields
   - Validates email format
   - Validates phone (must be 10 digits)
   - Validates experience value
   - Validates resume file:
     - Max size: 1MB
     - Allowed formats: PDF, DOC, DOCX

3. **Save Resume File:**
   - Generates unique filename with timestamp
   - Saves to: `backend/media/resumes/`
   - Example: `Resume_20241222_115836_297506.pdf`

4. **Save to Database:**
   - Creates new `JobApplication` record
   - Stores all form data + resume file path
   - Commits to SQLite database

---

### 4. **Database Structure**

**Database:** SQLite (`backend/db.sqlite3`)

**Table:** `jobapplications_jobapplication`

**Model:** `backend/modules/career/models/job_application.py`

**Schema:**
```python
class JobApplication(db.Model):
    id = Integer (Primary Key, Auto-increment)
    full_name = String(255) - Required
    email = String(254) - Required
    mobile = String(10) - Required (10 digits)
    position = String(255) - Required
    experience = String(20) - Required
        Options: '0-1 years', '1-3 years', '3-5 years', '5+ years'
    resume = String(100) - Required (file path)
    created_at = DateTime - Auto-generated timestamp
```

**Example Record:**
```json
{
  "id": 1,
  "full_name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "position": "Software Engineer",
  "experience": "1-3 years",
  "resume": "resumes/Resume_20241222_115836_297506.pdf",
  "created_at": "2024-12-22T11:58:36.297506"
}
```

---

### 5. **Retrieving Applications**

**Endpoint:** `GET /api/check-data`

**Purpose:** Get all submitted applications (for admin/testing)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "full_name": "John Doe",
      "email": "john@example.com",
      // ... all fields
    },
    // ... more applications
  ]
}
```

---

## File Storage

**Resume Files Location:**
```
backend/
  media/
    resumes/
      Resume_20241222_115836_297506.pdf
      Cover_Letter_20241222_120000_123456.pdf
      ...
```

**File Naming:**
- Format: `{original_name}_{timestamp}.{extension}`
- Timestamp: `YYYYMMDD_HHMMSS_microseconds`
- Example: `Resume_20241222_115836_297506.pdf`

**File Access:**
- URL: `http://127.0.0.1:8000/media/resumes/filename.pdf`
- Served by Flask route: `/media/<path:filename>`

---

## Data Flow Diagram

```
┌─────────────┐
│   User      │
│  (Browser)  │
└──────┬──────┘
       │
       │ 1. Views Careers Page
       ▼
┌─────────────────────┐
│  Career.tsx         │
│  - Reads roles.ts   │
│  - Displays jobs    │
└──────┬──────────────┘
       │
       │ 2. Clicks "Apply"
       ▼
┌─────────────────────┐
│  ApplyModal.tsx     │
│  - Shows form       │
│  - User fills data │
└──────┬──────────────┘
       │
       │ 3. POST /api/applications/
       ▼
┌─────────────────────┐
│  Backend API        │
│  - Validates data   │
│  - Saves file       │
└──────┬──────────────┘
       │
       │ 4. Save to Database
       ▼
┌─────────────────────┐
│  SQLite Database    │
│  db.sqlite3         │
│  - Stores record    │
└─────────────────────┘
```

---

## Database Details

### Database Type
- **SQLite** (file-based database)
- **Location:** `backend/db.sqlite3`
- **ORM:** Flask-SQLAlchemy

### Table Creation
- Database is **automatically created** on first run
- Tables are created by: `db.create_all()` in `app.py`
- No manual setup required!

### Viewing Data

**Option 1: Using API**
```bash
curl http://127.0.0.1:8000/api/check-data
```

**Option 2: Using SQLite Browser**
- Download: https://sqlitebrowser.org/
- Open: `backend/db.sqlite3`
- View table: `jobapplications_jobapplication`

**Option 3: Using Python**
```python
from backend.modules.career.models import db, JobApplication
from backend.app import create_app

app = create_app()
with app.app_context():
    applications = JobApplication.query.all()
    for app in applications:
        print(app.full_name, app.email, app.position)
```

---

## Key Features

### ✅ What's Stored in Database
- All job applications submitted by users
- Application metadata (name, email, phone, position, experience)
- Resume file paths (files stored on disk)

### ❌ What's NOT in Database
- Job listings/roles (stored in `src/data/roles.ts`)
- Resume file contents (files stored in `media/resumes/`)

### 🔒 Validation Rules
- Email: Must be valid format
- Phone: Exactly 10 digits, numbers only
- Resume: Max 1MB, PDF/DOC/DOCX only
- Experience: Must be one of the predefined choices

### 📁 File Management
- Files are stored permanently on disk
- Unique filenames prevent overwrites
- Files are accessible via URL: `/media/resumes/filename.pdf`

---

## API Endpoints

### 1. Submit Application
```
POST /api/applications/
Content-Type: multipart/form-data

Form Fields:
- fullName: string
- email: string
- phone: string
- position: string
- experience: string ('0', '1', '2', '3+')
- resume: file (PDF/DOC/DOCX, max 1MB)

Response:
{
  "success": true,
  "message": "Application submitted successfully.",
  "data": { ... }
}
```

### 2. Get All Applications
```
GET /api/check-data

Response:
{
  "success": true,
  "count": 5,
  "data": [ ... ]
}
```

---

## Summary

**Yes, the Careers page uses a database!**

- **Database:** SQLite (`db.sqlite3`)
- **Stores:** All job applications
- **File Storage:** Resume files in `media/resumes/`
- **Auto-created:** Database and tables created automatically
- **No setup needed:** Works out of the box!

The system is fully functional and ready to collect job applications! 🎉


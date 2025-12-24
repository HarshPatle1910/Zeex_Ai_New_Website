# Backend Structure Documentation

## Final Folder Structure

```
backend/
├── app.py                    # Main Flask application entry point
├── config.py                 # Unified configuration for both modules
├── requirements.txt          # Merged dependencies from both backends
├── env.template             # Environment variables template
├── README.md                # Quick start guide
├── STRUCTURE.md             # This file
└── modules/
    ├── __init__.py
    ├── career/              # Career module (job applications)
    │   ├── __init__.py
    │   ├── models/
    │   │   ├── __init__.py
    │   │   └── job_application.py
    │   ├── routes/
    │   │   ├── __init__.py
    │   │   └── applications.py
    │   └── services/
    │       ├── __init__.py
    │       └── validation_service.py
    └── contact/             # Contact module (contact form)
        ├── __init__.py
        ├── routes/
        │   ├── __init__.py
        │   └── contact.py
        └── services/
            ├── __init__.py
            └── email_service.py
```

## API Endpoints

### Career Module (Job Applications)
All endpoints are prefixed with `/api`

- **POST** `/api/applications/` - Submit a job application
  - Form data: `full_name`, `email`, `mobile`/`phone`, `position`, `experience`, `resume` (file)
  - Returns: JSON with success status and application data

- **GET** `/api/check-data` - Get all job applications
  - Returns: JSON with list of all applications

### Contact Module
- **POST** `/contact` - Submit contact form
  - JSON body: `{ "name": "...", "email": "...", "subject": "...", "message": "..." }`
  - Returns: JSON with success status

### General Endpoints
- **GET** `/health` - Health check
  - Returns: `{"status": "ok"}`

- **GET** `/media/<filename>` - Serve uploaded resume files
  - Serves files from `media/resumes/` directory

## Blueprint Registration

### Career Module Blueprint
- Blueprint name: `applications`
- URL prefix: `/api`
- Registered in: `app.py` line 27

### Contact Module Blueprint
- Blueprint name: `contact`
- URL prefix: None (root level)
- Registered in: `app.py` line 30

## Key Features

1. **Modular Structure**: Each module (career, contact) is self-contained with its own routes, models, and services
2. **Unified Configuration**: Single `config.py` handles all configuration
3. **Flask Blueprints**: Proper use of blueprints for route organization
4. **No Route Conflicts**: Career routes use `/api` prefix, contact uses root level
5. **Database**: SQLite database for career module (job applications)
6. **File Uploads**: Resume uploads stored in `media/resumes/`
7. **Email Service**: Contact module uses Resend API for email sending

## Import Structure

All imports use absolute paths from the backend root:
- `from config import Config`
- `from modules.career.models import db, JobApplication`
- `from modules.career.routes import applications_bp`
- `from modules.contact.routes import contact_bp`

## Running the Application

```bash
cd backend
python app.py
```

Server runs on: `http://127.0.0.1:8000`

## Environment Variables

Create a `.env` file from `env.template` with:
- `RESEND_API_KEY` - Required for contact module
- `FROM_EMAIL` - Required for contact module
- `TEST_EMAIL` - Optional, for test mode
- `SECRET_KEY` - Optional, Flask secret key
- `DEBUG` - Optional, debug mode (default: True)
- `DATABASE_URL` - Optional, database URL (default: SQLite)

## Migration Notes

### From backend_career:
- All routes moved to `modules/career/routes/`
- Models moved to `modules/career/models/`
- Services moved to `modules/career/services/`
- Routes now prefixed with `/api` (maintains compatibility)

### From backend_contact:
- All routes moved to `modules/contact/routes/`
- Services moved to `modules/contact/services/`
- Routes remain at root level `/contact` (maintains compatibility)

### API Compatibility:
- ✅ Career APIs: `/api/applications/` and `/api/check-data` work as before
- ✅ Contact API: `/contact` works as before
- ✅ No breaking changes to existing frontend calls


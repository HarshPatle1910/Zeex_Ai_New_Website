"""
Simple script to view all job applications from the database
Run: python view_applications.py
"""
from app import create_app
from modules.career.models import JobApplication

app = create_app()

with app.app_context():
    applications = JobApplication.query.order_by(JobApplication.created_at.desc()).all()
    
    print(f"\n{'='*70}")
    print(f"  JOB APPLICATIONS - Total: {len(applications)}")
    print(f"{'='*70}\n")
    
    if len(applications) == 0:
        print("No applications found in the database.")
    else:
        for i, app in enumerate(applications, 1):
            print(f"Application #{i}")
            print(f"  ID: {app.id}")
            print(f"  Name: {app.full_name}")
            print(f"  Email: {app.email}")
            print(f"  Phone: {app.mobile}")
            print(f"  Position: {app.position}")
            print(f"  Experience: {app.experience}")
            print(f"  Resume: {app.resume}")
            print(f"  Applied: {app.created_at.strftime('%Y-%m-%d %H:%M:%S')}")
            print(f"  Resume URL: http://127.0.0.1:8000/media/{app.resume}")
            print("-" * 70)
    
    print(f"\n{'='*70}")
    print(f"  End of Applications List")
    print(f"{'='*70}\n")


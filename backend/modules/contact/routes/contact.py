from flask import Blueprint, request, jsonify
from modules.contact.services.email_service import send_email
import traceback

contact_bp = Blueprint('contact', __name__)


@contact_bp.route('/contact', methods=['POST'])
def contact():
    """
    Handle contact form submission.
    
    Expected JSON body:
    {
        "name": "string",
        "email": "string",
        "subject": "string",
        "message": "string"
    }
    
    Returns:
        JSON response with success status and message
    """
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Validate that data exists
        if not data:
            return jsonify({
                "success": False,
                "error": "No data provided"
            }), 400
        
        # Extract and validate fields
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()
        
        # Validate that all fields are provided and not empty
        if not name:
            return jsonify({
                "success": False,
                "error": "Name is required"
            }), 400
        
        if not email:
            return jsonify({
                "success": False,
                "error": "Email is required"
            }), 400
        
        if not subject:
            return jsonify({
                "success": False,
                "error": "Subject is required"
            }), 400
        
        if not message:
            return jsonify({
                "success": False,
                "error": "Message is required"
            }), 400
        
        # Basic email format validation
        if '@' not in email or '.' not in email.split('@')[1]:
            return jsonify({
                "success": False,
                "error": "Invalid email format"
            }), 400
        
        # Send email
        try:
            # Send email to the user's email address
            send_email(
                to_email=email,
                subject=subject,
                message_body=message,
                sender_name=name
            )
            
            return jsonify({
                "success": True,
                "message": "Email sent successfully"
            }), 200
        
        except ValueError as e:
            # Email configuration error
            print(f"ValueError: {str(e)}")
            print(traceback.format_exc())
            return jsonify({
                "success": False,
                "error": str(e)
            }), 500
        
        except Exception as e:
            # Email sending error
            print(f"Email sending error: {str(e)}")
            print(traceback.format_exc())
            return jsonify({
                "success": False,
                "error": f"Failed to send email: {str(e)}"
            }), 500
    
    except Exception as e:
        # General error handling
        print(f"General error: {str(e)}")
        print(traceback.format_exc())
        return jsonify({
            "success": False,
            "error": f"An error occurred: {str(e)}"
        }), 500


@contact_bp.route('/demo-request', methods=['POST'])
def demo_request():
    """
    Handle demo request form submission.
    
    Expected JSON body:
    {
        "email": "string"
    }
    
    Returns:
        JSON response with success status and message
    """
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Validate that data exists
        if not data:
            return jsonify({
                "success": False,
                "error": "No data provided"
            }), 400
        
        # Extract and validate email
        email = data.get('email', '').strip()
        
        # Validate that email is provided
        if not email:
            return jsonify({
                "success": False,
                "error": "Email is required"
            }), 400
        
        # Basic email format validation
        if '@' not in email or '.' not in email.split('@')[1]:
            return jsonify({
                "success": False,
                "error": "Invalid email format"
            }), 400
        
        # Send email to admin
        try:
            # Create message for admin
            message_body = f"A demo request has been submitted from the ZeexAI website.\n\n"
            message_body += f"User Email: {email}\n\n"
            message_body += f"Please contact this user to schedule a demo."
            
            # Send email to admin@zeexai.com
            send_email(
                to_email="admin@zeexai.com",
                subject="New Demo Request - ZeexAI Website",
                message_body=message_body,
                sender_name="Demo Request Form"
            )
            
            return jsonify({
                "success": True,
                "message": "Demo request submitted successfully. We will contact you shortly."
            }), 200
        
        except ValueError as e:
            # Email configuration error
            print(f"ValueError: {str(e)}")
            print(traceback.format_exc())
            return jsonify({
                "success": False,
                "error": str(e)
            }), 500
        
        except Exception as e:
            # Email sending error
            print(f"Email sending error: {str(e)}")
            print(traceback.format_exc())
            return jsonify({
                "success": False,
                "error": f"Failed to send email: {str(e)}"
            }), 500
    
    except Exception as e:
        # General error handling
        print(f"General error: {str(e)}")
        print(traceback.format_exc())
        return jsonify({
            "success": False,
            "error": f"An error occurred: {str(e)}"
        }), 500


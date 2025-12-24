# Resend Email Domain Error - Fix Guide

## Problem
You're getting this error:
```
Failed to send email: Resend API error: The yourdomain.com domain is not verified. 
Please, add and verify your domain on https://resend.com/domains
```

This happens because you're using a custom domain (`FROM_EMAIL=noreply@yourdomain.com`) that hasn't been verified in Resend.

## Solution Options

### Option 1: Use Test Domain (Quick Fix for Development) ⚡

For development and testing, use Resend's test domain which doesn't require verification:

1. **Edit your `.env` file** in the `backend/` directory:
   ```env
   RESEND_API_KEY=your_resend_api_key
   FROM_EMAIL=noreply@resend.dev
   TEST_EMAIL=your_actual_email@gmail.com
   ```

   **Important:** 
   - Replace `your_actual_email@gmail.com` with the email address you used to sign up for Resend
   - This is the account owner email - Resend will only send emails to this address when using `@resend.dev`

2. **Restart the backend server:**
   ```bash
   # Stop the server (Ctrl+C) and restart
   cd backend
   python app.py
   ```

3. **Test the contact form** - emails will be sent to `TEST_EMAIL` address

**Limitations:**
- Can only send to the `TEST_EMAIL` address (your Resend account owner email)
- The original recipient email will be included in the message body for reference
- Perfect for development and testing

---

### Option 2: Verify Your Domain (For Production) 🚀

If you want to send emails to any recipient using your own domain:

1. **Go to Resend Dashboard:**
   - Visit: https://resend.com/domains
   - Sign in to your Resend account

2. **Add Your Domain:**
   - Click "Add Domain"
   - Enter your domain (e.g., `zeexai.com`)
   - Follow the verification steps

3. **Verify Domain:**
   - Resend will provide DNS records to add to your domain
   - Add the DNS records to your domain's DNS settings
   - Wait for verification (usually takes a few minutes to hours)

4. **Update `.env` file:**
   ```env
   RESEND_API_KEY=your_resend_api_key
   FROM_EMAIL=noreply@zeexai.com
   # TEST_EMAIL is not needed when using verified domain
   ```

5. **Restart the backend server**

**Benefits:**
- Can send emails to any recipient
- Uses your professional domain
- Better for production use

---

## Current Configuration Check

To see what's currently configured, check your `backend/.env` file:

```bash
# Windows
type backend\.env

# macOS/Linux
cat backend/.env
```

Make sure:
- `RESEND_API_KEY` is set to your actual API key
- `FROM_EMAIL` is either:
  - `noreply@resend.dev` (for testing) - requires `TEST_EMAIL` to be set
  - `noreply@yourdomain.com` (for production) - requires domain verification

---

## Quick Fix Steps (Recommended for Now)

1. Open `backend/.env` file
2. Change:
   ```env
   FROM_EMAIL=noreply@resend.dev
   TEST_EMAIL=your_email@example.com
   ```
   (Replace with the email you used for Resend account)

3. Restart backend: `python app.py`

4. Test the contact form - it should work now!

---

## Troubleshooting

### Still getting errors?

1. **Check API Key:**
   - Make sure `RESEND_API_KEY` is correct
   - Get it from: https://resend.com/api-keys

2. **Check Email Address:**
   - When using `@resend.dev`, `TEST_EMAIL` must match your Resend account owner email
   - Check your Resend account settings to confirm the owner email

3. **Restart Server:**
   - After changing `.env`, always restart the backend server

4. **Check Backend Logs:**
   - Look at the terminal where `python app.py` is running
   - Error messages will show what's wrong

---

## Summary

**For Development (Easiest):**
- Use `FROM_EMAIL=noreply@resend.dev`
- Set `TEST_EMAIL` to your Resend account email
- Restart server

**For Production:**
- Verify your domain in Resend
- Use `FROM_EMAIL=noreply@yourdomain.com`
- Restart server


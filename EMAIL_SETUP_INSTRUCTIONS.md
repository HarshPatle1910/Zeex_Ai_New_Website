# Email Setup Instructions

## ✅ What I Did

I've created a `.env` file in the `backend/` directory configured to use Resend's test domain. This will work immediately without domain verification.

## 🔧 What You Need to Do

### Step 1: Get Your Resend API Key

1. Go to https://resend.com
2. Sign in (or create an account if you don't have one)
3. Navigate to **API Keys** section
4. Create a new API key or copy an existing one

### Step 2: Edit the `.env` File

Open `backend/.env` and replace these two values:

```env
RESEND_API_KEY=your_resend_api_key_here
TEST_EMAIL=your_email@gmail.com
```

**Replace:**
- `your_resend_api_key_here` → Your actual Resend API key
- `your_email@gmail.com` → The email address you used to sign up for Resend

**Example:**
```env
RESEND_API_KEY=re_1234567890abcdef
TEST_EMAIL=harsh@example.com
```

### Step 3: Restart Backend Server

After saving the `.env` file:

1. Stop the backend server (press `Ctrl+C` in the terminal)
2. Restart it:
   ```bash
   cd backend
   python app.py
   ```

### Step 4: Test

Submit the contact form on your website. The email will be sent to your `TEST_EMAIL` address.

## 📧 How It Works

- **FROM_EMAIL**: `noreply@resend.dev` (Resend's test domain - no verification needed)
- **TEST_EMAIL**: Your Resend account email (where emails will be sent)
- **Limitation**: When using `@resend.dev`, emails can only be sent to your `TEST_EMAIL` address
- **Original recipient**: Will be included in the email body for reference

## 🚀 For Production (Later)

When you're ready to send emails to any recipient:

1. **Verify your domain:**
   - Go to https://resend.com/domains
   - Add and verify your domain (e.g., `zeexai.com`)
   - Follow the DNS verification steps

2. **Update `.env`:**
   ```env
   FROM_EMAIL=noreply@zeexai.com
   # Remove or comment out TEST_EMAIL
   ```

3. **Restart server**

## ✅ Current Configuration

The `.env` file is set up for **development/testing**:
- ✅ Uses test domain (no verification needed)
- ✅ Works immediately after adding API key and email
- ✅ Perfect for development

## 🆘 Troubleshooting

### Still getting domain error?
- Make sure you saved the `.env` file
- Make sure you restarted the backend server
- Check that `FROM_EMAIL=noreply@resend.dev` (not your custom domain)

### API Key error?
- Verify your API key is correct
- Make sure there are no extra spaces in the `.env` file
- Check that the API key is active in Resend dashboard

### Emails not arriving?
- Check your `TEST_EMAIL` matches your Resend account email
- Check spam folder
- Verify API key has email sending permissions

## 📝 File Location

The `.env` file is located at:
```
backend/.env
```

Make sure to edit this file, not `env.template`!


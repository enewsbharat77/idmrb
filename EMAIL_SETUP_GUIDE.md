# Email Setup Guide for Membership Form

## Overview
The form now sends data to your email when submitted. You need to configure an email service.

## Option 1: Using Nodemailer with Gmail (Recommended for beginners)

### Step 1: Install Nodemailer
```bash
npm install nodemailer
```

### Step 2: Setup Gmail App Password
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Step 3: Create .env.local file
Create a file named `.env.local` in your project root:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

### Step 4: Update API Route
In `src/app/api/send-email/route.js`, uncomment the Nodemailer section and update:
- Replace `'your-email@example.com'` with your actual email address

## Option 2: Using Resend (Modern, easier setup)

### Step 1: Sign up for Resend
1. Go to https://resend.com
2. Sign up for free account
3. Get your API key from dashboard

### Step 2: Install Resend
```bash
npm install resend
```

### Step 3: Create .env.local file
```
RESEND_API_KEY=re_your_api_key_here
```

### Step 4: Update API Route
In `src/app/api/send-email/route.js`, uncomment the Resend section and update:
- Replace `'your-email@example.com'` with your actual email address

## Option 3: Using SendGrid, Mailgun, or other services

Similar setup - install the package, get API key, and configure in the API route.

## Testing

1. After setup, restart your development server:
```bash
npm run dev
```

2. Fill out and submit the form
3. Check your email inbox for the submission data

## Important Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- For production, add environment variables in your hosting platform (Vercel, Netlify, etc.)
- The form data includes all fields: personal info, professional details, and payment info

## Current Status

✅ Form submission API created
✅ Frontend connected to API
⏳ Email service needs to be configured (choose Option 1 or 2 above)

## Need Help?

If you face any issues, let me know which option you want to use and I can help you configure it.

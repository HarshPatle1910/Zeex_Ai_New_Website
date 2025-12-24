# Production Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### Backend
- [ ] Generate strong `SECRET_KEY` (use: `python -c "import secrets; print(secrets.token_urlsafe(32))"`)
- [ ] Set `DEBUG=False` in `.env`
- [ ] Configure `CORS_ORIGINS` with production frontend URL(s)
- [ ] Set `RESEND_API_KEY` with production API key
- [ ] Set `FROM_EMAIL` with verified domain email
- [ ] Verify Resend domain is verified
- [ ] Test email sending functionality
- [ ] Create database backup (if upgrading from dev)
- [ ] Ensure `backend/media/resumes/` directory exists and is writable

### Frontend
- [ ] Set `VITE_API_BASE_URL` to production backend URL
- [ ] Build production bundle: `npm run build`
- [ ] Test production build locally: `npm run preview`
- [ ] Verify all API endpoints work
- [ ] Check for console errors
- [ ] Test all forms (Contact, Career, Demo Request)
- [ ] Verify all links work correctly
- [ ] Test responsive design on mobile devices

### Security
- [ ] `.env` file is in `.gitignore` (not committed)
- [ ] `SECRET_KEY` is not hardcoded
- [ ] CORS is restricted to production domains only
- [ ] HTTPS is configured
- [ ] SSL certificate is valid
- [ ] File upload size limits are enforced
- [ ] Database credentials are secure

### Infrastructure
- [ ] Domain name is configured
- [ ] DNS records are set correctly
- [ ] SSL certificate is installed
- [ ] Firewall rules are configured
- [ ] Server has sufficient resources
- [ ] Backup strategy is in place
- [ ] Monitoring is set up

## Post-Deployment

- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Test career application form
- [ ] Test demo request form
- [ ] Verify emails are being sent
- [ ] Check admin login works
- [ ] Test file uploads (resume uploads)
- [ ] Verify media files are accessible
- [ ] Check error handling (404, network errors)
- [ ] Monitor server logs for errors
- [ ] Test on different browsers
- [ ] Test on mobile devices
- [ ] Verify analytics (if applicable)

## Monitoring

- [ ] Set up uptime monitoring
- [ ] Configure error logging
- [ ] Set up email alerts for critical errors
- [ ] Monitor server resources (CPU, memory, disk)
- [ ] Review access logs regularly
- [ ] Check for security vulnerabilities

## Maintenance

- [ ] Schedule regular backups
- [ ] Keep dependencies updated
- [ ] Review and rotate secrets periodically
- [ ] Monitor for security updates
- [ ] Review error logs weekly
- [ ] Test disaster recovery procedures


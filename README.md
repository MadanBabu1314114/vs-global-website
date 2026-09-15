# AMAR'S WORLD — amarglobal.com

Static website deployed to GitHub Pages with custom domain `amarglobal.com`.

## Structure

- `index.html` — homepage (must stay at repo root)
- `about.html`, `services.html`, `study-in-uk.html`, `application-process.html`, `documents.html`, `faqs.html`, `contact.html`, `privacy-policy.html`, `terms-conditions.html`, `disclaimer.html`
- `css/style.css`, `js/script.js`
- `CNAME` — contains `amarglobal.com`
- `.nojekyll` — disables Jekyll processing
- `404.html` — Pages fallback

## Deploy

Push to `master` triggers `.github/workflows/deploy.yml` (static upload, no build).
GitHub repo Settings > Pages > Source must be `GitHub Actions`, custom domain `amarglobal.com`, Enforce HTTPS on.

## DNS (at domain registrar)

- Apex `@` A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www` CNAME: MadanBabu1314114.github.io

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

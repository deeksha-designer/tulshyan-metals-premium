# Tulshyan Metals product-first website prototype

Static, dependency-free website with client-side route rendering.

## Run locally

From this folder:

```powershell
node server.mjs
```

Open `http://localhost:5180/`. The included server supports deep-route fallbacks.

## Publication notes

- Connect the RFQ form to an approved backend before launch; it currently validates and produces an editable review state without transmitting data.
- Configure clean-URL rewrites/fallbacks and 301 redirects from legacy product URLs.
- See `BRAND_AUDIT.md` and `CONTENT_VALIDATION.md`.

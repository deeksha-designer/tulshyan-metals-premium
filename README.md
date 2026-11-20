# Tulshyan Metals premium homepage

Static, dependency-free single-page website with an accessible Products mega-dropdown and anchored homepage sections.

## Open directly

Double-click `index.html`. All styles, scripts, images and navigation paths are relative, so the homepage works through the browser's `file://` mode without a local server.

## Optional local server

From this folder:

```powershell
node server.mjs
```

Open `http://localhost:5180/`. The included server supports deep-route fallbacks.

## Publication notes

- Connect the RFQ form to an approved backend before launch; it currently validates and produces an editable review state without transmitting data.
- Configure clean-URL rewrites/fallbacks and 301 redirects from legacy product URLs.
- See `BRAND_AUDIT.md` and `CONTENT_VALIDATION.md`.

## Image provenance

- `assets/images/equal-angle.jpg`, `flat-bar.jpg`, `round-bar.jpg`, `square-bar.jpg` and `logo.png` are preserved public-site assets.
- `assets/images/generated/steel-angle-hero.png`, `rolling-mill.png` and `quality-inspection.png` were generated with the built-in image tool for this design preview.
- Generated manufacturing imagery is explicitly captioned as illustrative and must be replaced by approved Tulshyan plant photography before publication.

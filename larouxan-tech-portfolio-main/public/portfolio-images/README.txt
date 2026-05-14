PORTFOLIO IMAGES — INSTRUCTIONS
================================

Save your project screenshots in this folder with the EXACT filenames below.
The portfolio website automatically references these paths:

REQUIRED FILES:
  1. asana-board.png         → for "Enterprise Asana Automations" card
  2. heygen-pipeline.png     → for "Heygen + Json2Video Content Pipeline" card
  3. appsmith-dashboard.png  → for "Larouxan Tech Automation Hub (Appsmith)" card

NOTES:
- PNG, JPG, or WebP all work. If you save as .jpg, rename the imageUrl in
  src/components/Projects.tsx to match (e.g. /portfolio-images/asana-board.jpg)
- Recommended size: 1280x720 (16:9) or wider. Smaller works too — images are
  rendered with object-cover so they fill the card cleanly.
- Once saved, refresh the browser at /projects and the images will appear.
- No code changes needed after saving the files — Vite serves /public/* directly.

TO ADD MORE PROJECT IMAGES LATER:
- Drop the new image file into this folder
- Edit the relevant project entry in src/components/Projects.tsx
- Add or update: imageUrl: "/portfolio-images/your-filename.png"

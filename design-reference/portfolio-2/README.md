# Portfolio 2.0 visual reference

This is a separate React/JavaScript design prototype. It does not replace the current portfolio in `src/`.

From this directory, run `npm start` for a local preview or `npm run build` for a production build. The project uses React dependencies already installed at the repository root. If those are unavailable, run `npm install` here.

The portrait and project screenshots are copied from the current portfolio's `src/assets/` directory. The public CV at `public/cv/ramadan-cilomba-cv.pdf` is generated from reviewed text without the private address or phone number. To regenerate it after editing the text, run `python scripts/build_public_cv.py` (requires `pypdf`). The original private PDF is not copied into this project. Project content is centralized in `src/data.js`, and design tokens are at the top of `src/styles.css`.

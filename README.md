# Kapu Playground Demo

Local demo adapted from https://github.com/ellenlowing/kapu-glass-hydrogen.
The original animated playground, navigation, typography, and checked-in photographs are preserved. All catalog content is local; no Shopify account, credentials, API, analytics, or checkout is used.

## Run locally

Use Node.js 22 LTS and npm.

```sh
npm install
npm run dev
```

For a production preview:

```sh
npm run build
npm start
```

The default address is http://localhost:3000. Edit `vite.config.js` to change the port.

## Edit demo content

`app/data/demo.js` contains the five collections, placeholder products, descriptions, prices, and photo mappings. Photos are bundled from `app/img/`. Product pages and collection navigation work locally; the cart explains that checkout is unavailable. The original About copy and design credits remain.

The original GitHub repository is retained as the upstream remote for reference. The demo uses Vite and React Router for a fully static build. The original animation libraries are preserved.

## GitHub Pages

Pushes to `main` automatically build and deploy `dist/` through `.github/workflows/pages.yml`. GitHub Pages must use GitHub Actions as its publishing source. The workflow reads the Pages base path, so fonts, photos, and scripts work under the repository subdirectory. Navigation uses hash URLs (for example, `#/collections/vessels`) so shared product links survive refreshes without a server.

To preview the hosted subdirectory locally:

```sh
BASE_PATH=/kapu-playground-demo/ npm run build
npm start
```

Open http://localhost:3000/kapu-playground-demo/.

## Recovered catalog images

The demo now uses 23 recovered products across Vessels (8), Accessories (3), Magazine (1), Workshop (1), and Archive (10). Original product names and image galleries are restored where available; descriptions and prices remain placeholders.

`app/data/recovered.json` records the source page, image source URLs, and assignment evidence. Images are stored locally under `public/images/recovered/<collection>/`. Most assignments come directly from archived collection metadata. The three accessories are inferred from identifiable bracelet, cap, and necklace images on the archived homepage. This is a partial reconstruction, not a complete historical catalog.

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

The default address is http://localhost:3000. Set `PORT` to change it.

## Edit demo content

`app/data/demo.js` contains the five collections, placeholder products, descriptions, prices, and photo mappings. Photos are bundled from `app/img/`. Product pages and collection navigation work locally; the cart explains that checkout is unavailable. The original About copy and design credits remain.

This checkout is on `demo/local-content`. The original GitHub repository is retained as the upstream remote for reference. The old Oxygen deployment workflow has been removed; this demo has not been published. Future hosting will need a Node server that runs `npm start` and serves `public/`.

The project retains Remix 1 and its original animation libraries to preserve the design. Modernizing that dependency stack is separate from this demo conversion.

## Recovered catalog images

The demo now uses 23 recovered products across Vessels (8), Accessories (3), Magazine (1), Workshop (1), and Archive (10). Original product names and image galleries are restored where available; descriptions and prices remain placeholders.

`app/data/recovered.json` records the source page, image source URLs, and assignment evidence. Images are stored locally under `public/images/recovered/<collection>/`. Most assignments come directly from archived collection metadata. The three accessories are inferred from identifiable bracelet, cap, and necklace images on the archived homepage. This is a partial reconstruction, not a complete historical catalog.

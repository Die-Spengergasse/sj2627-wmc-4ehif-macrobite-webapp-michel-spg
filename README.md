# MacroBite WebApp

Next.js (App Router) frontend of the MacroBite recipe manager. Recipes are read from
`data/recipes.json`; images are served from `public/images/`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001). The port is 3001 because the
`macrobite-api` uses 3000.

## Pages

| Route           | Content                          |
| --------------- | -------------------------------- |
| `/`             | Home page with hero section      |
| `/recipes`      | Recipe list                      |
| `/recipes/[id]` | Recipe details                   |

## Scripts

| Command         | Purpose                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Development server (port 3001)   |
| `npm run build` | Production build                 |
| `npm start`     | Run the production build         |
| `npm run lint`  | ESLint                           |

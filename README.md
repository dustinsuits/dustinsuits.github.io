# dustinsuits.github.io

Source for [dustinsuits.github.io](https://dustinsuits.github.io) — my personal site. Security & IT operations on one side, [Shop Humble](https://dustinsuits.github.io/projects/) woodworking on the other.

Built with [Astro](https://astro.build) + Tailwind CSS, deployed automatically to GitHub Pages on every push to `main` (see `.github/workflows/deploy.yml`).

## Adding content

- **New project** (Shop Humble build or security/IT write-up): add a markdown file to `src/content/projects/`, following the frontmatter shape of an existing entry. Drop photos in a co-located folder and reference them in `coverImage`/`images`. Set `draft: true` until it's ready to publish.
- **New note**: add a markdown file to `src/content/notes/`.
- **Now page**: edit `src/content/now.md` directly.

Then `git commit && git push` — the site rebuilds and redeploys automatically.

## Local development

```sh
npm install
npm run dev
```

## License

Site code is MIT-licensed (see `LICENSE`). Written content and photos are © Dustin Suits, all rights reserved unless noted otherwise.

/** @type {import('next').NextConfig} */

// Served from the user site https://abedshouman.github.io (repo named
// `abedshouman.github.io`), so no basePath is needed — it serves from root.
const nextConfig = {
  output: 'export', // static HTML export for GitHub Pages
  images: {
    unoptimized: true, // no image optimization server on static hosting
  },
  trailingSlash: true, // maps /about -> /about/index.html cleanly
};

export default nextConfig;

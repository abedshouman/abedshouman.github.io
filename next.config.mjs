/** @type {import('next').NextConfig} */

// The repo is served from https://abedshouman.github.io/portfolio,
// so we need a basePath. If you rename the repo to
// `abedshouman.github.io`, set basePath to '' and it serves from root.
const repo = 'portfolio';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // static HTML export for GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true, // no image optimization server on static hosting
  },
  trailingSlash: true, // maps /about -> /about/index.html cleanly
};

export default nextConfig;

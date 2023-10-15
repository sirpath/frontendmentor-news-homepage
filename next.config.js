/** @type {import('next').NextConfig} */

/**
 * Set REPO_PATH for config github pages
 * 
 * example: https://github.com/yourname/myproject-101-somechallenge
 * const REPO_PATH = 'myproject-101-somechallenge'
 */
const REPO_PATH = 'frontendmentor-news-homepage'






/**
 * Magic Area
 */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  poweredByHeader: false,
}

if (process.env.NODE_ENV !== "development") {
  if (REPO_PATH === 'MY-REPO-PATH') {
    throw `\n\n\n\n\x1b[31mFatal Error!!\x1b[0m You need to change \x1b[4mREPO_PATH\x1b[0m in \x1b[4mnext.config.js\x1b[0m before build !!!\n\n\n\n`
  }

  const assetPrefix = `/${REPO_PATH}/`
  const basePath = `/${REPO_PATH}`
  nextConfig.assetPrefix = assetPrefix
  nextConfig.basePath = basePath
}

module.exports = nextConfig
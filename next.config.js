const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */

module.exports = withContentlayer({
  reactStrictMode: true,
  staticPageGenerationTimeout: 10,
  experimental: {
    appDir: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra();

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })

module.exports = withNextra(nextConfig);

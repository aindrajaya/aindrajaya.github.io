module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      { source: '/work/webgis', destination: '/works/webgis', permanent: true },
      { source: '/work/webgl', destination: '/works/webgl', permanent: true }
    ]
  }
}


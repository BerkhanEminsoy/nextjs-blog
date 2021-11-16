const path = require('path')
const withImages = require('next-images')

module.exports = withImages({
  assetPrefix: 'https://berkhaneminsoy.github.io/nextjs-blog',
  dynamicAssetPrefix: true,
  webpack(config, options) {
    return config
  }
  }),
  {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  /*
  images: {
    loader: "imgix",
    path: "https://berkhaneminsoy.github.io/nextjs-blog",
  },
  */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}

/*
module.exports = withImages({
  assetPrefix: 'https://berkhaneminsoy.github.io/nextjs-blog',
  dynamicAssetPrefix: true,
  webpack(config, options) {
    return config
  }
})
*/
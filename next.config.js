const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
  basePath: '/nextjs-blog',
  assetPrefix: '/nextjs-blog',
}

/*
module.exports = {
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
}
*/
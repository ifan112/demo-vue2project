const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  configureWebpack: {
    name: 'demo-vue2project',
    resolve: {
      alias: {
        '@': resolve('src'),
        '@styles': resolve('src/styles'),
        '@locales': resolve('src/locales'),
        '@views': resolve('/src/views')
      }
    }
  }
}

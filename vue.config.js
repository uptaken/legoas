const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'sass-loader',
              options: {
                // you can also read from a file, e.g. `variables.scss`
                // use `prependData` here if sass-loader version = 8, or
                // `data` if sass-loader version < 8
                prependData: `
                  @import "@/assets/scss/_variables.scss";
                `
              }
            }
          ],
        },
      ],
    },
  },
})

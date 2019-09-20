module.exports = {
  env: {
    production: {
      presets: [
        '@vue/app',
      ],
    },
    development: {
      presets: [
        '@vue/app',
      ],
    },
    test: {
      presets: [
        "@babel/preset-env"
      ],
      plugins: [
        "@babel/plugin-transform-runtime"
      ]
    }
  },
}

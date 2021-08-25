module.exports = {
   root: true,
   env: {
      browser: true,
      node: true
   },
   extends: [
      'plugin:wdio/recommended',
      'plugin:nuxt/recommended',
      'prettier'
   ],
   plugins: [
      'wdio'
   ],
   // add your custom rules here
   rules: {}
}


const withSass = require("@zeit/next-sass");
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withTM = require('@weco/next-plugin-transpile-modules');

module.exports = withSass(withImages(withFonts(withTM(
  {
    transpileModules: [''],
    target: 'serverless',
    assetPrefix: 'http://localhost:3000',
  }
))));

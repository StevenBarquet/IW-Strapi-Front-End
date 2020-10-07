const webpack = require("webpack");
const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    apiContenerizedUrl: process.env.API_CONTENERIZED_URL,
  },
};

const mainConfig = {
  ...nextConfig,
  webpack: (config, { dev }) => {
    if (dev) {
      // eslint-disable-next-line no-param-reassign
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
};

module.exports = withPlugins(
  // [
  //   withPWA,
  //   {
  //     ...mainConfig,
  //     pwa: {
  //       dest: "public",
  //       runtimeCaching,
  //     },
  //   },
  // ],
  [withSass, withImages, withCSS],
  mainConfig
);

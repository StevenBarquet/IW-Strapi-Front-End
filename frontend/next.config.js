const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const path = require("path");

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    apiContenerizedUrl: process.env.API_CONTENERIZED_URL,
  },
};

const mainConfig = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    if (isServer) {
      return config;
    }

    const isProduction = config.mode === "production";

    if (!isProduction) {
      return config;
    }

    const oldEntry = config.entry;
    // eslint-disable-next-line no-param-reassign
    config.entry = () =>
      oldEntry().then((entry) => {
        entry["main.js"].push(path.resolve("./utils/offline"));
        return entry;
      });

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        cacheId: "web-interware",
        filepath: path.resolve("./public/sw.js"),
        staticFileGlobs: ["public/**/*"],
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: "fastest",
            urlPattern: /[.](png|jpg|css)/,
          },
          {
            handler: "networkFirst",
            urlPattern: /^http.*/,
          },
        ],
      })
    );

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias["~"] = path.join(__dirname, "./");

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
};

module.exports = withPlugins([withSass, withImages, withCSS], mainConfig);

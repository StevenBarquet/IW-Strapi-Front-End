const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const withOffline = require("next-offline");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
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
  [
    withSass,
    withImages,
    withCSS,
    [
      withOffline,
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? "service-worker.js"
            : "static/service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        async rewrites() {
          return [
            {
              source: "/service-worker.js",
              destination: "/_next/static/service-worker.js",
            },
          ];
        },
      },
    ],
  ],
  mainConfig
);

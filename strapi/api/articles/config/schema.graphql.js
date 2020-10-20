module.exports = {
  query: `
    articlesCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      vacanciesCount: {
        description: 'Return the count of articles',
        resolverOf: 'application::articles.articles.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.articles.services.articles.count(options.where || {});
        },
      },
    },
  },
};
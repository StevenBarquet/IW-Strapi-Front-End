module.exports = {
    query: `
      vacanciesCount(where: JSON): Int!
    `,
    resolver: {
      Query: {
        vacanciesCount: {
          description: 'Return the count of vacancies',
          resolverOf: 'application::vacancies.vacancies.count',
          resolver: async (obj, options, ctx) => {
            return await strapi.api.vacancies.services.vacancies.count(options.where || {});
          },
        },
      },
    },
  };
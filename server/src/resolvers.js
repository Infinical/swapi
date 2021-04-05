module.exports = {
  Query: {
    people: (_, { name, page }, { dataSources }) =>
      dataSources.swapiAPI.getPeople({ name: name, page: page }),
  },
};

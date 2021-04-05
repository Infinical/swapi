module.exports = {
  Query: {
    people: (_, { name }, { dataSources }) =>
      dataSources.swapiAPI.getPeople({ name: name }),
  },
};

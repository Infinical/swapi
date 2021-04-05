module.exports = {
  Query: {
    people: (_, __, { dataSources }) => dataSources.swapiAPI.getPeople(),
  },
};

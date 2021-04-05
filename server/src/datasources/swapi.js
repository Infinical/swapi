const { RESTDataSource } = require("apollo-datasource-rest");

class SwapiAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getPeople({ name, page }) {
    const response = await this.get("people", { search: name, page: page });
    return response;
  }

  personReducer(person) {
    return {
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender,
      homeworld: person.homeworld,
    };
  }
}

module.exports = SwapiAPI;

const CityResource = (city) => {
  // 单个对象
  return {
    value: city.id,
    label: city.city + ', ' + city.postalCode,
  }
}

const CityCollection = (cities) => {
  return cities.map((city) => CityResource(city))
}

module.exports = {
  CityResource,
  CityCollection,
}

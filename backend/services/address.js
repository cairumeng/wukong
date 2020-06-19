const { Op } = require('sequelize')
const { City } = require('../models')
const { Address } = require('../models')

const getCities = async (q) => {
  const cities = await City.findAll({
    where: {
      [Op.or]: {
        city: {
          [Op.like]: `${q}%`,
        },
        postalCode: {
          [Op.like]: `${q}%`,
        },
      },
    },
    limit: 10,
    attributes: ['id', 'city', 'postalCode'],
  })

  return cities
}

const createAddress = async ({
  userId,
  cityId,
  firstName,
  lastName,
  lat,
  lng,
  phone,
}) => {
  return Address.create({
    userId,
    cityId,
    firstName,
    lastName,
    lat,
    lng,
    phone,
  })
}

module.exports = {
  getCities,
  createAddress,
}

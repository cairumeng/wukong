const { Op } = require('sequelize')
const { City, Address } = require('../models')

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

const getAddresses = async (userId) => {
  const addresses = await Address.findAll({
    where: {
      userId,
    },
    attributes: ['firstName', 'lastName', 'phone', 'address', 'cityId'],
  })

  return addresses
}

const createAddress = async ({
  userId,
  cityId,
  firstName,
  lastName,
  lat,
  lng,
  address,
  phone,
}) => {
  return Address.create({
    userId,
    cityId,
    firstName,
    lastName,
    address,
    lat,
    lng,
    phone,
  })
}

module.exports = {
  getCities,
  createAddress,
  getAddresses,
}

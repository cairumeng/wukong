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
  let addresses = await Address.findAll({
    where: {
      userId,
    },
    attributes: ['firstName', 'lastName', 'phone', 'address', 'cityId'],
  })

  addresses = await Promise.all(
    addresses.map(async (address) => ({
      ...address.dataValues,
      city: await City.findOne({
        where: {
          id: address.dataValues.cityId,
        },
        attributes: ['city', 'postalCode'],
      }),
    }))
  )

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

const AdImage = require('../models').AdImage
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const getCarouselImages = async () => {
  const today = new Date()
  return await AdImage.findAll({
    attributes: ['imageUrl', 'redirectUrl', 'position'],
    where: {
      startedAt: { [Op.lte]: today },
      finishedAt: { [Op.gte]: today },
    },
    order: ['position'],
  })
}

module.exports = { getCarouselImages }

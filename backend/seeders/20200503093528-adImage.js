'use strict'
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const adImages = []
    const adImageUrls = [
      'https://dy8moltrwasx7.cloudfront.net/carousels/202004/24/2_1587735873_YjiFqz4hil.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202002/21/2_1582280101_6stHAnGgQb.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202002/15/2_1581782503_ZGakCXUgA4.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202002/11/2_1581415401_PgKNlsI9lv.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201912/29/2_1577610919_l6Eq6jwEpr.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201912/29/2_1577610341_dQkRVNy5A4.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201911/22/2_1574425339_dl0E69wi1Z.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201911/03/2_1572772449_6jFNtOWHT6.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/placeholder/placeholder-catalog.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/placeholder/placeholder-catalog.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/placeholder/placeholder-catalog.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/placeholder/placeholder-catalog.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/placeholder/placeholder-catalog.jpg',
    ]
    for (let i = 0; i < adImageUrls.length; i++) {
      adImages.push({
        imageUrl: adImageUrls[i],
        redirectUrl: 'https://www.google.com/',
        startedAt: faker.date.recent(),
        finishedAt: faker.date.future(),
        position: i,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }
    return queryInterface.bulkInsert('adImages', adImages, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('adImages', null, {})
  },
}

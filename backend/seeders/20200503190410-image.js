'use strict'
const Product = require('../models').Product
const Category = require('../models').Category
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const images = []

    const productImageUrls = [
      'https://dy8moltrwasx7.cloudfront.net/products/1569593554_mKIUZL5HLf-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1552483485_NcPeVg0HjP-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1549012326_vOBBtTXkl8-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1548327107_Zvi7i1yAIS-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/16574-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/16573-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5137-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5134-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5131-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1581410772_sLp58ehyRw-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5149-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5145-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5122-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5136-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5133-mini.jpg',
      'https://s3-eu-west-1.amazonaws.com/wukong-uploads/products/5147-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1573571092_LOyDUGCPMe-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1570782851_4irWTVwBzR-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1566225682_JoFz8glNwB-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1560589550_dqpGFFut0d-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1558426682_POfair7Ihn-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1553954062_4xGGPABn3m-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1549022498_2UYO6ChkE1-mini.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products/1549019175_pWoipsl3oB-mini.jpg',
    ]

    const productDescriptionUrls = [
      'https://dy8moltrwasx7.cloudfront.net/products_contents/201805/25/2_1527241529_unarhXrjm8.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products_contents/201805/27/2_1527424189_cT3SrJsujM.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products_contents/201806/01/2_1527849685_OM6u0dTG6z.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products_contents/201806/01/2_1527849743_zDOOSLdPcM.jpg',
      'https://dy8moltrwasx7.cloudfront.net/products_contents/201806/01/2_1527849558_xwiHVCatjp.jpg',
    ]
    for (let i = 1; i <= 2000; i++) {
      images.push({
        url: faker.random.arrayElement(productImageUrls),
        typeId: i,
        type: 'productImage',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
      images.push({
        url: faker.random.arrayElement(productDescriptionUrls),
        typeId: i,
        type: 'productDescription',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }

    const categoryImageUrls = [
      'https://dy8moltrwasx7.cloudfront.net/carousels/202001/22/2_1579698147_e5Dg2V6hHL.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202002/15/2_1581784990_CKTAEfcn6Y.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202004/25/2_1587804522_P7aUBcaF2Y.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202005/01/2_1588325878_3SJWxDfR2i.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201911/02/2_1572702609_HQv0JL2odm.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201911/02/2_1572702663_piDvxXKhxz.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201807/08/2_1531037082_exc1s9KH0F.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201807/08/2_1531032590_KY0jfsLvd3.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201807/08/2_1531032552_cWEf60JwHq.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201810/17/2_1539792548_uACEpQUI7B.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201903/17/2_1552807317_JWP5rZjRXR.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/201903/17/2_1552807770_CjCqAxyR2P.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202002/05/2_1580911073_HvfrHMickF.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202001/09/2_1578565166_eP1JExFSYR.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202001/09/2_1578577808_s0es10HKdI.jpg',
      'https://dy8moltrwasx7.cloudfront.net/carousels/202005/03/2_1588504998_wKYcKw62bt.jpg',
    ]
    for (let i = 1; i <= 12; i++) {
      images.push({
        url: faker.random.arrayElement(categoryImageUrls),
        typeId: i,
        type: 'categoryImage',
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      })
    }

    return queryInterface.bulkInsert('images', images, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {})
  },
}

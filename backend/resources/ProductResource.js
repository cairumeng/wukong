const ProductResource = (product) => {
  // 单个对象
  return {
    id: product.id,
    name: product.name.text,
    price: product.price,
    productUnit: product.productUnit.text,
    unit: Number(product.unit),
    discount: product.discount,
    status: product.status,
    images: product.images.map((image) => image.url),
  }
}

const ProductCollection = (products, count, pageIndex, pageSize) => {
  return {
    data: products.map((product) => ProductResource(product)),
    meta: {
      count,
      lastPage: parseInt(Math.ceil(count / pageSize)) - 1,
      pageIndex: parseInt(pageIndex),
      pageSize: parseInt(pageSize),
    },
  }
}

module.exports = {
  ProductResource,
  ProductCollection,
}

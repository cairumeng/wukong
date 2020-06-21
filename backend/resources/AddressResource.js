const AddressResource = (address) => {
  // 单个对象
  return {
    firstName: address.firstName,
    lastName: address.lastName,
    phone: address.phone,
    address: address.address,
    city: address.city.city,
    postalCode: address.city.postalCode,
  }
}

const AddressCollection = (addresses) => {
  return addresses.map((address) => AddressResource(address))
}

module.exports = {
  AddressResource,
  AddressCollection,
}

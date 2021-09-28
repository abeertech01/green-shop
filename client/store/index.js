export const state = () => {
  return {
    products: [],
  }
}

export const mutations = {
  GET_PRODUCTS(state, payload) {
    state.products = payload
  },
  GET_IMAGE_LINK(state) {
    state.products.forEach((product) => {
      product.imageLink = `http://localhost:9000/uploads/${product.prodImage}`
    })
  },
}

export const actions = {
  async getProducts(context) {
    const response = await fetch('http://localhost:9000/api/products')
    const products = await response.json()
    context.commit('GET_PRODUCTS', products)
    context.commit('GET_IMAGE_LINK')
  },
}

export const state = () => {
  return {
    products: [],
    boughtProducts: [],
    cartList: 0,
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
  BUY_PRODUCT(state, prodId) {
    const record = state.boughtProducts.find((prod) => prod._id === prodId)

    if (record) {
      const recordIndex = state.boughtProducts.findIndex(
        (prod) => prod._id === prodId
      )
      state.boughtProducts[recordIndex].boughtStock++
    } else {
      state.boughtProducts.push({
        prodId,
        boughtStock: 1,
      })
    }
  },
  INCREASE_CART_LIST(state) {
    state.cartList++
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

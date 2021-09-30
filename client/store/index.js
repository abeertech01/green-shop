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
  BUY_PRODUCT(state, payload) {
    const record = state.boughtProducts.find(
      (prod) => prod._id === payload.prodId
    )

    if (record) {
      const recordIndex = state.boughtProducts.findIndex(
        (prod) => prod._id === payload.prodId
      )
      state.boughtProducts[recordIndex].boughtStock++
    } else {
      state.boughtProducts.push(payload)
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
  async register(_, payload) {
    const res = await fetch('http://localhost:9000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    const registered = await res.json()

    if (!registered) {
      console.log(registered)
    }
  },
}

<template>
  <div class="product-card">
    <div
      :style="{ 'background-image': `url('${product.imageLink}')` }"
      class="prod-image"
    ></div>
    <div class="prod-details">
      <h2 class="prod-name">{{ product.prodName }}</h2>
      <p class="prod-quan">
        <span>Quantity:</span> <span>{{ product.quantity }}</span>
      </p>
      <p class="prod-price">
        <span>Price:</span> <span>{{ product.price }}</span>
      </p>
      <p class="prod-stock">
        <span>Stock:</span> <span>{{ product.stock }}</span>
      </p>
    </div>
    <button class="cart-btn" @click="addProduct">
      <img src="../assets/shopping-cart.svg" alt="" /> Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  props: ['product'],
  methods: {
    addProduct() {
      this.$store.commit('BUY_PRODUCT', {
        prodId: this.product._id,
        prodName: this.product.prodName,
        quantity: this.product.quantity,
        price: this.product.price,
        boughtStock: 1,
      })
      this.$store.commit('INCREASE_CART_LIST')
    },
  },
}
</script>

<style scoped>
.product-card {
  margin: 2rem 0.5rem;
  width: 25rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}
.prod-image {
  width: 100%;
  height: 18rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #7ffdc8;
  border-radius: 0.5rem;
}
.prod-details {
  padding: 1rem 1rem 0 1rem;
}

.cart-btn img {
  max-height: 1rem;
  max-width: 1.5rem;
}

.cart-btn {
  margin: 1rem;
  padding: 0.3rem;
  font-size: 1rem;
  color: whitesmoke;
  width: calc(100% - 2rem);
  background-color: #184d5c;
  border: none;
  border-radius: 0.3rem;
  outline: none;
  cursor: pointer;
}

.prod-details > p {
  font-size: 1.1rem;
}

.prod-details > p:not(:last-child) {
  margin-bottom: 0.5rem;
}

.prod-name {
  margin-bottom: 1.5rem;
}
</style>
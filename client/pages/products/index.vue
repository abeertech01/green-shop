<template>
  <div class="container">
    <div>
      <img
        class="shopping-bag"
        src="../../assets/shopping-bags.png"
        alt="shopping-bag"
      />
      <div class="cart-counter">
        <div class="counter">{{ cartList }}</div>
        <button class="go-to-cart">
          <img src="../../assets/shopping-cart.svg" alt="shopping-cart" /> Cart
          List
        </button>
      </div>
      <div class="product-list">
        <ProductCard v-for="prod in products" :key="prod._id" :product="prod" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    cartList() {
      return this.$store.state.cartList
    },
  },
  async created() {
    await this.$store.dispatch('getProducts')
  },
}
</script>

<style>
.shopping-bag {
  margin-top: 3rem;
}
.cart-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  margin: 4rem 0.5rem 0 0.5rem;
}
.cart-counter .counter {
  display: block;
  width: 3.5rem;
  height: 2.83625rem;
  font-size: 2rem;
  border-radius: 0.4rem;
  border: 0.2rem solid #57f0b0;
  background-color: #7ffdc8;
}
.go-to-cart {
  font-size: 1.8rem;
  color: #277c94;
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  background: none;
  border: 0.2rem solid #57f0b0;
  border-radius: 0.4rem;
  outline: none;
  cursor: pointer;
}
.go-to-cart:hover {
  background-color: #d0fdeb;
}
.go-to-cart img {
  position: relative;
  top: 0.2rem;
  width: 2rem;
  height: 2rem;
}
.product-list {
  margin-top: 4rem;
}
</style>
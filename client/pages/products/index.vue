<template>
  <div class="container">
    <div>
      <img src="../../assets/shopping-bags.svg" alt="shopping-bag" />
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
  },
  async created() {
    await this.$store.dispatch('getProducts')
  },
}
</script>

<style>
.container {
  margin: 5rem auto 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.product-list {
  margin-top: 4rem;
}
</style>
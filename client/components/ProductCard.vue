<template>
  <div class="product-card">
    <div
      :style="{ 'background-image': `url('${product.imageLink}')` }"
      class="image"
    ></div>
    <div class="details">
      <h2>{{ product.prodName }}</h2>
      <p>
        <span>Quantity:</span> <span>{{ product.quantity }}</span>
      </p>
      <p>
        <span>Price:</span> <span>{{ product.price }}</span>
      </p>
      <p>
        <span>Stock:</span> <span>{{ product.stock }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  props: ['product'],
}
</script>

<style scoped>
.product-card {
  margin: 2rem 0.5rem;
  width: 25rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}
.image {
  width: 100%;
  height: 18rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #7ffdc8;
  border-radius: 0.5rem;
}
.details {
  padding: 1rem;
}
</style>
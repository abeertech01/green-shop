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
.image {
  width: 150px;
  height: 150px;
}
</style>
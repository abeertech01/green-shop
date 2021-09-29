<template>
  <div class="container">
    <div>
      <h1>Green Shop</h1>
      <Logo />
      <NuxtLink class="to-products" to="/products">Buy now</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 4rem;
  margin-bottom: 5rem;
}
.to-products {
  background-color: #7ffdc8;
  padding: 0.4rem 1rem;
  border-radius: 0.3rem;
  font-size: 1.5rem;
}
</style>
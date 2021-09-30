<template>
  <div class="container">
    <div>
      <h1 class="site-title">Green Shop</h1>
      <Logo />
      <NuxtLink class="to-products" to="/products">Buy now</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');

.site-title {
  font-size: 4rem;
  margin-bottom: 5rem;
  color: #002e3b;
  font-family: 'Francois One', sans-serif;
}
.to-products {
  background-color: #7ffdc8;
  padding: 0.4rem 1rem;
  border-radius: 0.3rem;
  font-size: 1.5rem;
}
</style>
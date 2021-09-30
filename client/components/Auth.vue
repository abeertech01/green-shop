<template>
  <div class="auth-comp">
    <div class="auth">
      <div class="products-page">
        <NuxtLink to="/products">Products</NuxtLink>
      </div>
      <div class="auth-btns">
        <NuxtLink to="/register">Register</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Authentication buttons */
.auth-comp {
  padding: 1rem 0;
  background-color: #327081;
}
.auth {
  width: 25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
}
.auth a {
  background-color: #01c774;
  color: aliceblue;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
}
</style>
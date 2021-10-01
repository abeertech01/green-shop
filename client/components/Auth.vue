<template>
  <div class="auth-comp">
    <div class="auth">
      <div class="products-page">
        <NuxtLink to="/products">Products</NuxtLink>
      </div>
      <div class="auth-btns">
        <NuxtLink to="/register" v-show="!isLoggedin">Register</NuxtLink>
        <NuxtLink to="/login" v-show="!isLoggedin">Login</NuxtLink>
        <button @click="logoutApp" v-show="isLoggedin">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedin() {
      const token = this.$store.state.token
      if (token) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    logoutApp() {
      localStorage.removeItem('green-shop-token')
      this.$store.commit('REMOVE_TOKEN')
    },
  },
}
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
.auth a:hover {
  background-color: #01af67;
}
.auth-btns button {
  min-height: 1.83625rem;
  background-color: #0c4757;
  border: none;
  outline: none;
  color: aliceblue;
  padding: 0 0.6rem;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
}
.auth-btns button:hover {
  background-color: #04313d;
}
</style>
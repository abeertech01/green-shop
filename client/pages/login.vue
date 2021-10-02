<template>
  <div class="container">
    <div class="auth-form">
      <h1 class="title">Login</h1>
      <div class="user-email">
        <label for="email">Email<small class="compulsory">*</small></label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          v-model="email"
          :class="{ tomatoRed: err_email }"
        />
        <p class="error-para" v-if="err_email">Email is required!</p>
      </div>

      <div class="user-password">
        <label for="password"
          >Password<small class="compulsory">*</small></label
        >
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          v-model="password"
          :class="{ tomatoRed: err_password }"
        />
        <p class="error-para" v-if="err_password">Password is required!</p>
      </div>

      <div class="error-para" v-if="err_common">
        {{ loginErrorMsg }}
      </div>

      <div class="login-div">
        <button class="login-btn" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      common_error: '',
      err_email: false,
      err_password: false,
      err_common: false,
    }
  },
  computed: {
    checkPassword() {
      const regexPW = this.password.match(/[\W0-9A-Za-z_]/g).join('')
      return this.password === regexPW
    },
    loginErrorMsg() {
      return this.$store.state.loginErrorMsg
    },
  },
  methods: {
    async login() {
      if (this.email.length === 0) {
        this.err_email = true
      } else {
        this.err_email = false
      }

      if (this.password.length === 0) {
        this.err_password = true
      } else {
        this.err_password = false
      }

      if (this.err_email === false && this.err_password === false) {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })

        if (this.loginErrorMsg) {
          this.err_common = true
        } else {
          this.err_common = false
        }
      }
    },
  },
}
</script>

<style scoped>
.auth-form {
  width: 25rem;
  padding: 0 2.5rem;
}

.auth-form .title {
  margin-bottom: 1rem;
}

.auth-form > div:not(:last-child) {
  margin-bottom: 1.5rem;
}

label {
  text-align: left;
  margin-bottom: 0.2rem;
}

.auth-form > div input {
  width: 100%;
  padding: 0.3rem;
}

label,
.auth-form > div input {
  display: block;
  font-size: 1.2rem;
}

.error-para {
  text-align: left;
  color: tomato;
}

.login-div {
  width: 100%;
}

.login-btn {
  width: 100%;
  padding: 0.3rem;
  font-size: 1rem;
  border: none;
  color: aliceblue;
  font-weight: bold;
  background-color: #073d4d;
  border-radius: 0.2rem;
  cursor: pointer;
  outline: none;
}
.compulsory {
  color: tomato;
}
.tomato-red {
  outline: tomato;
}
</style>
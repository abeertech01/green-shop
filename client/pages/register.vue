<template>
  <div class="container">
    <div class="auth-form">
      <h1 class="title">Register</h1>
      <div class="user-name">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter Name" v-model="name" />
        <p class="error-para" v-if="err_name">
          Name has to have minimum 2 letters
        </p>
      </div>

      <div class="user-email">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          v-model="email"
        />
        <p class="error-para" v-if="err_email">This email is invalid!</p>
      </div>

      <div class="user-password">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          v-model="password"
        />
        <p class="error-para" v-if="err_password">
          Password needs to be minimum 8 characters long!
        </p>
      </div>

      <div class="user-confirm-password">
        <label for="password">Confirm Password</label>
        <input
          type="password"
          id="password"
          placeholder="Confirm Password"
          v-model="confirmPassword"
        />
        <p class="error-para" v-if="err_confirmPassword">
          Password doesn't match
        </p>
      </div>

      <div class="error-para" v-if="err_common">
        Every input must not be empty!!
      </div>

      <div class="signup-div">
        <button class="signup-btn" @click="signup">Signup</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      err_name: false,
      err_email: false,
      err_password: false,
      err_confirmPassword: false,
      err_common: false,
    }
  },
  methods: {
    signup() {
      if (this.name.length < 2 && this.name.length !== 0) {
        this.err_name = true
      } else {
        this.err_name = false
      }

      if (!this.email.includes('@') && this.email.length !== 0) {
        this.err_email = true
      } else {
        this.err_email = false
      }

      if (this.password.length < 8 && this.password.length !== 0) {
        this.err_password = true
      } else {
        this.err_password = false
      }

      if (
        this.confirmPassword !== this.password &&
        this.confirmPassword.length !== 0
      ) {
        this.err_confirmPassword = true
      } else {
        this.err_confirmPassword = false
      }

      if (
        this.name.length === 0 ||
        this.email.length === 0 ||
        this.password.length === 0 ||
        this.confirmPassword.length === 0
      ) {
        this.err_common = true
      } else {
        this.err_common = false
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

.signup-div {
  width: 100%;
}

.signup-btn {
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
</style>
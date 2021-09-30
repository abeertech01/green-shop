<template>
  <div>
    <Auth />
    <Nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
}

.container {
  margin: 0 auto;
  min-height: calc(100vh - 3.4375rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>

<template>
  <div class="container">
    <div>
      <img class="full-cart" src="../../assets/full-cart.svg" alt="full-cart" />
      <div class="bought-products">
        <div class="each-product">
          <div class="prod-info">
            <h4>European Peaches</h4>
            <small>Quantity: 1KG, Price: $50</small>
          </div>
          <div class="buy-info">
            <h4>X 5</h4>
            <small>$250</small>
          </div>
        </div>
        <div class="each-product">
          <div class="prod-info">
            <h4>European Peaches</h4>
            <small>Quantity: 1KG, Price: $50</small>
          </div>
          <div class="buy-info">
            <h4>X 5</h4>
            <small>$250</small>
          </div>
        </div>
        <div class="each-product">
          <div class="prod-info">
            <h4>European Peaches</h4>
            <small>Quantity: 1KG, Price: $50</small>
          </div>
          <div class="buy-info">
            <h4>X 5</h4>
            <small>$250</small>
          </div>
        </div>
        <div class="each-product">
          <div class="prod-info">Total</div>
          <div class="buy-info">$750</div>
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>

      <div class="bought">
        <h1>Thank You Sir For Visiting Us</h1>
        <NuxtLink class="buy-again-btn" to="/products">Buy Again</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Francois+One&display=swap');

.full-cart {
  margin: 2rem 0;
}

.bought-products {
  width: 25rem;
}

.each-product {
  display: grid;
  grid-template-columns: 74% 24%;
  gap: 2%;
}

.each-product:not(:last-child) {
  margin-bottom: 0.8rem;
}

.each-product > div {
  padding: 0.5rem;
  border-radius: 0.2rem;
  box-shadow: rgba(3, 102, 77, 0.27) 0px 0px 0.25em,
    rgba(34, 255, 200, 0.05) 0px 0.25em 1em;
}

.checkout-btn {
  width: 100%;
  background-color: #00dc82;
  color: aliceblue;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.2rem;
  cursor: pointer;
  box-shadow: rgba(3, 102, 77, 0.27) 0px 0px 0.25em,
    rgba(34, 255, 200, 0.05) 0px 0.25em 1em;
}
.checkout-btn:hover {
  background-color: #00b86b;
}
.bought {
  display: none;
}
.bought h1 {
  font-family: 'Playball', cursive;
  margin-bottom: 2rem;
}
.buy-again-btn {
  background-color: #002e3b;
  color: aliceblue;
  padding: 0.4rem;
  font-size: 1rem;
  font-family: 'Francois One', sans-serif;
  border-radius: 00.2rem;
}
</style>
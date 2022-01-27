<template>
    <div class="cart-item-cart">
        <h3>Cart Total: ${{ cart_total.toFixed(2) }}</h3>
        <button class="view-product-button">Pay by Cardit Card</button>
    </div>
</template>

<script>
export default {
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}

</script>

<style scoped>
.view-product-button {
    width: 220px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 50px 5px;
    cursor: pointer;
    background-color: rgb(79, 160, 187);
    color: white;
    font-weight: bold;
}
.view-product-button:hover {
    opacity: 0.7;
}
</style>
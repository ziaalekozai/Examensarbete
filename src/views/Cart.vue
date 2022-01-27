<template>
    <div class="cart-continer">
        <h1>Your Cart</h1>
        <CartItemCard v-for="product in products" :key="product.id" :product="product" />
        <CartSummaryPaymentCard />
        <EmptyCart />
    </div>
</template>
<script>
import CartItemCard from '../components/cart/CartItemCard.vue';
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue';
import EmptyCart from './EmptyCart'
export default {
    name: "Cart",
    components: {
        EmptyCart,
        CartSummaryPaymentCard,
        CartItemCard
    },
    data() {
        return {
            showEmptyCart: false
        }
    },
    computed: {
        products() {
            return this.$store.getters.cartItems
        }

    }
};
</script>

<style scoped>
.cart-continer {
    padding-bottom: 30%;
}
</style>

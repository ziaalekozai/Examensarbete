<template>
    <div class="emptycart-continer">
        <img src="../assets/EmptyCart.jpg" />
        <div class="title">
            <h4>Your cart is empty</h4>
            <h5>
                <router-link to="/" class="error">Click here</router-link> to go to the Home page.
            </h5>
        </div>
    </div>
</template>
<script>

export default {
    name: 'EmptyCart'

}
</script>

<style scoped>
.emptycart-continer {
    text-align: center;
    color: #333;
}
.emptycart-continer img {
    width: 350px;
    margin: center;
}
</style>

<template>
    <div class="wrapper-Boys">
        <div class="card">
            <img :src="product.url" />
            <h1>{{ product.name }}</h1>
            <p class="price">Price: ${{ product.price.toFixed(2) }}</p>
            <p class="description">{{ description }}</p>
            <button class="view-product-button" @click="$emit('view-product', product)">View product</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['product'],
    description() {
        return this.product.description.substring(0, 150)
    }

}
</script>

<style scoped>
.wrapper-Boys {
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.wrapper-Boys h1 {
    font-size: 18px;
}
.wrapper-Boys img {
    width: 320px;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    padding: 52px;
    padding-bottom: 5px;
    justify-self: center;
    border-radius: 10px;
}
.price {
    color: grey;
    font-size: 22px;
}
.description {
    padding-bottom: 15px;
}
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
.card button:hover {
    opacity: 0.7;
}
@media (min-width: 500px) {
    .card {
        width: 350px;
        margin: 10px;
    }
}
</style>
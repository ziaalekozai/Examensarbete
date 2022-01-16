<template>
    <div class="Girls">
        <ProductDesciroptionDrawer :product="product" :active="active.product_drawer"
        v-on:close-product-drawer="closeProductDrawer" />
        <div class="wrapper-Girls">
            <ProductSummaryCard
                v-for="product in items"
                :key="product.id"
                :product="product"
                v-on:view-product="viewProduct($event)"
            />
        </div>
    </div>
</template>
<script>
import items from '../data/girlsItems.js'
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue'
import ProductDesciroptionDrawer from '../components/products/ProductDesciroptionDrawer.vue'


export default {
    name: "Girls",
    components: {
        ProductSummaryCard,
        ProductDesciroptionDrawer
    },

    data() {
        return {
            quantity: 0,
            items: items,
            product: null,
            active: {
                product_drawer: false
            }

        }
    },
    methods: {
        viewProduct(product) {
            this.product = product
            this.active.product_drawer = true
        },
    
    closeProductDrawer(){
        this.active.product_drawer = false
    }
    }
};

</script>

<style scoped>
.wrapper-Girls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 55px;
}
</style>


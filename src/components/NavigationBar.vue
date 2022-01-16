<template>
    <div class="nav">
        <div class="logo">
            <img @click="home" src="../assets/LOGOB&Y.png" />
        </div>
        <div class="link">
            <router-link to="/">Home</router-link>
            <router-link to="/boys">Boys</router-link>
            <router-link to="/girls">Girls</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
            <div class="log">
                <router-link to="/login">{{ name }}</router-link>
            </div>
            <span v-if="showLogout" @click="logout">Logout</span>
            <router-link to="/signup" v-if="showSignUp">Sign Up</router-link>
            <img class="cart" @click="cart" src="../assets/cart.png" />
            <i class="cart-count" v-if="showCartsQuantity" @click="cart">{{ qountity }}</i>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavigationBar",
    //data metod är att skapa property
    data() {
        return {
            name: 'Login',
            showSignUp: true,
            showLogout: false,
            showCartsQuantity: true,
            qountity: 0,
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        //kolla om det fins valu in i user-info gå till Home View, user-info hitar man på inspektra-application-Local Storage-user-info
        if (user) {
            this.name = JSON.parse(user).name;
            this.$router.push({ name: "Home" });
            this.showLogout = true;
            this.showSignUp = false;
        }
    },
    //om man ska kalla på en fanktion då använder man methods och in i methods gör vi alla fanktioner.
    methods: {
        //Tabort user från localStorage för att logout user
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'Home' })
            document.location.reload(true)

        },
        //Click event när man tycker på logo för att kunna gå till home view and carts view.
        home() { this.$router.push({ name: 'Home' }) },
        cart() { this.$router.push({ name: 'Cart' }) },
    }
}
</script>

<style scoped>
.nav {
    background-color: #333;
    height: 70px;
    display: flex;
    box-shadow: rgb(124, 124, 124) 0px 6px 6px;
}
.link {
    align-self: center;
}
.link a,
.link span {
    font-size: 19px;
    padding: 25px;
    color: #f2f2f2;
    text-decoration: none;
}
.link div {
    display: inline;
    padding-left: 370px;
    padding-right: 0px;
}

.logo {
    display: flex;
    cursor: pointer;
    padding-left: 10px;
}

.link a:hover,
.link span:hover {
    background-color: #ddd;
    color: #222;
    color: black;
    cursor: pointer;
}
.cart {
    width: 20px;
    justify-self: center;
    cursor: pointer;
    padding-left: 30px;
}
.cart-count {
    font-size: 10px;
    background-color: #e2dede;
    padding: 5px;
    vertical-align: text-top;
    color: rgb(221, 76, 76);
    border-radius: 50%;
    cursor: pointer;
}

</style>

<template>
    <div class="container">
        <div class="Text">
            <h1>Find occasion wear. Ready to wear brand</h1>
            <h1>
                <router-link to="/boys">Shop now</router-link>
            </h1>
            <h3>
                <br />
                <router-link to="/signup">Sign up</router-link>to get free shipping and 15% off all clothes
            </h3>
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
        url(../assets/Home-img.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;
    color: #fff;
}
.Text a {
    color: #fff;
    text-decoration: none;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
}
.Text {
    height: 100%;
    padding-bottom: 40%;
    padding-top: 2%;
}
</style>

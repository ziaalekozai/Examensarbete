<template>
  <NavigationBar />
  <router-view />
  <Footer />
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    NavigationBar,
    Footer
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  padding-bottom: 0%;
}
</style>

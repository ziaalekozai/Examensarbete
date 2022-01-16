<template>
    <div class="pagenotfound">
        <h2>The page could not be found..</h2>
        <p>
            Try another url ..
            <router-link to="/" class="error">Click here</router-link>to go to the Home page.
        </p>
    </div>
</template>
<script>
export default {
    name: "NotFound",
};
</script>
<style scoped>
.pagenotfound p {
    padding-bottom: 25%;
}
</style>

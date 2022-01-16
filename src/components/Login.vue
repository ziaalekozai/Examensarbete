<template>
    <div class="login">
        <h1>Login</h1>
        <p v-if="error.length">
            <b>Please correct the floowing errors</b>
        </p>
        <ul>
            <p v-for="e in error" v-bind:key="e.id">{{ e }}</p>
        </ul>
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button type="submit" @click="login">Login</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            error: [],
                    
        }
    },
    methods: {
        async login() {
            //let är som (var) och använder för variables
            if (this.email && this.password) {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );
                //kolla efter 200
                if (result.status == 200 && result.data.length > 0) {
                    //JSON.stringify använder vi att convertera till string
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                    this.$router.push({ name: "Home" })
                    alert('Welcome to our website!')
                    document.location.reload(true)

                }
            }
            this.error = [];
            if (!this.email) {
                this.error.push(" Email is required")
            }
            if (!this.password) {
                this.error.push(" Password is required")
            }
        }
    },
    //kolla om du är inlogat så kan du inte gå till loging sidan
    mounted() {
        let user = localStorage.getItem("user-info");
        //kolla om det fins valu in i user-info gå tilll Home View
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
};
</script>
<style>
.login{
    padding: 20px;
    padding-bottom: 20%;
}
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #333;
}
.login button {
    width: 320px;
    height: 40px;
    border: 1px solid #333;
    color: #fff;
    background-color: #333;
    cursor: pointer;
    font-size: 20px;
}
.login button:hover {
    background-color: rgb(27, 27, 27);
}
</style>

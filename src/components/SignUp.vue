<template>
    <div class="register">
        <h1>Sign Up</h1>
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="lastname" placeholder="Enter Lastname" />
        <input type="email" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp" :disabled="password.length < 1">Sign Up</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {

            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            });
            //kolla efter 200
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data)) //JSON.stringify använder vi att convertera till string
                this.$router.push({ name: "Home" })
                alert('Welcome to our website!')
                document.location.reload(true)
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        //kolla om det fins valu in i user-info gå till Home View, user-info hitar man på inspektra-application-Local Storage-user-info
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>
<style>
.register {
    padding: 10px;
    padding-bottom: 10%;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 320px;
    height: 40px;
    border: 1px solid #333;
    color: #fff;
    background-color: #333;
    cursor: pointer;
    font-size: 20px;
}
.register button:hover {
    background-color: rgb(27, 27, 27);
}
</style>

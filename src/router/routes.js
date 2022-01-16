import Home from '../views/Home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Boys from '../views/Boys.vue'
import Girls from '../views/Girls.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import NotFound from '../views/NotFound.vue'

import { createRouter, createWebHistory } from 'vue-router'
const routes = [

    { name: 'Home', component: Home, path: '/' },
    { name: 'SignUp', component: SignUp, path: '/signup' },
    { name: 'Login', component: Login, path: '/login' },
    { name: 'Boys', component: Boys, path: '/boys' },
    { name: 'Girls', component: Girls, path: '/girls' },
    { name: 'About', component: About, path: '/about' },
    { name: 'Contact', component: Contact, path: '/contact' },
    { name: 'Cart', component: Cart, path: '/cart' },
    { name: 'NotFound', component: NotFound, path: '/:notfound(.*)' },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
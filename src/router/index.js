import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Admin from '@/views/Admin.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Categories from '@/views/Categories.vue'
import AddProduct from '@/views/AddProduct.vue'
import EditProduct from '@/views/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/productdetails',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/editproduct',
    name: 'EditProduct',
    component: EditProduct
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

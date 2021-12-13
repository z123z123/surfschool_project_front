import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookingSingle from "@/views/BookingSingle";
import Homepage from "../views/Homepage";
import BookingGroup from "@/views/BookingGroup";
import BookingConfirmation from "@/views/BookingConfirmation";
import AdminView from "@/views/AdminView";
import LoginPage from "@/views/LoginPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: "/book",
    name: "BookingSingle",
    component: BookingSingle
  },
  {
    path: "/home",
    name: "Homepage",
    component: Homepage
  },
  {
    path: "/bookgroup",
    name: "BookingGroup",
    component: BookingGroup
  },
  {
    path: "/bookingconfirmation",
    name: "BookingConfirmation",
    component: BookingConfirmation
  },
  {
    path: "/admin",
    name:"AdminView",
    component: AdminView
  },
  {
    path:"/login",
    name:"LoginPage",
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

export default router

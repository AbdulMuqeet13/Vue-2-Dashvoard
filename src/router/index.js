import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Notifications from '@/views/notifications/Notifications'
import NotificationForm from '@/views/notifications/NotificationForm'
import Users from '@/views/Users/Users'
import UserForm from '@/views/Users/UserForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications
  },
  {
    path: '/notifications-form',
    name: 'notifications-form',
    component: NotificationForm
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Users
  },
  {
    path: '/user-form',
    name: 'user-form',
    component: UserForm
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

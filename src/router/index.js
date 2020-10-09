import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import Center from '../views/Center.vue'
import Login from '../views/Login.vue'
import Cinema from '../views/film/Cinema.vue'
import Classicmovies from '../views/film/Classicmovies.vue'
import Comingsoon from '../views/film/Comingsoon.vue'
import Nowplaying from '../views/film/Nowplaying.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: '/film/cinema',
        component: Cinema
      },
      {
        path: '/film/nowplaying',
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '/film/classicmovies',
        component: Classicmovies
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { // 全局守卫
  const aupath = ['/center']
  if (aupath.includes(to.fullPath)) {
    if (!localStorage.getItem('username')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

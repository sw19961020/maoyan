import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'
import Detail from '../views/Detail.vue'
import Center from '../views/Center.vue'
import Login from '../views/Login.vue'
import Show from '../views/Show.vue'
import Smallview from '../views/Smallview.vue'
import Smalldetial from '../views/small/Smalldetial.vue'
import Buy from '../views/show/Buy.vue'
import Index from '../views/show/Index.vue'
import Showcity from '../views/show/Showcity.vue'
import More from '../views/show/More.vue'
import Showdetail from '../views/show/Showdetail.vue'
import Showinfo from '../views/show/Showinfo.vue'
import All from '../views/show/info/All.vue'
import Singing from '../views/show/info/Singing.vue'
import Opera from '../views/show/info/Opera.vue'
import Exhibition from '../views/show/info/Exhibition.vue'
import Art from '../views/show/info/Art.vue'
import Music from '../views/show/info/Music.vue'
import Parenting from '../views/show/info/Parenting.vue'
import Concert from '../views/show/info/Concert.vue'
import Dance from '../views/show/info/Dance.vue'
import Sports from '../views/show/info/Sports.vue'
import Showperiphery from '../views/show/info/Showperiphery.vue'
import Showbroadcast from '../views/show/info/Showbroadcast.vue'
import Other from '../views/show/info/Other.vue'
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
    path: '/show',
    component: Show,
    children: [
      {
        path: '/show/index',
        component: Index
      },
      {
        path: '/show/buy',
        component: Buy
      },
      {
        path: '/show/showcity',
        component: Showcity
      },
      {
        path: '/show/more',
        component: More
      },
      {
        path: '/show/showdetail',
        component: Showdetail
      },
      {
        path: '/show/showinfo',
        component: Showinfo,
        children: [
          {
            path: '/show/showinfo/all',
            component: All
          },
          {
            path: '/show/showinfo/singing',
            component: Singing
          },
          {
            path: '/show/showinfo/opera',
            component: Opera
          },
          {
            path: '/show/showinfo/exhibition',
            component: Exhibition
          },
          {
            path: '/show/showinfo/art',
            component: Art
          },
          {
            path: '/show/showinfo/music',
            component: Music
          },
          {
            path: '/show/showinfo/parenting',
            component: Parenting
          },
          {
            path: '/show/showinfo/concert',
            component: Concert
          },
          {
            path: '/show/showinfo/dance',
            component: Dance
          },
          {
            path: '/show/showinfo/sports',
            component: Sports
          },
          {
            path: '/show/showinfo/showperiphery',
            component: Showperiphery
          },
          {
            path: '/show/showinfo/showbroadcast',
            component: Showbroadcast
          },
          {
            path: '/show/showinfo/other',
            component: Other
          },
          {
            path: '',
            redirect: '/show/showinfo/singing'
          }
        ]
      },
      {
        path: '',
        redirect: '/show/index'
      }

    ]
  },
  {
    path: '/detail:id',
    component: Detail
  },
  {
    path: '/smallview',
    component: Smallview
  },
  {
    path: '/smalldetial',
    component: Smalldetial
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
  const aupath = ['/center', '/show/buy']
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

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Header from './components/Header'
import Haha from './components/Haha'
import Proxy from './views/Proxy'
import MusicDetail from './views/MusicDetail'
const Hotblogs = () => import('./views/Hotblogs.vue')
const Msn = () => import('./views/Msn.vue')
const Writeblogs = () => import('./views/Writeblogs.vue')
const Codinglife = () => import('./views/Codinglife.vue')
const Read = () => import('./components/Read.vue')
const Movie = () => import('./components/Movie.vue')
const Music = () => import('./components/Music.vue')
const BlogDetail = () => import('./components/BlogDetail.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        header: Header
      }
    },
    {
      path: '/pro',
      name: 'pro',
      component: Proxy

    },
    {
      path: '/haha',
      name: 'haha',
      component: {
        Haha
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hotblogs/:id',
      name: 'blogdetail',
      components: {
        default: BlogDetail,
        header: Header
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/hotblogs',
      name: 'hotblogs',
      components: {
        default: Hotblogs,
        header: Header
      }
    },
    {
      path: '/msn',
      name: 'msn',
      components: {
        default: Msn,
        header: Header
      }
    },
    {
      path: '/writeblogs',
      name: 'writeblogs',
      components: {
        default: Writeblogs,
        header: Header
      }
    },
    {
      path: '/codinglife/music/:id',
      name: 'musicdetail',
      components: {
        default: MusicDetail,
        header: Header
      }
    },
    {
      path: '/codinglife',
      name: 'codinglife',
      components: {
        default: Codinglife,
        header: Header
      },
      redirect: '/codinglife/movie',
      children: [
        {
          path: '/codinglife/movie',
          name: 'movie',
          component: Movie
        },
        {
          path: '/codinglife/music',
          name: 'music',
          component: Music
        },
        {
          path: '/codinglife/read',
          name: 'read',
          component: Read
        }
      ]
    }
  ]
})

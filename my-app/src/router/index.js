import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Sign from '../pages/sign'
import Index from '../pages/index'
import Movie from '../pages/movie'
import Book from '../pages/book'
import Group from '../pages/group'
import More from '../pages/more'
import Status from '../pages/status'
import Detail from '../pages/detail'
Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: "/", 
      redirect: '/index' //路由默认进入indexx
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
   
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '**',   // 错误路由
      redirect: '/index'   //重定向
    }
  ]
})


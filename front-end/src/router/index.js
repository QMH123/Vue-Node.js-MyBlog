import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import connact from '../components/connact'
import writeBlog from '../components/writeBlog'
import showBlog from '../components/showBlog'
import blogtext from '../components/blogtext'
import manager from '../components/manager'
import editBlog from '../components/editBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/my_blog/',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'index',
      component:index,
      children:[
        {
          path:'/index',
          redirect:'/showBlog'
        },
        {
          path:'/connact',
          name:'connact',
          component:connact
        },
        {
          path:'/writeBlog',
          name:'writeBlog',
          component:writeBlog,
        },
        {
          path:'/editBlog',
          name:'editBlog',
          component:editBlog
        },
        {
          path:'/showBlog',
          name:'showBlog',
          component:showBlog
        },
        {
          path:'/blogtext',
          name:'blogtext',
          component:blogtext
        },
        {
          path:'/manager',
          name:'manager',
          component:manager
        }
      ]
    },
  ]
})

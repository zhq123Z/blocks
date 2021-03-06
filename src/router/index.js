import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/project/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects
    }
  ]
})

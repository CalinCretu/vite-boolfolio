import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './pages/Homepage.vue'
import ProjectIndex from './pages/projects/Index.vue'
import Contact from './pages/Contact.vue'
import ProjectShow from './pages/projects/Show.vue'
import NotFound from './pages/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: ProjectIndex,
    },
    {
      path: '/projects/:slug',
      name: 'projects.show',
      props: true,
      component: ProjectShow,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contact,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    }
  ]
})

export { router }
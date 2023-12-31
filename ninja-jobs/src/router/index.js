import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetailsView from '../views/jobs/JobsDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
   },
   {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
   },
   {
    path: '/jobs/:id',
    name: 'jobsDetails',
    component: JobsDetailsView,
    props: true
   },
   {
    path: '/all-jobs',
    redirect: '/jobs'
   },
   {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/VideoPlayer',
    name: 'vue-video-player',
    component: () => import('../views/VideoPlayer.vue')
  },
  {
    path: '/FlvLive',
    name: 'FlvLive',
    component: () => import('../views/FlvLive.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
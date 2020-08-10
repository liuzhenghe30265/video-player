import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
//  mux.js/lib/mp4/caption-parser in ./node_modules/videojs-flash/node_modules/video.js/dist/video.es.js
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

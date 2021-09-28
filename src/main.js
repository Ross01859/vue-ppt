import Vue from 'vue'
import App from './App.vue'
import './index.css'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/swiper.min.css'
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
}).$mount('#app')

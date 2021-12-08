import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from "axios";
import VueAxios from "vue-axios";
import Embed from "v-video-embed";
import VideoBg from 'vue-videobg'



Vue.component('video-bg', VideoBg)

Vue.use(VueAxios, axios);
Vue.use(Embed)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

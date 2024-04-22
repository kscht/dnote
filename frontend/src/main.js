import "core-js/stable";
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import DeadlyNote from './components/DeadlyNote.vue';

window.CryptoJS = require('crypto-js');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  mode: 'history',
  routes: [

    {
      path: '/:id',
      name: 'reader',
      component: DeadlyNote,
    },
    {
      path: '/',
      name: 'home',
      component: DeadlyNote,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify({
    icons: {
      iconfont: 'md',
    },
    theme: {
      dark: false,
    },
    themes: {
      light: {
        primary: '#4682b4',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  }),
  router,
}).$mount('#app');

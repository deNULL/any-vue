import Vue from 'vue';
import App from './App.vue';
import router from './router';

import os from './styles/os-ios.scss';
import base from './styles/base-vk.scss';
import theme from './styles/theme-dark.scss';

import AButton from './components/AButton.vue';
Vue.component('a-button', AButton);

Vue.config.productionTip = false;
console.log(os.darkcolor);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
 
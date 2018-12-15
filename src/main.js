import Vue from 'vue';
import App from './App.vue';
import router from './router';

// TODO: use exported variables from stylesheets somehow
import os from './styles/os-ios.scss';
import base from './styles/base-vk.scss';
import theme from './styles/theme-dark.scss';

import AnyVue from './components/AnyVue.vue';
import AButton from './components/AButton.vue';
Vue.component('any-vue', AnyVue);
Vue.component('a-button', AButton);

Vue.config.productionTip = false;
//console.log(os.darkcolor);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
 
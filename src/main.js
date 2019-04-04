import Vue from 'vue';
import App from './App.vue';
import router from './router';

// TODO: use exported variables from stylesheets somehow
import os from './styles/os-ios.scss';
import base from './styles/base-vk.scss';
import theme from './styles/theme-dark.scss';

import AnyVue from './components/AnyVue.vue';
import AButton from './components/AButton.vue';
import ASwitch from './components/ASwitch.vue';
import ACheckbox from './components/ACheckbox.vue';
import ASpinner from './components/ASpinner.vue';
import AList from './components/AList.vue';
import AListItem from './components/AListItem.vue';
import ATextInput from './components/ATextInput.vue';
import ATabBar from './components/ATabBar.vue';
import ATabController from './components/ATabController.vue';
import ANavBar from './components/ANavBar.vue';
import ANavController from './components/ANavController.vue';
import AView from './components/AView.vue';

import ATemplate from './components/ATemplate.vue';
import ATemplateRenderer from './components/ATemplateRenderer.vue';

Vue.component('any-vue', AnyVue);
Vue.component('a-button', AButton);
Vue.component('a-switch', ASwitch);
Vue.component('a-checkbox', ACheckbox);
Vue.component('a-spinner', ASpinner);
Vue.component('a-list', AList);
Vue.component('a-list-item', AListItem);
Vue.component('a-text-input', ATextInput);
Vue.component('a-tab-bar', ATabBar);
Vue.component('a-tab-controller', ATabController);
Vue.component('a-nav-bar', ANavBar);
Vue.component('a-nav-controller', ANavController);
Vue.component('a-view', AView);

Vue.component('a-template', ATemplate);
Vue.component('a-template-renderer', ATemplateRenderer);

Vue.prototype.getTemplate = function(name) {
  return this.$templates[name];
}

Vue.mixin({
  created() {
    this.$templates = {};
  },
  beforeMount() {
    let view = this;
    while (view && !view._isAnyvueRoot && !view.$anyvue && view.$parent && view.$parent !== view) {
      view = view.$parent;
    }
    if (view._isAnyvueRoot || view.$anyvue) {
      this.$anyvue = view._isAnyvueRoot ? view : view.$anyvue;
      view = this.$parent;
      while (view && !view._isAnyvueRoot && !view.$anyvue && view.$parent && view.$parent !== view) {
        view.$anyvue = this.$anyvue;
        view = view.$parent;
      }
    } else
    if (this.$children.length == 1 && this.$children[0]._isAnyvueRoot) {
      this.$anyvue = this.$children[0];
    }
  }
});

Vue.config.productionTip = false;
//console.log(os.darkcolor);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
 
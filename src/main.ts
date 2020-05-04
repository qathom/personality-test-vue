import Vue from 'vue';
import { BvPlugin } from 'bootstrap-vue';
import router from './router';
import App from './App.vue';
import store from './store';
// Import plugins
import bootstrapPlugins from './plugins/bootstrap-vue';

bootstrapPlugins.forEach((plugin: BvPlugin) => {
  Vue.use(plugin);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

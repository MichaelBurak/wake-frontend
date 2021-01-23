import App from './App.vue'

import Vue from "vue";
import VueDarkMode from "@growthbunker/vuedarkmode";

Vue.use(VueDarkMode,{theme: "dark"});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueClipboard from 'vue-clipboard2'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, { locale }, VueClipboard);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
}).$mount('#app')

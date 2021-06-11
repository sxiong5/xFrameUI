import Vue from 'vue';
import App from './App.vue';
import components from '../packages';
import router from './router';
import DemoBlock from './components/DemoBlock.vue';

Vue.config.productionTip = false;

Vue.use(components);
Vue.component('DemoBlock', DemoBlock);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

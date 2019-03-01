import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/iconfont/iconfont.css';
import '@/assets/less/common.less';
import '@/assets/less/form.less';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueScroller from 'vue-scroller';

Vue.use(VueScroller);
// 3d

Vue.use(MintUI);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

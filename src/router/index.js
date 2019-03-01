import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 首页
export const commonRoutes = {
    path: '/',
    name: 'index',
    component: () => import('@/views/index'),
    meta: {
        title: '首页'
    }
};

const router = new Router({
    routes: [commonRoutes]
});

export default router;

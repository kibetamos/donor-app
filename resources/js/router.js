import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
//Home Page
import home from './pages/Dashboard.vue';
import agency from './pages/Agency/Show.vue';
import role from './pages/Settings/Roles.vue';
import user from './pages/Users/Show.vue';
import donations from './pages/Donations/Show.vue';


const routes = [
    //Dashboard
    {
        path: '/',
        component: home,
        name: 'home'
    },

    //Agency Pages
    {
        path: '/agencies',
        component: agency,
        name: 'agency'
    },
    {
        path: '/roles',
        component: role,
        name: 'role'
    },
    {
        path: '/users',
        component: user,
        name: 'user'
    },
    {
        path: '/donations',
        component: donations,
        name: 'donations'
    },
];

export default new Router({
    mode: 'history',
    routes
});
import Vue from 'vue'
require('./bootstrap');


import router from './Router/Index'

Vue.component('app-header', require('./components/Header.vue').default);

const app = new Vue({
    el: '#app',
    router
});

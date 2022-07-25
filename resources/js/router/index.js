import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue")
    },
    {
        path: "/category",
        name: "CategoryList",
        component: () => import("../pages/category/CategoryList.vue")
    },
    {
        path: "/create-category",
        name: "CreateCat",
        component: () => import("../pages/category/CreateCat.vue")
    }
  ],
  mode: "history"
});

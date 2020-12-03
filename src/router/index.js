import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/Index.vue")
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => 
      import (/* webpackChunkName: "explore" */ "../views/LandingPage")
  },
  {
    path: "/state/:id",
    name: "ResultPageByStateSearch",
    component: () =>
      import(
        /* webpackChunkName: "state" */ "../views/ResultPageByStateSearch.vue"
      )
  },
  {
    path: "/datapoints",
    name: "ResultPageByDataPoints",
    component: () =>
      import(
        /* webpackChunkName: "datapoint" */ "../views/ResultPageByDataPoints.vue"
      )
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/About.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

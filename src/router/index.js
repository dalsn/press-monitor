import Vue from "vue";
import VueRouter from "vue-router";
// import Index from "../views/Index.vue";
import LandingPage from "../views/LandingPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/explore",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/",
    name: "Index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Index.vue")
  },
  {
    path: "/state/:id",
    name: "ResultPageByStateSearch",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ResultPageByStateSearch.vue"
      )
  },
  {
    path: "/datapoints",
    name: "ResultPageByDataPoints",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/ResultPageByDataPoints.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

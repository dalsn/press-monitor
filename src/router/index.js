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
      import(/* webpackChunkName: "explore" */ "../views/LandingPage")
  },
  {
    path: "/cases",
    name: "CaseList",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/CaseList")
  },
  {
    path: "/incidents",
    name: "Incidents",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/Incidents")
  },
  {
    path: "/resources",
    name: "Resource",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/Resource")
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
      import(/* webpackChunkName: "about" */ "../views/About.vue")
    // },
    // {
    //   path: "/contact-us",
    //   name: "Contact",
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "about" */ "../views/Contact.vue"
    //     )
  },
  {
    path: "/incidents/:slug",
    name: "Incident Details",
    component: () => import("../views/Incident.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;

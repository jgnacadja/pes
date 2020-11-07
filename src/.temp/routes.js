const c1 = () => import(/* webpackChunkName: "page--src--templates--contentful-post-vue" */ "/home/rintio_pc1/Documents/studely-filliale/src/templates/ContentfulPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/rintio_pc1/Documents/studely-filliale/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/rintio_pc1/Documents/studely-filliale/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/rintio_pc1/Documents/studely-filliale/src/pages/Index.vue")

export default [
  {
    path: "/article/:title/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]

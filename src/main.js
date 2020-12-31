// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import Buefy from "buefy";
import "~/main.scss";
// import VueDisqus from "vue-disqus";
import axios from "axios";
// import InfiniteLoading from "vue-infinite-loading";
// import SmoothScrollbar from "vue-smooth-scrollbar";
// import InstantSearch from "vue-instantsearch";
import Axios from "axios";

export default function (Vue, { router, head, isClient }) {
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr" };

  // import vue meta
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
  });

  // Import Font Awesome
  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
  });

  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap", // primary text
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap", // secondary text 
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // Register our Bulma component library
  Vue.use(Buefy);
  //http requests via axios
  Vue.use(Axios);

}

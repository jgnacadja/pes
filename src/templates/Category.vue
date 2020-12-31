<template>
  <Layout>
    <Welcome />
    <section class="section-top section-light-grey">
      <div class="container contentMarge">
        <Breadcrumb :category="category" />
      </div>
    </section>
    <section class="section section-grey">
      <div class="container contentMarge">
        <div class="block">
          <p class="card-section-header title">Vous souhaitez</p>
          <br /><br />
        </div>

        <div class="columns row pb-6" v-for="edge in categories" :key="edge">
          <div
            class="column card block-link"
            v-for="node in edge"
            :key="node.id"
          >
            <Category :category="node" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query CategoryPage($id: String!) {
  categories: allCategory(filter: { parent: { eq: $id } }) {
    edges {
      node {
        id
        title
        meta
        subcategory
        content
        parent
        path
      }
    }
  }
}
</page-query>

<script>
import Welcome from "~/components/Welcome.vue";
import Category from "~/components/Category.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";

import VueMarkdown from "vue-markdown";

export default {
  components: {
    Welcome,
    Category,
    Breadcrumb,
    VueMarkdown,
  },
  metaInfo() {
    return {
      //title: this.$page.article.seoTitle,
    };
  },
  filters: {
    // Filter definitions
    Upper(value) {
      const leftletter = value.substring(0, 1);
      const rightvalue = value.substring(1);
      return leftletter.toUpperCase() + rightvalue;
    },
  },
  data() {
    return {
      categories: [],
      split: 2,
      category: "",
    };
  },
  mounted() {
    this.categories = this.chunkArray(this.$page.categories.edges, this.split);
    this.category = this.categories[0][0].node.meta;
  },
  methods: {
    chunkArray(arr, chunkCount) {
      let result = new Array(Math.ceil(arr.length / chunkCount))
        .fill()
        .map((_) => arr.splice(0, chunkCount));
      return result;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.section-top {
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: #fafbfc;
  background-color: var(--lightest-grey);
}
</style>

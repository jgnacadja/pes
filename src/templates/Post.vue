<template>
  <Layout>
    <Welcome />
    <section class="section-top section-light-grey">
      <div class="container contentMarge">
        <div class="columns is-mobile has-text-centered">
          <div class="column is-12">
            <h1 class="section title has-text-dark has-text-left is-title">
              {{ $page.post.strongTitle | Upper }}
            </h1>
          </div>
        </div>
        <div class="columns">
            <vue-markdown>{{ $page.post.content }}</vue-markdown>
        </div>
      </div>
      <br>
      <br>
      <br>
    </section>
  </Layout>
</template>

<page-query>
  query BlogPage($path: String!) {
    post: post (path: $path) {   
      title
      strongTitle
      content
    }
}
</page-query>
<script>
import Welcome from "~/components/Welcome.vue";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    Welcome,
    VueMarkdown
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
      //categories: [],
      split: 2,
      //category: "",
      isOnlyOne: "",
    };
  },
  mounted() {
    //this.categories = this.chunkArray(this.$page.categories.edges, this.split);
    //this.category = this.categories[0][0].node.meta;
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

.is-title {
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>

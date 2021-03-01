<template>
  <Layout>
    <Welcome />
    <section class="section-top section-light-grey container">
      <div class="columns is-centered has-text-justified is-multiline">
        <div class="column is-8">
          <h1 class="title has-text-dark has-text-centered is-title">
            {{ $page.post.strongTitle | Upper }}
          </h1>
        </div>
        <div
          class="column is-8 has-text-justified blog"
          v-html="$page.post.content"
        ></div>
      </div>
    </section>
    <br /><br />
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

.blog {
  font-size: 0.9 rem;
  color: gray;
}
</style>

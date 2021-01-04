<template>
  <div class="columns is-variable is-2 is-vcentered">
    <div ref="breadcrumb" class="column is-12">
      <a href="/">Acceuil</a>
      <span v-if="category != ''">
        &nbsp;&nbsp;
        <b-icon pack="fas" icon="greater-than" type="is-black" size="is-small" />
        &nbsp;&nbsp; Entreprises,
        {{ category }}
      </span>
      <span v-if="fromform != ''">
        &nbsp;&nbsp;
        <b-icon pack="fas" icon="greater-than" type="is-black" size="is-small" />
        &nbsp;&nbsp; {{ fromform }}
      </span>
    </div>
  </div>
</template>

<page-query>
query CategoryPage($path: String!) {
  categories: allCategory(filter: { path: { eq: $path } }) {
    edges {
      node {
        id
        title
        meta
        category
        content
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  props: {
    category: {
      type: String,
      default() {
        return {};
      },
    },
    fromform: {
      type: String,
      default() {
        return {};
      },
    },
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
      breads: "",
    };
  },
  mounted() {
    //this.$refs["breadcrumb"].lastElementChild.className = "has-text-primary";
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>

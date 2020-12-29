<template>
  <div class="column card block-link">
    <g-link :to="category.node.title">
      <div class="card__content">
        <div class="block">
          <h2 class="title is-2">
            <a
              href="/aide-entreprises/developpement-commercial#section-breadcrumbs"
              >{{ category.node.title }}</a
            >
          </h2>
        </div>
        <p v-html="category.node.content"></p>
      </div>
      <div class="discover_button">
        <button class="button small is-link">Choisir</button>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => [],
    },
  },
  created() {
    //console.log(this.category);
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>
<template>
  <g-link :to="category.node.path">
    <div class="card__content">
      <div class="block">
        <h2 class="has-text-left is-2">
          {{ category.node.title }}
        </h2>
      </div>
      <div class="has-text-left" v-html="category.node.content"></div>
    </div>
    <div class="discover_button">
      <button class="button small is-link">Choisir</button>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => [],
    },
  },
  created() {},
};
</script>
<style scoped lang="scss">
@import "../variables.scss";

@media only screen and (min-width: 1024px) {
  .title.is-2 {
    font-size: 1rem;
  }
}
.title.is-2 {
  font-size: 1.2rem;
}
</style>
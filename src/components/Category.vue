<template>
  <g-link :to="category.node.path">
    <div class="card__content">
      <div class="block">
        <h2 class="title is-2">
          {{ category.node.title }}
        </h2>
      </div>
      <p v-html="category.node.content"></p>
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
  created() {
    console.log(this.category);
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>
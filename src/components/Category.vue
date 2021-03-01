<template>
  <g-link :to="link">
    <div class="card__content">
      <div class="block">
        <h2 class="has-text-justified">
          {{ category.node.title }}
        </h2>
      </div>
      <div class="has-text-justified" v-html="category.node.content"></div>
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
    toform: {
      type: String,
      default: () => [],
    },
  },
  data() {
    return {
      link: "",
    };
  },
  created() {
    //console.log(this.category);
  },
  mounted() {
    if (this.toform != "") {
      this.link = this.category.node.forms[0].path;
    } else {
      this.link = this.category.node.path + "#section-thematiques";
    }
  },
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
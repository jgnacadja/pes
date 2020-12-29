<template>
  <div class="columns row is-multiline">
    <div
      class="column is-4 card block-link"
      v-for="edge in categories"
      :key="edge.node.id"
    >
      <g-link :to="edge.node.title">
        <div class="card__content">
          <div class="block">
            <h2 class="title is-2">
              <a
                href="/aide-entreprises/developpement-commercial#section-breadcrumbs"
                >{{ edge.node.title }}</a
              >
            </h2>
          </div>
          <p v-html="edge.node.content"></p>
        </div>
        <div class="discover_button">
          <button class="button small is-link">Choisir</button>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSubcategorie: {
      type: Boolean,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {
    if (!this.isSubcategorie) {
      this.filterCategory();
    }
  },
  methods: {
    filterCategory() {
      var result = this.categories.filter(function (e) {
        return e.node.category !== "";
      });

      this.categories = result;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>
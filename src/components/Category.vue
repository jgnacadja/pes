<template>
  <div class="columns is-multiline">
    <div class="column card block-link">
      <div class="card__content">
        <div class="block">
          <h2 class="title is-2">
            <a
              href="/aide-entreprises/developpement-commercial#section-breadcrumbs"
              >Rebondir et développer votre activité commerciale</a
            >
          </h2>
        </div>
        <p>
          Faire un point sur votre stratégie, diversifier votre activité,
          trouver de nouveaux clients, rejoindre un club d’entreprise, s’étendre
          à l’international.
        </p>
      </div>
      <div class="discover_button">
        <button class="button small is-link">Choisir</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>
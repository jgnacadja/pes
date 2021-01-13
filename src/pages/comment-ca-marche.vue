<template>
  <Layout>
    <section class="section section-light container blank-section">
      <div class="columns is-multiline">
        <div class="column is-12 title">Impulse, comment ça marche ?</div>
        <div class="column is-12">
          Porté par la chambre de commerce et d'industrie du BENIN, le service
          impulse rassemble de nombreux partenaires publics et parapublics
          chargés d’accompagner les entreprises.
        </div>
      </div>
    </section>
    <section class="section section-light-grey landing small-padding">
      <div class="container breadcrumbs">
        <Breadcrumb :category="category" :fromform="false" />
      </div>
    </section>
    <workflow />
    <section class="section container">
      <div class="columns is-mobile has-text-centered">
        <div class="column is-12 has-text-white">
          <b-button tag="a" href="/" size="is-large" type="is-success">
            Deposez votre demande
          </b-button>
        </div>
      </div>
    </section>
    <Partner />

    <section class="section background-orange has-text-white">
      <div class="columns container is-multiline has-text-centered is-centered">
        <div class="column is-3">
          <div class="columns is-multiline">
            <div class="column is-12">
              <span style="font-size: 3em"><i class="fas fa-desktop"></i></span>
            </div>
            <div class="column is-12 is-size-6">
              <!-- text  -->
              +500 entreprises accompagnées
            </div>
          </div>
        </div>
        <div class="column is-3">
          <div class="columns is-multiline">
            <div class="column is-12">
              <span style="font-size: 3em"><i class="fas fa-users"></i></span>
            </div>
            <div class="column is-12 is-size-6">
              <!-- text  -->
              +2500 employés bénéficiaires
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Breadcrumb from "~/components/Breadcrumb.vue";
import Workflow from "~/components/Workflow.vue";
import Partner from "~/components/Partner.vue";

export default {
  components: {
    Breadcrumb,
    Workflow,
    Partner,
  },
  metaInfo: {
    title: "Impulse : comment ça marche",
  },
  data() {
    return {
      isSubcategorie: false,
      categories: [],
      category: "comment ça marche ?",
    };
  },
  mounted() {},
  methods: {
    filterCategory() {},
  },
  filters: {
    // Filter definitions
    Upper(value) {
      const leftletter = value.substring(0, 1);
      const rightvalue = value.substring(1);
      return leftletter.toUpperCase() + rightvalue;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.background-orange {
  background-color: $secondary-color;
}
</style>


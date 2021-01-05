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
      <div class="container breadcrumbs"><Breadcrumb :category="category" :fromform="false" /></div>
    </section>
    <workflow />
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
    <section class="section section-white" id="container-newsletter">
      <div class="container">
        <h2 class="section__title title">
          Découvrez les nouveaux accompagnements publics :
        </h2>
        <p class="section__subtitle subtitle">
          Découvrez chaque mois comment une administration ou un organisme
          public peut aider votre entreprise
        </p>
        <form action="/newsletters" accept-charset="UTF-8" method="post">
          <input
            type="hidden"
            name="authenticity_token"
            value="EZccKzIkocsltvt1hz2IheF+GmElU7EpMa3eH/87Ts7zW3196DWEY3g++OwtwTXI2tDdST6K/gSOWG0uFmVHPg=="
          />
          <div class="form__group">
            <div class="input__group">
              <input
                placeholder="Votre adresse email"
                aria-label="Votre adresse email"
                required="required"
                type="email"
                name="email"
                id="email"
              />
              <input
                type="submit"
                name="commit"
                value="S’abonner"
                class="button"
                data-disable-with="S’abonner"
              />
            </div>
          </div>
        </form>
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
    Partner
  },
  metaInfo: {
    title: "Impulse : comment ça marche",
  },
  data() {
    return {
      isSubcategorie: false,
      categories: [],
      category: "comment ça marche ?"
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


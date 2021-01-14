<template>
  <Layout>
    <Welcome />

    <section
      class="section section-light-grey blank-section"
      id="scroll-section"
    ></section>
    <section class="section section-grey" id="section-thematiques">
      <div class="container contentMarge">
        <div class="block-link">
          <div class="emphasis notification warning">
            <div
              class="columns is-vcentered has-text-centered is-variable is-centered"
            >
              <div class="column is-4-desktop is-12-mobile">
                <h6 class="title is-6">
                  #Impulse, est une initiative de la chambre de commerce et
                  d'industrie du BENIN.
                </h6>
              </div>

              <div class="column is-6 has-text-justified">
                Impulse vous aide à vous structurer et vous développer pour
                gagner en performance. Des conseillers d'entreprise, consultants
                et formateurs vous accompagnent dans la réalisation de
                diagnostics et de plans d’actions personnalisés, jusqu’à la
                mesure des résultats concrets.
              </div>

              <div class="column is-2-desktop is-8-mobile">
                <div id="button-discover">
                  <a
                    class="button-outline small primary is-link"
                    href="/comment-ca-marche"
                    >Découvrir les mesures</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block">
          <p class="card-section-header title">Vous souhaitez</p>
        </div>

        <div class="columns is-multiline is-hidden-desktop contentMarge">
          <div
            class="column card is-category-touch block-link"
            v-for="edge in $page.categories.edges"
            :key="edge.node.id"
          >
            <Category :category="edge" />
          </div>
        </div>

        <div class="columns is-multiline is-hidden-desktop contentMarge">
          <div
            class="column card is-category-touch block-link"
            v-for="edge in $page.categoriesTwo.edges"
            :key="edge.node.id"
          >
            <Category :category="edge" />
          </div>
        </div>

        <div class="columns is-multiline row is-hidden-touch contentMarges">
          <div
            class="column card block-link"
            v-for="edge in $page.categories.edges"
            :key="edge.node.id"
          >
            <Category :category="edge" />
          </div>
        </div>

        <div class="columns is-multiline row is-hidden-touch contentMarges">
          <div
            class="column card block-link"
            v-for="edge in $page.categoriesTwo.edges"
            :key="edge.node.id"
          >
            <Category :category="edge" />
          </div>
        </div>

        <p class="block text-center contact-us decoration">
          <b>Pour toute autre demande,</b>
          <b><a href="/aide-entreprises/contactez-nous"> cliquez ici !</a></b>
        </p>
      </div>
    </section>
    <Partner />
  </Layout>
</template>

<page-query>
query {
  categories: allCategory(filter: { principal: { eq: true } }, limit: 3) {
    edges {
      node {
        id
        title
        category
        content
        principal
        path
      }
    }
  }

  categoriesTwo: allCategory(filter: { principal: { eq: true } }, skip: 3) {
    edges {
      node {
        id
        title
        category
        content
        principal
        path
      }
    }
  }
}
</page-query>

<script>
import Welcome from "~/components/Welcome.vue";
import Category from "~/components/Category.vue";
import Partner from "~/components/Partner.vue";

export default {
  components: {
    Welcome,
    Category,
    Partner,
  },
  metaInfo: {
    title: "",
  },
  data() {
    return {
      isSubcategorie: false,
      categories: [],
    };
  },
  mounted() {
    this.filterCategory();
  },
  methods: {
    filterCategory() {
      var result = this.$page.categories.edges.filter(function (e) {
        return e.node.category !== "";
      });

      this.categories = result;
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
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .contentMarges {
    padding-left: 0.8em;
    padding-right: 0.8em;
  }
}

@media only screen and (max-width: 415px) {
  .is-category-touch {
    margin-bottom: 2em;
  }

  .is-notif-description {
    margin-top: -4em;
  }

  .card-section-header {
    font-size: 1.7rem;
    line-height: 1.25em;
    font-family: "Evolventa", "lato", "sans-serif";
    font-weight: bold;
  }
}
</style>


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
            <div class="columns is-vcentered has-text-centered is-variable">
              <div class="column is-4-desktop is-12-mobile">
                <div class="columns is-variable has-text-left">
                  <div class="column is-4-desktop is-3-mobile">
                    <figure class="is-128x128">
                      <g-image
                        src="~/assets/logo/logoMini.png"
                        alt="Impulse"
                        class="is-rounded"
                        fit="inside"
                      />
                    </figure>
                  </div>

                  <div class="column is-8">
                    <h6 class="title is-6">
                      #Impulse, est un service public de la chambre de commerce et d'industrie du BENIN.
                    </h6>
                  </div>
                </div>
              </div>

              <div class="column is-6 has-text-justified">
                Impulse vous aide à vous structurer et vous développer pour
                gagner en performance. Des conseillers, consultants et
                formateurs vous accompagnent dans la réalisation de diagnostics
                et de plans d’actions personnalisés, jusqu’à la mesure des
                résultats concrets.
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
import Partner from "~/components/Partner.vue"

export default {
  components: {
    Welcome,
    Category,
    Partner
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


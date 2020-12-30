<template>
  <Layout>
    <section class="section section-white less-padding">
      <div class="container">
        <div class="columns contentMarge">
          <div class="column home-title is-two-third-desktop is-12-mobile">
            <div class="columns is-multiline">
              <div class="column is-8">
                <h1>
                  Entreprises, vous avez un projet, une difficulté, une question
                  du quotidien ?
                </h1>
              </div>
              <div class="column is-10 subtitle">
                Un service a mesure de vos besoins : vous êtes rappelé par LE
                conseiller qui peut vous aider.
              </div>
            </div>

            <div class="columns has-text-center">
              <div class="column links is-6">
                <a class="button" href="#scroll-section"
                  ><i class="fas fa-phone-alt"></i>
                  Échanger avec un conseiller
                </a>
              </div>
              <div class="column links decoration">
                <a href="/comment-ca-marche">Comment ça marche</a>
              </div>
            </div>
          </div>
          <div
            class="column is-one-third-desktop is-8-mobile has-text-center"
            id="image-home"
          >
            <figure class="image">
              <img src="https://bulma.io/images/placeholders/600x480.png" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section section-light-grey blank-section"
      id="scroll-section"
    ></section>
    <section class="section section-grey" id="section-thematiques">
      <div class="container contentMarge">
        <div class="block-link">
          <div class="emphasis notification warning">
            <div class="columns">
              <div class="column is-1">
                <figure class="is-128x128">
                  <img
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </figure>
              </div>

              <div class="column is-3">
                <h6 class="title is-6">
                  Impulse : Accélérateur du développement des PME
                </h6>
              </div>
              <div class="column is-6 has-text-left">
                Impulse vous aide à vous structurer et vous développer pour
                gagner en performance. Des conseillers, consultants et
                formateurs vous accompagnent dans la réalisation de diagnostics
                et de plans d’actions personnalisés, jusqu’à la mesure des
                résultats concrets.
              </div>

              <div class="column is-2">
                <div id="button-discover">
                  <a
                    class="button-outline small primary is-link"
                    href="/aide-entreprises/relance.html"
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

        <div class="columns row">
          <div
            class="column card block-link"
            v-for="edge in $page.categories.edges"
            :key="edge.node.id"
          >
            <Category :category="edge" />
          </div>
        </div>

        <div class="columns row">
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
    <section class="section section-lightest-grey section-partners">
      <div class="container text-center">
        <div class="logo-list">
          <img
            alt="cci"
            title="cci"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/256x256.png"
          />
          <img
            alt="cma"
            title="cma"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
          <img
            alt="pole-emploi"
            title="pole-emploi"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
          <img
            alt="apec"
            title="apec"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
          <img
            alt="banque-de-france"
            title="banque-de-france"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
          <img
            alt="bpi-france"
            title="bpi-france"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
          <img
            alt="dgfip"
            title="dgfip"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
          <img
            alt="urssaf"
            title="urssaf"
            class="institution_logo"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </div>
        <div class="subtitle decoration">
          <p>
            Place des Entreprises vous met en relation avec le conseiller qui
            peut vous aider.
          </p>
          <p>
            Découvrez
            <a href="/comment_ca_marche.html#liste-partenaires"
              >plus de 50 partenaires</a
            >
            à votre service.
          </p>
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
query {
  categories: allCategory(filter: { principal: { eq: true } }, limit: 3) {
    edges {
      node {
        id
        title
        category
        content
        principal
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
      }
    }
  }
}
</page-query>

<script>
import Category from "~/components/Category.vue";

export default {
  components: {
    Category,
  },
  metaInfo: {
    title: "Place des entreprises!",
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
</style>

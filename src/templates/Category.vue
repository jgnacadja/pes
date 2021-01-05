<template>
  <Layout>
    <Welcome />
    <section class="section-top section-light-grey">
      <div class="container contentMarge">
        <Breadcrumb :category="category" :fromform="false" />
      </div>
    </section>
    <section class="section section-grey" id="section-thematiques">
      <div class="container contentMarge is-card-content">
        <div class="block">
          <p class="card-section-header title">Vous souhaitez</p>
          <br /><br />
        </div>

        <div
          class="columns row pb-6 contentMarge"
          v-for="edge in categories"
          :key="edge"
        >
          <div
            class="column card block-link"
            v-for="node in edge"
            :key="node.id"
            v-bind:class="[isOnlyOne]"
          >
            <Category :category="node" toform="true" />
          </div>
        </div>
      </div>
      <p class="block text-center contact-us decoration">
        <b>Vous souhaitez être accompagné sur un autre sujet ?</b>
        <b><g-link to="/"> Découvrez les autres sujets.</g-link></b>
      </p>
    </section>
    <Workflow />
    <section class="section section-partners">
      <div class="subtitle has-text-centered decoration">
        <p>
          Place des Entreprises est un service du Ministère de l’Economie et du
          Ministère du Travail, en partenariat avec :
        </p>
      </div>
      <div class="container text-center">
        <div class="logo-list">
          <g-image
            alt="ANPME"
            title="ANPME"
            class="institution_logo"
            src="~/assets/partners/ANPME.png"
          />

          <g-image
            alt="APIEX_LOGO"
            title="APIEX_LOGO"
            class="institution_logo"
            src="~/assets/partners/APIEX_LOGO.png"
          />

          <g-image
            alt="CEPEPE-1"
            title="CEPEPE-1"
            class="institution_logo"
            src="~/assets/partners/CEPEPE-1.png"
          />

          <g-image
            alt="CNSS"
            title="CNSS"
            class="institution_logo"
            src="~/assets/partners/CNSS.png"
          />

          <g-image
            alt="DGI"
            title="DGI"
            class="institution_logo"
            src="~/assets/partners/DGI.png"
          />

          <g-image
            alt="Ecobank"
            title="Ecobank"
            class="institution_logo"
            src="~/assets/partners/Ecobank.png"
          />

          <g-image
            alt="UBA"
            title="UBA"
            class="institution_logo"
            src="~/assets/partners/UBA.png"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query CategoryPage($id: String!) {
  categories: allCategory(filter: { parent: { eq: $id } }) {
    edges {
      node {
        id
        title
        meta
        subcategory
        content
        parent
        path
        forms {
          path
        }
      }
    }
  }
}
</page-query>Breadrumb

<script>
import Welcome from "~/components/Welcome.vue";
import Workflow from "~/components/Workflow.vue";
import Category from "~/components/Category.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";

import VueMarkdown from "vue-markdown";

export default {
  components: {
    Welcome,
    Workflow,
    Category,
    Breadcrumb,
    VueMarkdown,
  },
  metaInfo() {
    return {
      //title: this.$page.article.seoTitle,
    };
  },
  filters: {
    // Filter definitions
    Upper(value) {
      const leftletter = value.substring(0, 1);
      const rightvalue = value.substring(1);
      return leftletter.toUpperCase() + rightvalue;
    },
  },
  data() {
    return {
      categories: [],
      split: 2,
      category: "",
      isOnlyOne: "",
    };
  },
  mounted() {
    this.categories = this.chunkArray(this.$page.categories.edges, this.split);
    this.category = this.categories[0][0].node.meta;
  },
  methods: {
    chunkArray(arr, chunkCount) {
      let result = new Array(Math.ceil(arr.length / chunkCount))
        .fill()
        .map((_) => arr.splice(0, chunkCount));
      return result;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.is-green {
  color: #177c38;
}

.detail-info {
  font-size: 0.8em;
}

.section-top {
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: #fafbfc;
  background-color: var(--lightest-grey);
}

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

.is-card-content a:hover {
  text-decoration: none;
  color: black;
}
.is-card-content a {
  text-decoration: none;
  color: black;
}

section .card {
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 2px;
}

section .card:hover {
  border: 2px solid #0053b3;
  border: 2px solid var(--greenP);
  background-color: transparent;
  padding: 0px;
}

.procedure-card {
  display: flex;
  flex-direction: column;
  padding: 2px;
}

.procedure-card:hover {
  border: none;
  border-color: transparent !important;
  padding: 0px;
}

.procedure-card-image {
  width: 30%;
}
</style>

<template>
  <Layout>
    <Welcome />
    <section v-if="seenContent" class="section section-grey content-section" id="section-thematiques">
      <div class="container contentMarge is-card-content">
        <div class="block">
          <p class="card-section-header title">Vous souhaitez</p>
          <br /><br />
        </div>

        <div class="columns row pb-6 contentMarge">
          <div class="column card block-link">
            <a v-on:click="resoudre">
                <div class="card__content">
                <div class="block">
                        <h2 class="has-text-justified">
                        Résoudre un problématique réglementaire
                        </h2>
                    </div>
                </div>
                <div class="discover_button">
                    <button class="button small is-link">Choisir</button>
                </div>
            </a>
            
          </div>

          <div class="column card block-link">
            <a v-on:click="demande">
                <div class="card__content">
                <div class="block">
                        <h2 class="has-text-justified">
                        Faire une autre demande
                        </h2>
                    </div>
                </div>
                <div class="discover_button">
                    <button class="button small is-link">Choisir</button>
                </div>
            </a>
            
          </div>
          
        </div>
      </div>
      <p class="block text-center contact-us decoration">
        <strong>Vous souhaitez être accompagné sur un autre sujet ?</strong>
        <strong><g-link to="/"> Découvrez les autres sujets.</g-link></strong>
      </p>
    </section>



    <section v-if="seenform" class="section section-grey landing form-section" id="section-formulaire">
      <div class="container">
        <div class="block notification warning contact-delay">
          <g-image alt="" src="~/assets/5days.png" />
          <span>
            Déposez votre demande, un conseiller d'entreprise vous rappelle
            <strong>dans les 5 jours</strong> (Délai moyen de prise en charge).
          </span>
        </div>

        <div class="columns is-full">
          <div class="column is-6">
            <form
              id="app"
              action
              method="post"
              name="form"
              @submit.prevent="checkForm"
            >
              <div class="form__group">
                <div class="form__group">
                  <label for="fullName">Raison sociale</label>
                  <b-field>
                    <input
                      placeholder="votre entreprise"
                      type="text"
                      required="required"
                      name="enterprise"
                      id="enterprise"
                      v-model="data.data.enterprise"
                    />
                  </b-field>
                  <div v-if="data.errors.enterprise" class="errorForm">
                    <strong>{{ data.errors.enterprise }}</strong>
                  </div>
                </div>
                <div class="form__group">
                  <div class="columns is-variable">
                    <div class="column is-6">
                      <label for="secteur"
                        >Secteur d'activité
                        <span class="has-text-danger">*</span></label
                      >
                      <b-field>
                        <b-select
                          placeholder="Selectionnez"
                          v-model="data.data.secteur"
                          name="secteur"
                          required="required"
                          is-large
                          expanded
                        >
                          <option value="commerce">Commerce</option>
                          <option value="industrie">Industrie</option>
                          <option value="service">Service</option>
                        </b-select>
                      </b-field>
                      <div v-if="data.errors.secteur" class="errorForm">
                        <strong>{{ data.errors.secteur }}</strong>
                      </div>
                    </div>

                    <div class="column is-6">
                      <label for="taille"
                        >Nombre d'employés
                        <span class="has-text-danger">*</span></label
                      >
                      <b-field>
                        <b-select
                          placeholder="Selectionnez"
                          v-model="data.data.taille"
                          name="taille"
                          required="required"
                          expanded
                        >
                          <option value="100">Moins de 100</option>
                          <option value="999">de 100 à 999</option>
                          <option value="9999">de 1000 à 9999</option>
                          <option value="10000">10000 et plus</option>
                        </b-select>
                      </b-field>
                      <div v-if="data.errors.taille" class="errorForm">
                        <strong>{{ data.errors.taille }}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form__group">
                  <label for="website">site web</label>
                  <b-field>
                    <input
                      placeholder="https://"
                      type="text"
                      name="website"
                      id="website"
                      v-model="data.data.website"
                    />
                  </b-field>
                  <div v-if="data.errors.website" class="errorForm">
                    <strong>{{ data.errors.website }}</strong>
                  </div>
                </div>

                <div class="form__group">
                  <label for="fullName">Nom et Prénom</label>
                  <b-field>
                    <input
                      placeholder="votre nom"
                      type="text"
                      name="fullName"
                      id="fullName"
                      v-model="data.data.fullName"
                    />
                  </b-field>
                  <div v-if="data.errors.fullName" class="errorForm">
                    <strong>{{ data.errors.fullName }}</strong>
                  </div>
                </div>
                <div class="form__group">
                  <label for="phone"
                    >Téléphone <span class="has-text-danger">*</span></label
                  >
                  <input
                    placeholder="+229 00 00 00 00"
                    type="tel"
                    required="required"
                    name="phone"
                    id="phone"
                    v-model="data.data.phone"
                  />
                  <div v-if="data.errors.phone" class="errorForm">
                    <strong>{{ data.errors.phone }}</strong>
                  </div>
                </div>
                <div class="form__group">
                  <label for="email"
                    >E-mail <span class="has-text-danger">*</span></label
                  >
                  <input
                    placeholder="pseudo@email.com"
                    type="email"
                    required="required"
                    name="email"
                    id="email"
                    v-model="data.data.email"
                  />
                  <div v-if="data.errors.email" class="errorForm">
                    <strong>{{ data.errors.email }}</strong>
                  </div>
                </div>
                <div class="form__group">
                  <!-- / Duplication pour respecter l'accessibilité (id unique, field avec label...) -->
                  <label for="ifu"
                    >IFU <span class="has-text-danger">*</span></label
                  >
                  <input
                    type="text"
                    required="required"
                    name="ifu"
                    id="ifu"
                    v-model="data.data.ifu"
                  />
                  <div v-if="data.errors.ifu" class="errorForm">
                    <strong>{{ data.errors.ifu }}</strong>
                  </div>
                </div>
              </div>
              <div class="form__group">
                <label for=""
                  >Description de votre demande
                  <span class="has-text-danger">*</span></label
                >
                <div class="explanation contentMarges">
                  <div>
                    <g-image alt="" src="~/assets/infos-alert.png" />
                    <span>
                      Pour une meilleure prise en charge de votre demande,
                      indiquez en quelques phrase :
                    </span>
                  </div>
                  <div class="block contentMarges">
                    <ul>
                      <li>votre activité</li>
                      <li>
                        le nombre de salariés que vous envisagez de placer en
                        activité partielle
                      </li>
                      <li>
                        les éléments de contexte sur votre baisse d'activité
                      </li>
                      <li>vos questions</li>
                    </ul>
                  </div>
                </div>
                <textarea
                  placeholder="Décrivez votre demande."
                  rows="6"
                  required="required"
                  name="description"
                  id="description"
                  v-model="data.data.description"
                >
                </textarea>
                <div v-if="data.errors.description" class="errorForm">
                  <strong>{{ data.errors.description }}</strong>
                </div>
              </div>

              <div
                v-if="data.success"
                class="form__group container notif is-primary"
              >
                <p><em class="fas fa-check"></em> {{ data.success }}</p>
              </div>

              <div class="form__group">
                <button
                  v-if="data.loading"
                  class="button large is-link is-loading"
                ></button>
                <input
                  v-if="!data.loading"
                  type="submit"
                  name="commit"
                  value="Envoyer ma demande"
                  class="button large is-link"
                  data-disable-with="Envoyer ma demande"
                />
              </div>
            </form>
          </div>
          <div class="column is-6" style="margin-left: 0">
            <div>
              <p>
                {{content}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    

    <Workflow />

    <Partner />
  </Layout>
</template>


<page-query>

</page-query> 



<script>
import Welcome from "~/components/Welcome.vue";
import Workflow from "~/components/Workflow.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
import Partner from "~/components/Partner.vue";
import VueMarkdown from "vue-markdown";
import emailjs from "emailjs-com";

export default {
  components: {
    Welcome,
    Breadcrumb,
    Workflow,
    VueMarkdown,
    Partner,
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
      cartegories: [],
      cartegory: {},
      seenform: false,
      seenContent: true,
      content: "",
      data: {
        errors: {
          fullName: "",
          phone: "",
          email: "",
          ifu: "",
          description: "",
          loading: false,
          enterprise: "",
          secteur: "",
          website: "",
          taille: "",
        },
        data: {
          fullName: null,
          phone: null,
          email: null,
          ifu: null,
          description: null,
          enterprise: null,
          secteur: null,
          website: "",
          taille: "100",
        },
        success: null,
      },
    };
  },
  mounted() {
    // Get current url
    var pathname = window.location.pathname;

    // Get current cartegory
    this.cartegory = ""
  },
  methods: {
    chunkArray(arr, chunkCount) {
      let result = new Array(Math.ceil(arr.length / chunkCount))
        .fill()
        .map((_) => arr.splice(0, chunkCount));
      return result;
    },
    resoudre: function (e){
      this.seenform =  true;
      this.seenContent = false;
      this.content = "Résoudre un problématique réglementaire"
    },
    demande: function (e){
      this.seenform =  true;
      this.seenContent = false;
      this.content = "Nous allons rechercher quel est le conseiller compétent pour votre demande parmi l'ensemble des partenaires publics et parapublics du service."
    },
    checkForm: function (e) {
      this.data.errors = {
        fullName: null,
        phone: null,
        email: null,
        siret: null,
        description: null,
      };

      // const service_id = process.env.EMAIL_JS_SERVICE_ID;
      // const template_id = process.env.EMAIL_JS_TEMPLATE_ID;
      // const user_id = process.env.EMAIL_JS_USER_ID;

      const service_id = "service_zo2s5ud";
      const template_id = "template_tkt44iv";
      const user_id = "user_awurVWpPY1ipKOSkoyWx0";

      if (!this.data.data.enterprise) {
        this.data.errors.enterprise = "Le nom de l'entreprise est requis";
      }
      if (!this.data.data.fullName) {
        this.data.errors.nom = "le nom et prénoms sont requis";
      }
      if (!this.data.data.secteur) {
        this.data.errors.secteur = "Veuillez choisir un secteur d'activite";
      }
      if (!this.data.data.phone) {
        this.data.errors.phone = "Le téléphone est réquis";
      }
      if (!this.data.data.email) {
        this.data.errors.email = "lL'addresse e-mail est réquis";
      }
      if (!this.data.data.ifu) {
        this.data.errors.ifu = "Le numéro IFU est réquis";
      }
      if (!this.data.data.description) {
        this.data.errors.description = "La description est réquise";
      }

      if (
        this.data.data.fullName != null &&
        this.data.data.phone != null &&
        this.data.data.email != null &&
        this.data.data.ifu != null &&
        this.data.data.description != null &&
        this.data.data.enterprise != null &&
        this.data.data.secteur != null
      ) {
          this.data.loading = true;
          var vm = this;

          emailjs
            .sendForm(
              service_id,
              template_id,
              e.target,
              user_id,
              this.data.data
            )
            .then(function (results) {
              vm.data.loading = false;
              vm.data.data.fullName = null;
              vm.data.data.phone = null;
              vm.data.data.email = null;
              vm.data.data.ifu = null;
              vm.data.data.description = null;
              vm.data.data.secteur = null;
              vm.data.data.taille = 100;
              vm.data.data.website = null;
              vm.data.success = "Votre demande a été envoyé";


               vm.seenform =  false;
               vm.seenContent = true;

            })
            .catch(e => {
              this.data.loading = false;
              console.log("Failed to run promise", e)
            });
      }

      e.preventDefault();
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
    font-family: "Evolventa", "lato", sans-serif;
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

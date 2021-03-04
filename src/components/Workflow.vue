<template>
  <section class="section section-lightest-grey section-partners">

    <div class="container">
    
      <div
      class="columns contentMarge row is-centered has-text-centered"
    >
      <div class="column card procedure-card has-text-justified">
        <div class="card-content">
          <div class="content">
            <div class="block has-text-centered">
              <g-image
                alt="picto1"
                title="picto1"
                class="procedure-card-image"
                src="~/assets/procedure/picto1.png"
              />
            </div>
            <h2 class="title is-2">
              Choisissez un sujet et
              <span class="is-green">déposez votre demande</span>
            </h2>
            <p class="article_content">
              Décrivez votre projet ou votre problème en donnant quelques
              éléments de contexte.
            </p>
          </div>
        </div>
      </div>

      <div class="column card procedure-card has-text-justified">
        <div class="card-content">
          <div class="content">
            <div class="block has-text-centered">
              <g-image
                alt="picto2"
                title="picto2"
                class="procedure-card-image"
                src="~/assets/procedure/picto2.png"
              />
            </div>
            <h2 class="title is-2">
              Nous identifions
              <span class="is-green">le bon conseiller  d'entreprise sur</span> votre région
              économique.
            </h2>
            <p class="article_content">
              Nous identifions, parmi l’ensemble des partenaires publics et
              parapublics, le conseiller  d'entreprise compétent pour votre demande sur votre
              région économique
            </p>
          </div>
        </div>
      </div>

      <div class="column card procedure-card has-text-justified">
        <div class="card-content">
          <div class="content">
            <div class="block has-text-centered">
              <g-image
                alt="picto3"
                title="picto3"
                class="procedure-card-image"
                src="~/assets/procedure/picto3.png"
              />
            </div>
            <h2 class="title is-2">
              <span class="is-green">Le conseiller d'entreprise vous contacte</span>
              directement pour vous aider sous 5 jours*.
            </h2>
            <p class="article_content">
              Le conseiller d'entreprise compétent pour votre demande vous contacte et vous
              accompagne en fonction de votre situation.
              <br />
              <em class="detail-info">* Délai moyen de prise en charge </em>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
  </section>
</template>

<script>
export default {
  props: {},
  created() {},
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
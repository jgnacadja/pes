<template>
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
              Une initiative à la mesure de vos besoins : vous êtes rappelé par
              le conseiller d'entreprise qui peut vous aider.
            </div>
          </div>

          <div class="columns has-text-center is-vcentered is-multiline">
            <div class="column is-5">
              <b-button
                tag="a"
                href="#scroll-section"
                type="is-primary"
                size="is-large"
              >
                <em class="fas fa-phone-alt"></em>
                Échanger avec un conseiller
              </b-button>
            </div>
            <div class="column is-5 itworks">
              <a href="/comment-ca-marche">Comment ça marche</a>
            </div>
          </div>
        </div>
        <div
          class="column is-one-third-desktop is-12-mobile has-text-center"
          id="image-home"
        >
          <figure class="image">
            <g-image src="~/assets/header.png" alt="Impulse" fit="inside" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
};
</script>
<style scoped lang="scss">
@import "../variables.scss";

@media only screen and (max-width: 415px) {
  .callcenter {
    padding: 0.5em;
    font-size: 0.8em;
  }

  .itworks {
    margin-top: 0em !important;
  }
}
</style>
<template>
  <footer class="footer_PE">
    <div class="container">
      <ul class="footer__links">
        <li class="marianne">
          <figure class="image">
            <g-image
              src="~/assets/logo/logo-ccib.png"
              alt="Chambre de commerce et d'industrie du BENIN"
              class="navbar__logo"
              fit="inside"
            />
          </figure>
        </li>
      </ul>
      <ul class="footer__links">
        <li class="title">
          <g-image
            src="~/assets/logo/impulse.png"
            alt="Impulse: Place des entreprises"
            class="navbar__domain"
            fit="inside"
          />
        </li>
        <li class="social-network">
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/jgnacadja/pes"
            ><i aria-hidden="true" class="fab fa-github"></i>
            <span class="visually-hidden">Github</span>
          </a>
        </li>
      </ul>
      <ul class="footer__links">
        <li>
          <g-link to="/cgu/">Conditions d’utilisation</g-link>
        </li>
        <li>
          <g-link to="/mentions_d_information/">Mentions d'information</g-link>
        </li>
        <li>
          <g-link to="/mentions_legales/">Mentions légales</g-link>
        </li>
        <li>
          <g-link to="/stats/">Statistiques</g-link>
        </li>
        <li>
          <g-link to="https://service-public.bj/">services publics</g-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 416px) and (max-width: 768px) {
  .footer_PE {
    height: 70em;
  }
}

@media only screen and (max-width: 415px) {
  .footer_PE {
    height: 30em;
  }
}
</style>

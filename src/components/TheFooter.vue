<template>
  <footer class="footer_PE">
    <div class="container">
      <ul class="footer__links">
        <li class="marianne">
          <a href="https://ccibenin.org" target="_blank">
            <figure class="image">
              <g-image
                src="~/assets/logo/ccib_bn.png"
                alt="Chambre de commerce et d'industrie du BENIN"
                class="navbar__logo"
                fit="inside"
              />
            </figure>
          </a>
        </li>
      </ul>
      <ul class="footer__links">
        <li class="title">
          <a href="/">
            <figure class="image">
              <g-image
                src="~/assets/logo/impulse_bn.png"
                alt="Impulse"
                class="navbar__domain"
                fit="inside"
              />
            </figure>
          </a>
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
          <g-link to="/blog/cgu">Conditions d’utilisation</g-link>
        </li>
        <li>
          <g-link to="/blog/mentions-dinformations"
            >Mentions d'information</g-link
          >
        </li>
        <li>
          <g-link to="/blog/mentions-legales">Mentions légales</g-link>
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
.footer_PE {
  background-color: #000;
  //  background-color: #D67143;
}

.navbar__domain {
  width: 10em;
}

.footer__links a {
  font-size: 1.02em;
  color: #ffffff;
}

.footer__links a:hover {
  font-size: 1.02em;
  background: #007452;
  color: #ffffff;
}

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

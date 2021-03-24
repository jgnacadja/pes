<template>
  <header class="section">
    <div class="block notification full-width error region-alerte">
      <div class="columns is-multiline is-vcentered">
        <div class="column is-3"></div>
        <div class="column is-5 has-text-centered-mobile">
          <strong>Impulse</strong> accélérateur du développement des entreprises.
        </div>
        <div class="column is-4-desktop is-12-touch is-12-tablet is-12-mobile">
          <a class="button is-small is-success help" href="/comment-ca-marche"
            >En savoir plus</a
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-mobile is-vcentered">
        <div class="column is-1"></div>
        <div class="column is-2-desktop is-5-mobile">
          <a href="https://ccibenin.org" target="_blank" rel="noopener">
            <figure class="image">
              <g-image
                src="~/assets/logo/ccib.png"
                alt="Chambre de commerce et d'industrie du BENIN"
                class="navbar__logo"
                fit="inside"
              />
            </figure>
          </a>
        </div>
        <div class="column is-3-desktop is-5-mobile">
          <a href="/">
            <figure class="image is-3by1">
              <g-image
                src="~/assets/logo/impulse.png"
                alt="Impulse"
                class="navbar__domain"
                fit="inside"
              />
            </figure>
          </a>
        </div>
      </div>
    </div>
    <div class="container has-text-right has-text-centered-mobile">
      <div class="container">
        <div class="column is-12">
          <ul>
            <li class="nav__item">
              <a href="/comment-ca-marche">Comment ça marche ?</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script scoped>
export default {
  data() {
    return {
      typeNavbar: "is-primary",
      typemedia: "is-white",
    };
  },
};
if (typeof window !== "undefined") {
  window.addEventListener("click", function (e) {
    var elements = document.getElementsByClassName("smooth-scroll-area-d");
    for (var i = 0; i < elements.length; i++) {
      if (!elements[i].contains(e.target)) {
        elements[i].style.display = "none";
      }
    }
  });
}
</script>

<style scoped lang="scss">
@import "../variables.scss";
.help {
  background-color: green !important;
}
@media only screen and (max-width: 415px) {
  // .notification {
  //   margin-bottom: -2em !important;
  // }

  // .navbar__domain {
  //   width: 70%;
  //   margin-top: 5%;
  // }
}
</style>

<template>
  <header class="section">
    <div class="block notification full-width error region-alerte">
      <div class="block container contentMarge">
        <p class="notif_content">
          <b>Impulse</b> accélérateur du développement des entreprises.
        </p>
        <a class="button small is-link is-header-link" href="/comment-ca-marche"
          >En savoir plus</a
        >
      </div>
    </div>
    <div class="container">
      <div class="navbar__container contentMarge">
        <a class="navbar__home" href="/">
          <div class="columns is-mobile">
            <div class="column is-5-desktop">
              <figure class="image">
                <g-image
                  src="~/assets/logo/logo-ccib.png"
                  alt="Chambre de commerce et d'industrie du BENIN"
                  class="navbar__logo"
                  fit="inside"
                />
              </figure>
            </div>
            <div class="column is-5-desktop">
              <figure class="image">
                <g-image
                  src="~/assets/logo/impulse.png"
                  alt="Impulse"
                  class="navbar__domain"
                  fit="inside"
                />
              </figure>
              <br />
            </div>
          </div>

          <button
            aria-label="Déplier menu"
            class="burger-btn"
            data-action="toggle-nav"
          >
            <span class="burger-btn__bar"></span>
            <span class="burger-btn__bar"></span>
            <span class="burger-btn__bar"></span>
          </button>
        </a>
        <nav data-target="toggle-nav">
          <ul class="nav__links">
            <li class="nav__item">
              <a href="/comment-ca-marche">Comment ça marche ?</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script scoped>
// import TheSearch from "~/components/TheSearch.vue";

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
      //console.log(elements[i]);
      if (elements[i].contains(e.target)) {
      } else {
        elements[i].style.display = "none";
        //document.getElementById('searchform').reset();
        //document.getElementById('search-field').value = '';
      }
    }
  });
}
</script>

<style scoped lang="scss">
.is-header-link {
  padding-top: 0.5em !important;
}

@media only screen and (max-width: 415px) {
  .notification {
    margin-bottom: -2em !important;
  }

  .navbar__domain {
    width: 70%;
    margin-top: 5%;
  }
}
</style>

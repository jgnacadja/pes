<template>
  <header class="section">
    <div class="block notification full-width error region-alerte">
      <div class="block container contentMarge container">
        <p class="notif_content">
          <b>Impulse</b> accélérateur du développement des entreprises.
        </p>
        <a class="button small is-link is-header-link" href="/comment-ca-marche"
          >En savoir plus</a
        >
      </div>
    </div>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-1"></div>
        <div class="column is-2 is-8-mobile">
          <a href="https://ccibenin.org" target="_blank">
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
        <div class="column is-3">
          <a href="/">
            <figure class="image">
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
          <nav data-target="toggle-nav">
            <ul class="nav__links">
              <li class="nav__item">
                <a href="/comment-ca-marche">Comment ça marche ?</a>
              </li>
            </ul>
          </nav>
        </div>
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

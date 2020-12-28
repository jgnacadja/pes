<template>
    <header class='section'>
        <div class='block notification full-width error region-alerte'>
            <div class='block container'>
                <p><b>Place des Entreprises</b> est un service public ouvert uniquement en Hauts-de-France et en Île-de-France.</p>
                <a class="button small warning" href="/comment_ca_marche.html#section-newsletter">En savoir plus</a>
            </div>
        </div>
        <div class='container'>
        <div class='navbar__container'>
            <a class='navbar__home' href='/'>
            <figure class="navbar__logo image is-128x128">
              <img alt="logo République française" class="navbar__logo" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <figure class="navbar__logo image is-128x128">
              <img alt="logo Place des Entreprises" class="navbar__domain" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <button aria-label='Déplier menu' class='burger-btn' data-action='toggle-nav'>
            <span class='burger-btn__bar'></span>
            <span class='burger-btn__bar'></span>
            <span class='burger-btn__bar'></span>
            </button>
            </a>
            <nav data-target='toggle-nav'>
                <ul class='nav__links'>
                    <li class='nav__item'>
                        <a href="https://blog.place-des-entreprises.beta.gouv.fr">Actu aides</a>
                    </li>
                    <li class='nav__item'>
                        <a href="/comment_ca_marche.html">Comment ça marche ?</a>
                    </li>
                    <li class='nav__item'>
                        <a id="experts_login" href="/mon_compte/sign_in">Accès conseillers</a>
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
</style>

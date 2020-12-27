<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

   welcome to impulse
  </Layout>
</template>

<page-query>
</page-query>

<script>


export default {
  components: {
  
  },
  metaInfo: {
    title: "Studely : Etudier en France en toute sérénité !",
  },
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      iconPack: "fas",
      iconSize: "is-large",
      pauseHover: false,
      carousels: [],

      //Main carrousel

      arrow: false,
      arrowBoth: false,
      arrowHover: false,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      indicator: false,
      autoPlay: false,
      pauseHover: false,

      carousel: [],

      about: [],
    };
  },
  created() {
    this.checkCountry(this.isSubdomain("https://www.cameroun.studely.com"));
  },
  methods: {
    isSubdomain(url) {
      // IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
      url = url.replace(new RegExp(/^\s+/), ""); // START
      url = url.replace(new RegExp(/\s+$/), ""); // END

      // IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
      url = url.replace(new RegExp(/\\/g), "/");

      // IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
      url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i), "");

      // IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
      url = url.replace(new RegExp(/^www\./i), "");

      // REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
      url = url.replace(new RegExp(/\/(.*)/), "");

      // REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
      if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), "");

        // REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
      } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,4}$/i), "");
      }
      return url;
    },

    checkCountry(url) {
      // CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING

      if (url.match(new RegExp(/\./g)) ? true : false) {
        var subdomain = url.split(/\.(?=[^\.]+$)/)[0];

        var countries = this.$page.countries.edges[0].node.countries;

        var country = countries.filter((item) => item === subdomain);

        if (country.length > 0) {
          this.loadCountryData(subdomain);
        }
      }
    },

    loadCountryData(subdomain) {
      this.arrow = this.$page.page.carrouselBlock.arrow;
      this.arrowBoth = this.$page.page.carrouselBlock.arrowBoth;
      this.arrowHover = this.$page.page.carrouselBlock.arrowHover;
      this.indicator = this.$page.page.carrouselBlock.indicator;
      this.autoPlay = this.$page.page.carrouselBlock.autoPlay;
      this.pauseHover = this.$page.page.carrouselBlock.pauseHover;

      //filter carousel by domain

      var carousel = this.$page.page.carrouselBlock.carrouselBlock;
      this.carousel = carousel.filter((item) => item.country === subdomain);

      this.carousels = this.$page.page.feeds;

      //filter about by domain

      var about = this.$page.page.aboutSection;
      this.about = about.filter((item) => item.country === subdomain);
    },
  },
  filters: {
    // Filter definitions
    Upper(value) {
      const leftletter = value.substring(0, 1);
      const rightvalue = value.substring(1);
      return leftletter.toUpperCase() + rightvalue;
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.diapo {
  min-height: 40em;
  background-size: cover;
}

.title {
  font-size: 3rem;
}

.content-24 {
  font-size: 2em;
}

@media only screen and (max-width: 414px) {
  .content-24 {
    font-size: 1.5em;
  }

  .title {
    font-size: 2.2rem;
  }

  .button-service {
    font-size: 1em !important;
  }
}

.image-fit {
  width: 80px;
  height: 80px;
}
</style>

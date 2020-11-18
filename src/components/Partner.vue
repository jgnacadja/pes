<template>
  <div class="columns is-variable is-2 is-vcentered is-centered">
    <b-carousel-list
      :data="partenaires.slides"
      :arrow="partenaires.arrow"
      :has-drag="partenaires.drag"
      :has-grayscale="partenaires.gray"
      :has-opacity="partenaires.opacity"
      :refresh="partenaires.refresh"
      :icon-pack="partenaires.iconPack"
      :icon-size="partenaires.iconSize"
      :autoplay="true"
      :interval="10000"
      :pause-hover="false"
      style="box-shadow: unset"
    >
      <template slot="item" slot-scope="props">
        <div class="column is-6-desktop is-12-mobile">
          <figure class="image is-square">
            <g-image :src="props.list.image" fit="inside" />
          </figure>
        </div>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      iconPack: "fas",
      iconSize: "is-large",
      pauseHover: false,
      partenaires: {
        refresh: true,
        arrow: true,
        drag: true,
        gray: false,
        opacity: false,
        values: "3",
        repeat: true,
        iconPack: "fas",
        iconSize: "is-large",
        perList: 4,
        slides: [
          {
            image: "/index-partner-slides/ARPEJ.png",
          },
          {
            image: "/index-partner-slides/LOGO AppartStudy-Vertical-RVB.png",
          },
          {
            image: "/index-partner-slides/logo_kley.png",
          },
          {
            image: "/index-partner-slides/logo-Les-Estudines-BD.jpg",
          },
          {
            image: "/index-partner-slides/logo-logifac-blanc.png",
          },
          {
            image: "/index-partner-slides/logo-zen-etudes.png",
          },
          {
            image: "/index-partner-slides/nexity.png",
          },
          {
            image: "/index-partner-slides/studelites.jpg",
          },
        ],
      },
    };
  },
  created() {
    var slides = [];
    for (var i = 0; i < this.partners.length; i++) {
      var obj = {}; // <---- Move declaration inside loop

      obj["image"] = this.partners[i].file.url;
      slides.push(obj);
    }
    console.log(slides);
    //this.slides = slides;
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>
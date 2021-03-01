<template>
  <div class="columns is-variable is-2 is-vcentered">
    <div ref="breadcrumb" class="column is-12">
      <a href="/">Acceuil</a>


      <template v-if="category != '' && fromform == ''">
        <span>
          &nbsp;&nbsp;
          <b-icon pack="fas" icon="greater-than" type="is-black" size="is-small" />
          &nbsp;&nbsp; Entreprises,
          {{ category }}
        </span>
      </template>
      <template v-else>
        
        <span>
          &nbsp;&nbsp;
          <b-icon pack="fas" icon="greater-than" type="is-black" size="is-small" />
          &nbsp;&nbsp;
          <g-link :to="parentbreadsForm.path" >{{ parentbreadsForm.title }}</g-link>
          
        </span>

        <span v-if="fromform != ''">
          &nbsp;&nbsp;
          <b-icon pack="fas" icon="greater-than" type="is-black" size="is-small" />
          &nbsp;&nbsp; {{ breadsForm }}
        </span>

      </template>
      
    </div>
  </div>
</template>

<page-query>
query CategoryPage($path: String!) {
  categories: allCategory(filter: { path: { eq: $path } }) {
    edges {
      node {
        id
        title
        meta
        category
        content
        path
        forms {
          path
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  props: {
    category: {
      type: String,
      default() {
        return {};
      },
    },
    fromform: {
      type: String,
      default() {
        return {};
      },
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
  data() {
    return {
      breads: "",
      breadsForm: "",
      parentbreadsForm: {
        title: "",
        path: ""
      }
    };
  },
  mounted() {
    var cartegories = this.$page.categories.edges;

    if(this.fromform != ''){
      var pathname = window.location.pathname; 
      var currentCartegory = cartegories.filter((item) => 
        item.node.forms.length > 0 &&
        item.node.forms[0].path==pathname)[0]   

      var parent = cartegories.filter((item) => item.node.id == currentCartegory.node.parent)[0]

      this.parentbreadsForm.title = parent.node.title
      this.parentbreadsForm.path = parent.node.path
      this.breadsForm = "vous souhaitez " + currentCartegory.node.title.toLowerCase() + " ?"
    }

    //this.$refs["breadcrumb"].lastElementChild.className = "has-text-primary";
  },
  methods: {
    backUrl: function(e) {
      
    }
  }
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>

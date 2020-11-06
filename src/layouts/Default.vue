<template>
  <div class="layout">
    <TheMegamenu />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
  </div>
</template>

 <script>
import TheMegamenu from "~/components/TheMegamenu.vue";

export default {
  components: {
    TheMegamenu,
  },
};
</script>

<style>

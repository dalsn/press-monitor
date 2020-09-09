<template>
  <main id="app" class="app">
    <NavBar class="sticky top-0" />
    <div>
      <router-view />
    </div>
  </main>
</template>

<script>
import NavBar from "@/components/partials/NavBar";
export default {
  components: { NavBar }
};
</script>

<style lang="scss">
@import "assets/main";
main {
  height: 200vh;
}
</style>

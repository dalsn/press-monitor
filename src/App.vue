<template>
  <main id="app" class="app">
    <NavBar class="sticky top-0 z-50" />
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
@import "assets/scss/_breakpoints";
@import "assets/scss/_tags-input";
@import "assets/scss/_report-box";
@import "assets/scss/_report-chart";
@import "assets/scss/_mini-report-chart";
</style>

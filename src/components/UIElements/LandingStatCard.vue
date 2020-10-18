<template>
  <div
    class="bg-white card z-50 max-w-xl rounded-6  py-12 pl-10 border-transpurple "
  >
    <p class="-mt-5 pb-8"><slot name="heading"></slot></p>
    <h1 class="font-bold text-statvalue ">
      <slot name="value">1,729</slot>
    </h1>
    <p class="font-normal pr-10 max-w-lg mt-3">
      <slot name="summary"
        >The total number of corruption cases recorded between 2003 and Mar 25,
        2020</slot
      >
    </p>
    <div>
      <slot name="image"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingStatCard",
  components: {}
};
</script>

<style scoped lang="scss">
section {
  .card {
    z-index: 3 !important;
  }
  .svg {
    z-index: 1 !important;
  }
}
</style>

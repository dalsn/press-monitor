<template>
  <div
    class="bg-white w-50 rounded-lg flex items-center pt-31 pl-31 pr-31 pb-31"
  >
    <header class="w-full">
      <div class="title  ">
        <slot name="header"> </slot>
      </div>
    </header>
    <figure class="">
      <slot name="svg"> </slot>
    </figure></div
></template>

<script>
export default {
  name: "StatBox"
};
</script>

<style scoped></style>

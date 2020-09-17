<template>
  <div class="flex justify-start">
    <h1
      class="text-xs leading-15 cursor-pointer  flex items-center inline-block  px-3 py-1 rounded-full leading-20 text-white"
    >
      <slot>Fraud</slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "StatePill"
};
</script>

<style scoped></style>

<template>
  <div
    class="title  text-transgray700 cursor-pointer text-sm flex justify-betweens items-center"
  >
    Case Rate:
    <h1 class="ml-2 px-2 rounded bg-transgreen100 text-transgreen200">
      <slot>+ 4% Increase from last month</slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "TableSummary"
};
</script>

<style scoped></style>

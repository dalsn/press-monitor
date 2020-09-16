<template>
  <div class="bg-white rounded pl-3">
    <div
      class="title  text-transgray800 cursor-pointer text-lg flex justify-betweens items-center"
    >
      Sort by:
      <h1 class="ml-2 text-transgray700"><slot></slot></h1>
      <svg
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2263 14.5964C9.68124 15.1415 9.63931 15.9992 10.1005 16.5924L10.2263 16.7348L17.7868 24.2953C18.3319 24.8404 19.1896 24.8824 19.7828 24.4211L19.9253 24.2953L27.4858 16.7348C28.0763 16.1443 28.0763 15.1869 27.4858 14.5964C26.9407 14.0513 26.083 14.0094 25.4898 14.4706L25.3473 14.5964L18.8561 21.0865L12.3648 14.5964C11.8197 14.0513 10.962 14.0094 10.3688 14.4706L10.2263 14.5964Z"
            fill="#7E84A3"
          />
        </g>
      </svg>
    </div></div
></template>
<script>
export default {
  name: "SortButton"
};
</script>

<style scoped></style>

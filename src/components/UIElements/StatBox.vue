<template>
  <div class="bg-white flex items-center">
    <header>
      <slot name="header">
        <div class="title pt-31 pl-31 pr-31 pb-31">
          <p class="text-15 leading-22 text-transgray700 pb-28 ">Total Cases</p>
          <h1 class="text-transblack text-22 font-transsemibold leading-31">
            348
          </h1>
        </div>
      </slot>
    </header>
    <figure class="ml-5">
      <slot name="svg">
        <svg
          width="168"
          height="91"
          viewBox="0 0 168 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <rect x="0.75" y="0.5" width="166.5" height="90" fill="white" />
            <rect
              x="1.875"
              y="62.375"
              width="23.625"
              height="28.125"
              rx="4.5"
              fill="#D9E4FF"
            />
            <rect
              x="30"
              y="45.5"
              width="23.625"
              height="45"
              rx="4.5"
              fill="#D9E4FF"
            />
            <rect
              x="58.125"
              y="16.25"
              width="23.625"
              height="74.25"
              rx="4.5"
              fill="#1E5EFF"
            />
            <rect
              x="86.25"
              y="35.375"
              width="23.625"
              height="55.125"
              rx="4.5"
              fill="#D9E4FF"
            />
            <rect
              x="114.375"
              y="26.375"
              width="23.625"
              height="64.125"
              rx="4.5"
              fill="#D9E4FF"
            />
            <rect
              x="142.5"
              y="45.5"
              width="23.625"
              height="45"
              rx="4.5"
              fill="#D9E4FF"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="166.5"
                height="90"
                fill="white"
                transform="translate(0.75 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </slot>
    </figure></div
></template>

<script>
export default {
  name: "StatBox"
};
</script>

<style scoped></style>

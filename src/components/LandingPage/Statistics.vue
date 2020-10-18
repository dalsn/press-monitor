<template>
  <section class="font-serif ">
    <div
      class="case-stat bg-case pt-10
"
    >
      <h1 class="text-white font-bold text-48 text-center leading-73">
        Case statistics
      </h1>

      <div class="numbers flex pl-16 pr-16 pt-16 pb-20">
        <div class="left w-full border-r border-white">
          <div class="top border-b pb-5 pr-40">
            <h1 class="text-148 font-bold leading-128 text-statorange">985</h1>
            <p class="text-white text-44 font-semibold">cases are on trial</p>
          </div>
          <div class="bottom pt-5">
            <p class="text-37 text-white font-semibold leading-45">
              <span class="text-2">2</span> cases suspended
            </p>
          </div>
        </div>
        <div class="right w-full">
          <div class="top pl-10 border-b pt-5 pb-5">
            <p class="text-37 text-white font-semibold leading-45">
              <span class="text-transgreen300">5</span> cases suspended
            </p>
          </div>
          <div class="bottom pl-10 pt-20">
            <h1 class="text-126 font-bold leading-128 text-737">737</h1>
            <p class="text-white text-37 font-semibold">cases are decided</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="case-stat bg-white pt-10
"
    >
      <h1 class="text-transpurple font-bold text-48 text-center leading-73">
        Cases and charges
      </h1>

      <div class="numbers flex pl-16 pr-16 pt-16 pb-20">
        <div class="left w-full border-r">
          <div class="top border-b pb-5">
            <h1 class="text-148 font-bold leading-128 text-43">43</h1>
            <p class="text-transpurple200 text-31 font-semibold pt-8 max-w-lg">
              out of 1729 cases were 1-count charge bordering on illegal dealing
              in petroleum products
            </p>
          </div>
          <div class="bottom pt-5 flex items-center">
            <p class="text-72 text-16 font-semibold leading-88">
              16
            </p>
            <p
              class="text-2xl ml-5 max-w-sm pr-10 font-semibold text-transpurple200"
            >
              were 1-count charge bordering on impersonation
            </p>
          </div>
        </div>
        <div class="right w-full">
          <div class="top flex items-center pl-10 border-b pt-5 pb-5">
            <p class="text-72 text-18 font-semibold leading-88">
              18
            </p>
            <p
              class="text-2xl ml-5 max-w-sm pr-10 font-semibold text-transpurple200"
            >
              bordering on illegal oil bunkering
            </p>
          </div>
          <div class="bottom pl-10 pt-16 pb-10">
            <h1 class="text-126 font-bold leading-128 text-737">37</h1>
            <p class="text-transpurple200 text-37 max-w-lg font-semibold">
              were 1-count charge bordering on internet fraud
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Statistics"
};
</script>

<style scoped></style>

<template>
  <div class="overflow-y-hidden">
    <div
      class="py-4 px-6 h-auto flex flex-col items-center items-center lg:col-span-1"
    >
      <div class="text-center">
        <h1 class="text-lg text-transpurple font-bold mb-8">
          Total Court Cases
        </h1>
        <img class="mb-8 mx-auto" src="../assets/svg/staticon.svg" alt="" />
      </div>
      <div class="statistics text-stat">
        <div
          class="stat grid grid-cols-3 items-center row-gap-2 md:gap-x-12 md:text-lg"
        >
          <div class="title text-transpurple">Fraud</div>
          <div class="number justify-self-center text-transgray400">
            724
          </div>
          <svg
            class="svg-content"
            viewBox="0 0 107 5"
            preserveAspectRatio="xMinYMin meet"
          >
            <rect
              x="0.712646"
              y="1.43283"
              width="106"
              height="2.80597"
              rx="1.40299"
              fill="#E7E6EF"
            />
            <rect
              x="0.712646"
              y="0.731354"
              width="90"
              height="4.20896"
              rx="2.10448"
              fill="#8676FF"
            />
          </svg>

          <div class="title text-transpurple">Cybercrime/fraud</div>
          <div class="number justify-self-center text-transgray400">
            370
          </div>
          <svg
            class="svg-content"
            viewBox="0 0 107 5"
            preserveAspectRatio="xMinYMin meet"
          >
            <rect
              x="0.712646"
              y="1.05972"
              width="106"
              height="2.80597"
              rx="1.40298"
              fill="#E7E6EF"
            />
            <rect
              x="0.712646"
              y="0.358215"
              width="46"
              height="4"
              rx="2"
              fill="#FFBA69"
            />
          </svg>

          <div class="title text-transpurple">
            Money laundering
          </div>
          <div class="number justify-self-center text-transgray400">
            151
          </div>
          <svg
            class="svg-content"
            viewBox="0 0 107 5"
            preserveAspectRatio="xMinYMin meet"
          >
            <rect
              x="0.712646"
              y="1.05969"
              width="106"
              height="2.80597"
              rx="1.40298"
              fill="#E7E6EF"
            />
            <rect
              x="0.712646"
              y="0.358215"
              width="20"
              height="4"
              rx="2"
              fill="#27AE60"
            />
          </svg>

          <div class="title text-transpurple">
            Illegal oil dealing
          </div>
          <div class="number justify-self-center text-transgray400">
            116
          </div>
          <svg
            class="svg-content"
            viewBox="0 0 107 5"
            preserveAspectRatio="xMinYMin meet"
          >
            <rect
              x="0.712646"
              y="1.05969"
              width="106"
              height="2.80597"
              rx="1.40298"
              fill="#E7E6EF"
            />
            <rect
              x="0.712646"
              y="0.358215"
              width="13"
              height="4"
              rx="2"
              fill="#56CCF2"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  data() {
    return {
    }
  }
};
</script>

<style scoped lang="scss">
.svg-container {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: hidden;

  .svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

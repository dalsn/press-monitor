<template>
  <section
    class="font-serif w-full pt-24 pb-20 relative flex bg-transpink pl-16"
  >
    <div class="left relative w-full">
      <LandingStatCard class="z-50 card ml-10 border-lsc">
        <template v-slot:value
          ><span class="leading-111 text-106">1,729</span></template
        >
        <template v-slot:summary
          ><span class="text-23 leading-34 text-transgray"
            >The total number of corruption cases recorded between 2003 and Mar
            25, 2020</span
          ></template
        >
      </LandingStatCard>
      <div class="dotsvg">
        <img
          class="svg top-0"
          src="../../assets/images/blackdot.png"
          alt="Black dots"
        />
      </div>
      <div class="dotsvg"></div>
    </div>
    <div class="right relative w-full ">
      <img class="topic" src="../../assets/svg/topic.svg" alt="" />
    </div>
  </section>
</template>

<script>
import LandingStatCard from "../UIElements/LandingStatCard";
// import BlackDotSvg from "../UIElements/BlackDotSvg";

export default {
  name: "Recorded",
  components: { LandingStatCard }
};
</script>

<style scoped lang="scss">
section {
  .card {
    z-index: 100 !important;
  }
  .svg {
    position: absolute;
    z-index: 1 !important;
  }
  .topic {
    position: absolute;
    top: 0;
    right: 0;
  }
  .dotsvg {
    background: url("../../assets/images/blackdot.png") no-repeat center;
  }
}
</style>

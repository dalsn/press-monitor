<template>
  <section
    class="font-serif flex justify-between w-full pt-24 pb-40  relative  bg-transpink pl-16 pr-16"
  >
    <div class="left relative w-full ">
      <LandingStatCard class="z-50 card  ml-10 border-lsc">
        <template v-slot:heading
          ><span class="text-lscheading text-transgray leading-34 "
            >Out of 1729 corruption cases recorded</span
          >
        </template>
        <template v-slot:value
          ><span class="leading-111 text-106">668</span></template
        >
        <template v-slot:summary
          ><span class="text-23 leading-34 text-transgray"
            >defendants do not have counsels</span
          ></template
        >
      </LandingStatCard>
      <div class="dotsvg hidden">
        <img
          class="svg top-0"
          src="../../assets/images/blackdot.png"
          alt="Black dots"
        />
      </div>
    </div>
    <div class="right right-0 mr-32 absolute pb-20">
      <img class="topic" src="../../assets/svg/courtcases.svg" alt="" />
    </div>
  </section>
</template>
<script>
import LandingStatCard from "../UIElements/LandingStatCard";
export default {
  name: "CourtCases",
  components: { LandingStatCard }
};
</script>

<style scoped></style>

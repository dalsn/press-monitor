<template>
  <section class="bg-statvalue  pt-24 pb-16  h-auto font-serif">
    <h1 class="text-white font-bold text-48 leading-73 text-center">
      Number of cases handled
    </h1>
    <div class="flex items-center justify-center mt-12 ">
      <LandingStatCard class="mr-10">
        <template v-slot:value
          ><span class="leading-128 text-106">1,598</span></template
        >
        <template v-slot:summary
          ><span class="text-30 text-cardtext"
            >Number of cases EFCC were responsible for handling</span
          ></template
        >
      </LandingStatCard>
      <LandingStatCard class="ml-10 mt-10 rounded-lg">
        <template v-slot:value
          ><span class="text-91 leading-110">119</span></template
        >
        <template v-slot:summary
          ><span class="text-25 text-cardtext"
            >Number of cases ICPC were responsible for handling</span
          ></template
        >
      </LandingStatCard>
    </div>
  </section>
</template>

<script>
import LandingStatCard from "../UIElements/LandingStatCard";
export default {
  name: "NumberOfCases",
  components: { LandingStatCard }
};
</script>

<style scoped></style>

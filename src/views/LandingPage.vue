<template>
  <section>
    <Header />
    <Recorded />
    <NumberOfCases />
    <TimeLine />
    <CourtCases />
  </section>
</template>

<script>
import Header from "../components/LandingPage/Header";
import Recorded from "../components/LandingPage/Recorded";
import NumberOfCases from "../components/LandingPage/NumberOfCases";
import TimeLine from "../components/LandingPage/TimeLine";
import CourtCases from "../components/LandingPage/CourtCases";
export default {
  name: "LandingPage",
  components: { CourtCases, TimeLine, NumberOfCases, Recorded, Header }
};
</script>

<style scoped></style>

<template>
  <section>
    <Header />
    <Recorded />
    <NumberOfCases />
    <TimeLine />
    <CourtCases />
    <Statistics />
    <Sector />
    <Stages />
  </section>
</template>

<script>
import Header from "../components/LandingPage/Header";
import Recorded from "../components/LandingPage/Recorded";
import NumberOfCases from "../components/LandingPage/NumberOfCases";
import TimeLine from "../components/LandingPage/TimeLine";
import CourtCases from "../components/LandingPage/CourtCases";
import Statistics from "../components/LandingPage/Statistics";
import Sector from "../components/LandingPage/Sector";
import Stages from "../components/LandingPage/Stages";
export default {
  name: "LandingPage",
  components: {
    Stages,
    Sector,
    Statistics,
    CourtCases,
    TimeLine,
    NumberOfCases,
    Recorded,
    Header
  }
};
</script>

<style scoped></style>

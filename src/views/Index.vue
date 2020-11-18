<template>
  <div class="home">
    <Hero />
    <Summary />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
export default {
  name: "Index",
  components: { Hero, Summary }
};
</script>

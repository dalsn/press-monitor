<template>
  <div class="home mb-16">
    <Hero />
    <Summary />
    <div class="px-4 mx-auto md:px-12 lg:w-3/5 py-8 mb-16">
    	<h2 class="text-center text-3xl font-semibold text-transpurple mb-8">Recent Cases</h2>
		<CaseSummaryCard />
	</div>
	<div class="px-4 mx-auto md:px-12 lg:px-32 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
		<CaseCard className="active" />
		<CaseCard />
		<CaseCard />
	</div>
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import CaseSummaryCard from "@/components/UIElements/CaseSummaryCard";
import CaseCard from "@/components/UIElements/CaseCard";
export default {
  name: "Index",
  components: { Hero, Summary, CaseSummaryCard, CaseCard }
};
</script>

<template>
  <div class="">
    <Hero />
    <Summary />
    <section class="bg-hero py-8">
	    <div class="px-4 mx-auto lg:px-12 lg:w-3/5 mb-16">
	    	<h2 class="text-center text-3xl font-semibold text-transpurple mb-8">Recent Cases</h2>
			<CaseSummaryCard />
		</div>
	</section>
	<section class="flex flex-col mt-8 py-16">
		<div class="px-4 mx-auto lg:px-12 xl:px-32 md:grid md:grid-cols-2 xl:grid-cols-3 lg:gap-6 gap-4">
			<CaseCard className="active" />
			<CaseCard />
			<CaseCard />
			<CaseCard />
			<CaseCard />
			<CaseCard />
		</div>
		<button class="btn mx-4 md:mx-auto mt-12 border border-transpurple xl:w-1/6 md:w-1/3 p-3 rounded-full hover:shadow-xl">
			View All Cases
		</button>
	</section>
	<Footer className="bg-hero"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import CaseSummaryCard from "@/components/UIElements/CaseSummaryCard";
import CaseCard from "@/components/UIElements/CaseCard";
import Footer from "@/components/partials/Footer";
export default {
  name: "Index",
  components: { Hero, Summary, CaseSummaryCard, CaseCard, Footer }
};
</script>

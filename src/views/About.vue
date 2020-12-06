<template>
	<section class="pt-16 md:pt-24">
		<div class="container mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-24">
			<div class="flex flex-col lg:grid grid-cols-2 gap-6">
				<div class="items-center">
					<h1 class="text-2xl mb-6 text-transpurple font-semibold md:text-3xl xl:text-4xl">We monitor and provide information on Corruption Cases in Nigeria</h1>
					<p class="text-justify">Tracking Corruption Cases is a project of <a class="text-link" href="http://transparencit.com" target="_blank" rel="noreferrer noopener">TransparencIT</a> funded and supported by <a class="text-link" href="http://trustafrica.org" target="_blank" rel="noreferrer noopener">TrustAfrica</a> to monitor corruption cases in Nigeria. The aim is to ensure compliance to extant laws, reduce delays, improve efficiency, achieve speedy trial and conclusion of cases. The project also promotes judicial accountability and enhances citizens’ participation in judicial processes by sensitizing and empowering them with information on judicial proceedings in a simplified and appealing format.</p>
					<p class="text-justify">The corruption cases database provides information that helps citizens to map trends and patterns of prosecution, offences, locations, length of trial, status of cases and the extent of compliance with the Administration of Criminal Justice Act/Laws by stakeholders.</p>
					<p class="text-justify">The project also assesses the performance of key elements of the justice system which could serve as a vehicle to open justice, promote judicial reforms and uphold rights of fair hearings in court.</p>
				</div>
				<div class="hidden lg:block lg:mx-auto lg:my-auto">
					<img alt="Scales of justice" class="object-contain object-scale-down justice" src="../assets/images/vectors/justice.svg">
				</div>
			</div>
			<div class="md:grid grid-cols-2 gap-8 pt-5">
				<div class="py-8 mb-4 md:mb-0">
					<img alt="TransparencIT logo" class="mx-auto object-contain object-scale-down h-16" src="../assets/images/transparencit.png">
				</div>
				<div class="py-8">
					<img alt="TrustAfrica logo" class="mx-auto object-contain object-scale-down h-16" src="../assets/images/trustafrica.png">
				</div>
			</div>
		</div>
		<Footer />
	</section>
</template>

<script>
	import Footer from "../components/partials/Footer";

	export default {
		components: {
			Footer
		},
		data() {
			return {

			}
		}
	};
</script>

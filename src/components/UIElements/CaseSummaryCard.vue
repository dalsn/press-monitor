<template>
	<div class="case-summary-card relative flex shadow-xl rounded-lg px-6 lg:px-12 pt-4 pb-2 md:pt-8 md:pb-4">
		<span class="absolute rounded-full shadow-lg bg-transpurple p-2 md:p-3" style="top: -1.25rem; left: -1.25rem;">
			<img alt="Scale of justice" src="@/assets/images/vectors/scale.svg" class="">
		</span>
        <div class="text-transpurple">
            <p><small>Date of first arraignment | 24th Oct. 2020</small></p>
            <p class="text-xl lg:text-2xl my-4"><strong>FRN vs Edidiong Udokpoh</strong></p>
            <p class="lg:text-lg mb-3 text-justify">The Defendant, whilst being the IT Officer of the Bank, was alleged to have fraudulently inserted the names and account numbers of his family members and friends into the payroll schedule of Delta State government being handled by Access bank and subsequently paid monies into those Accounts.</p>
            <ul class="mb-3">
            	<li>Edidiong Udokpoh (Cyber Criminal)</li>
            </ul>
            <p class="mb-1"><strong>Prosecuting Agency:</strong> Economic and Financial Crimes Commission
            <p class="mb-4"><strong>Prosecuting Judge:</strong> Justice Mercy Abang</p>
            <p class="text-right">
            	<strong>Status: Decided</strong>
            </p>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['case', 'className'],
		name: "CaseSummaryCard",
		data() {
			return {

			}
		}
	};
</script>
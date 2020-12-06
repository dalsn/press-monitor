<template>
	<div class="case-card flex shadow-lg rounded-lg px-6 py-4 md:pt-8 md:pb-4 mb-8 border" :class="className">
        <div class="">
            <div class="flex items-center">
                <hr class="border-2 w-1/4">
                <p class="text-2xl px-3 leading-tight">Cyber crime/Some other crime</p>
            </div>
            <p class="text-xl lg:text-2xl my-4">FRN vs Edidiong Udokpoh</p>
            <p class="mb-1"><strong>Prosecuting Agency:</strong> Economic and Financial Crimes Commission
            <p class="mb-4"><strong>Prosecuting Judge:</strong> Justice Mercy Abang</p>
            <div class="flex items-center justify-between">
                <button class="btn w-2/5">
                    Read More
                </button>
                <p class="text-right text-sm font-semibold">
                    Status: Decided
                </p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		props: ['case', 'className'],
		name: "CaseCard",
		data() {
			return {

			}
		}
	};
</script>
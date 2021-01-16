<template>
	<div class="case-summary-card relative flex shadow-xl rounded-lg px-6 lg:px-12 pt-4 pb-2 md:pt-8 md:pb-4">
		<span class="absolute rounded-full shadow-lg bg-transpurple p-2 md:p-3" style="top: -1.25rem; left: -1.25rem;">
			<img alt="Scale of justice" src="@/assets/images/vectors/scale.svg" class="">
		</span>
        <div class="text-transpurple">
            <p><small>Date of first arraignment | {{ caseFile.date_of_arraignment }}</small></p>
            <p class="text-xl lg:text-2xl my-4"><strong>{{ caseFile.title }}</strong></p>
            <p class="lg:text-lg mb-3 text-justify">{{ caseFile.description }}</p>
            <ul v-if="caseFile.defendants" class="mb-3">
            	<li v-for="(defendant, key) in caseFile.defendants" :key="key">{{ defendant.name }} <span v-if="defendant.designation">({{ defendant.designation }})</span></li>
            </ul>
            <p v-if="caseFile.agency" class="mb-1"><strong>Prosecuting Agency:</strong> {{ caseFile.agency.name }}
            <p v-if="caseFile.judge" class="mb-4"><strong>Prosecuting Judge:</strong> {{ caseFile.judge.name }}</p>
            <p class="text-right">
            	<strong>Status: {{ caseFile.status }}</strong>
            </p>
        </div>
    </div>
</template>

<script>
	export default {
		props: {
            caseFile: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            className: [Object, String]
        },
		name: "CaseSummaryCard",
		data() {
			return {}
		}
	};
</script>
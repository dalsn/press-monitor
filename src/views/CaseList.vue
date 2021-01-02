<template>
	<section class="pt-4 lg:pt-12">
		<div class="mb-2 md:mb-16 mx-auto w-full px-4 py-6 lg:py-1">
            <div class="mx-auto w-2/3 pt-5 pb-2">
                <div class="mx-auto">
                    <form method="GET" class="mb-4" @submit.prevent="search()">
                        <div class="h-full flex bg-white rounded-lg justify-between items-center shadow-md">
                            <label
                                for="search-text"
                                class="flex w-2/3 md:w-3/4 items-center ml-2"
                            >
                                <input
                                    id="search-text"
                                    class="h-12 focus:outline-none pl-1 w-full"
                                    type="text"
                                    placeholder="Search database"
                                    v-model="q"
                                />
                            </label>
                            <div class="w-1/3 md:w-1/4 px-2">
                                <button
                                    type="submit"
                                    class="text-center md:px-4 text-white rounded md:font-semibold bg-transpurple focus:outline-none text-sm w-full py-2"
                                >
                                    SEARCH
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="mb-4">
                        <div class="h-full flex bg-white rounded-lg justify-between items-center shadow-md">
                            <label
                                for="filter-date"
                                class="flex w-full items-center mx-2 px-2"
                            >
                                <input
                                    id="filter-date"
                                    class="h-12 focus:outline-none w-full"
                                    type="text"
                                    placeholder="Filter list"
                                    v-model="filterQuery"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto px-4 lg:px-24 pt-3 mt-4">
                <div class="flex justify-between items-center mb-6">
                    <p class="flex text-xl md:text-4xl text-transpurple">
                        List of Cases
                    </p>
                    <span class="rounded-full shadow-lg bg-transpurple p-2 md:p-3">
                        <img alt="Scale of justice" src="@/assets/images/vectors/scale.svg" class="">
                    </span>
                </div>
                <div v-if="cases.length > 0 && !isLoading">
                    <div class="md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                        <template v-for="(c, key) in cases">
                            <CaseCard :caseFile="c" :key="key"></CaseCard>
                        </template>
                    </div>
                    <button class="flex justify-center btn mx-4 md:mx-auto mt-8 border border-transpurple xl:w-1/6 md:w-1/3 p-3 rounded-full hover:shadow-lg disabled:opacity-75" @click="getCases()" :disabled="disabled" v-show="!searchAction">
                        VIEW MORE
                    </button>
                </div>
                <div class="h-64 flex items-center justify-center" v-else>
                    <h4 class="text-2xl">{{message}}</h4>
                </div>
                <div class="mt-4 algolia flex justify-end" v-show="searchAction">
                    <img alt="Search by Algolia" src="@/assets/images/vectors/search-by-algolia.svg" class="h-5">
                </div>
            </div>
        </div>
		<Footer className="bg-hero" />
	</section>
</template>

<script>
    import Footer from "../components/partials/Footer";
	import CaseCard from "../components/UIElements/CaseCard";
    import axios from "axios";

	export default {
		components: {
			Footer,
            CaseCard
		},
		data() {
			return {
                "cases": [],
                "casesList": [],
                "page": 0,
                "disabled": false,
                "isLoading": true,
                "fullPage": false,
                "message": "Loading...",
                "q": "",
                "filterQuery": "",
                "searchAction": false
			}
		},
        created() {
            this.getCases();
        },
        computed: {
            offenceUrl() {
                return id => `${window.host}/offence?pid=${id}`;
            }
        },
        watch: {
            filterQuery() {
                this.filterCases();
            }
        },
        methods: {
            getCases() {
                this.searchAction = false;
                this.disabled = true;
                // this.isLoading = true;
                this.message = "Loading...";

                axios.get(`${window.host}/api/cases?page=${this.page}`)
                .then(response => {
                    if (response.data.cases) {
                        let cases = response.data.cases;

                        if (typeof cases === "object")
                            cases = Object.keys(cases).map(key => cases[key]);

                        cases.forEach(c => {
                            this.casesList.push(c);
                        });

                        this.cases = this.casesList;
                        this.page++;
                    }
                    if (this.cases.length < 1)
                        this.message = "No cases recorded yet!";

                    this.disabled = false;
                    this.isLoading = false;
                })
                .catch(e => {
                    console.error(e);
                    this.disabled = false;
                    this.isLoading = false;
                });
            },

            search() {
                if (this.q.trim().length < 1) {
                    this.reset();
                    this.getCases();
                    return;
                }

                this.searchAction = true;
                this.isLoading = true;
                axios.get(`${window.host}/api/cases/search?q=${this.q}`)
                .then(response => {
                    this.casesList = [];
                    this.page = 0;
                    if (response.data.cases) {
                        let cases = response.data.cases;

                        if (typeof cases === "object")
                            cases = Object.keys(cases).map(key => cases[key]);

                        cases.forEach(c => {
                            this.casesList.push(c);
                        });
                        // this.casesList = response.data.cases;
                    }
                    this.cases = this.casesList;

                    if (this.cases.length < 1)
                        this.message = "No cases found!";
                    this.isLoading = false;
                })
                .catch(e => {
                    console.error(e);
                    this.isLoading = false;
                });
            },

            filterCases () {
                var vm = this
                this.cases = this.casesList.filter(function (item) {
                    let q = vm.filterQuery.trim().toLowerCase();
                    return item.title.toLowerCase().includes(q) || item.type.toLowerCase().includes(q) || item.judge.name.toLowerCase().includes(q) || item.agency.name.toLowerCase().includes(q) || item.status.toLowerCase().includes(q);
                        // return item.title.toLowerCase().indexOf(q) !== -1;
                });

                if (this.cases.length < 1)
                    this.message = "No cases found!";
            },

            reset() {
                this.casesList = [];
                this.cases = [];
                this.page = 0;
            }
        }
	};
</script>

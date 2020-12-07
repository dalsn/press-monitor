<template>
	<section class="pt-4 lg:pt-12">
		<div class="pb-5 mb-2 md:mb-16 mx-auto w-11/12 py-6 lg:py-1">
            <p class="flex text-xl md:text-2xl text-transpurple mb-2 md:mb-4">
                <CalendarIcon class="md:mt-1 mr-2" /> <span>Upcoming Corruption Cases</span>
            </p>
            <div class="pt-5 pb-2">
                <div class="mx-auto">
                    <form method="GET" class="mb-4">
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
                    <div class="flex flex-col lg:grid grid-cols-3 gap-4 mb-4">
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
                                />
                            </label>
                        </div>
                        <div class="h-full flex bg-white rounded-lg shadow-md">
                            <label for="search-dropdown" class="flex w-full items-center">
                                <select
                                    id="search-dropdown"
                                    class="h-12 w-full mx-2 focus:outline-none" placeholder="Filter by state"
                                >
                                    <option value="">Filter by state</option>
                                    <option value="">Kaduna</option>
                                    <option value="">Adamawa</option>
                                </select>
                            </label>
                        </div>
                        <div class="h-full flex bg-white rounded-lg shadow-md">
                            <label for="search-dropdown" class="flex w-full items-center">
                                <select
                                    id="search-dropdown"
                                    class="h-12 w-full mx-2 focus:outline-none" placeholder="Filter by state"
                                >
                                    <option value="">Filter by agency</option>
                                    <option value="">EFCC</option>
                                    <option value="">ICPC</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <!-- <div class="h-full flex bg-white rounded-lg justify-between items-center shadow-md">
                        <label
                            for="search-text"
                            class="flex w-full items-center mx-2 px-2"
                        >
                            <input
                                id="search-text"
                                class="h-12 focus:outline-none w-full"
                                type="text"
                                placeholder="Filter by name"
                            />
                        </label>
                    </div> -->
                </div>
            </div>
            <div class="section pt-3">
                <div class="w-full">
                    <table class="table w-full">
                        <thead class="bg-light">
                            <tr class="text-left">
                                <th width="25%">Accused Person/Defendant</th>
                                <th width="20%">Alleged Offence</th>
                                <th width="30%">Presiding Judge and Designated Court</th>
                                <th width="10%">Prosecuting Agency</th>
                                <th width="15%">Date of Sitting</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-md">
                                <td class="bg-hero lg:hidden p-4 text-md">Bello Bello <span>(Test 1)</span> </td>
                                <td class="hidden lg:block">Sani Sani <span>(Testing)</span> Fmr MD</td>
                                <td data-th="Alleged Offence">
                                    $400,000
                                    <br >
                                    Money Laundering
                                </td>
                                <td data-th="Presiding Judge and Designated Court">Judge and Court and some other long</td>
                                <td data-th="Prosecuting Agency">Agency</td>
                                <td data-th="Date of Sitting">Date</td>
                            </tr>
                            <tr class="text-md">
                                <td class="bg-hero lg:hidden p-4 text-md">Bello Bello <span>(Test 1)</span> </td>
                                <td class="hidden lg:block">Sani Sani <span>(Testing)</span> Fmr MD</td>
                                <td data-th="Alleged Offence">
                                    $400,000
                                    <br >
                                    Money Laundering
                                </td>
                                <td data-th="Presiding Judge and Designated Court">Judge and Court and some other long</td>
                                <td data-th="Prosecuting Agency">Agency</td>
                                <td data-th="Date of Sitting">Date</td>
                            </tr>
                            <tr class="text-md">
                                <td class="bg-hero lg:hidden p-4 text-md">Bello Bello <span>(Test 1)</span> </td>
                                <td class="hidden lg:block">Sani Sani <span>(Testing)</span> Fmr MD</td>
                                <td data-th="Alleged Offence">
                                    $400,000
                                    <br >
                                    Money Laundering
                                </td>
                                <td data-th="Presiding Judge and Designated Court">Judge and Court and some other long</td>
                                <td data-th="Prosecuting Agency">Agency</td>
                                <td data-th="Date of Sitting">Date</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- <div class="section pt-3 no-records">
                <h4>No records Available</h4>
            </div> -->
            <div class="mt-4 algolia flex justify-end">
                <img alt="Search by Algolia" src="../assets/images/vectors/search-by-algolia.svg" class="h-4">
            </div>
        </div>
		<Footer className="bg-hero" />
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

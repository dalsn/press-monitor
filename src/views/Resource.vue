<template>
	<section class="pt-4 lg:pt-12">
		<div class="pb-5 mb-2 md:mb-16 mx-auto px-2 md:px-10 xl:px-16 py-6 lg:py-1">
            <div class="flex text-xl md:text-2xl text-transpurple mb-6">
                <ArchiveIcon class="md:mt-1 mr-2" /> <strong>Archives</strong> <span class="pl-2"><small> - Download</small> </span>
            </div>
            <div class="py-2">
                <p class="text-lg mb-8"><strong>Corruption Cases Database</strong></p>
                <a class="py-3 px-8 shadow-md rounded-lg hover:shadow-lg hover:bg-white hover:text-transpurple bg-transpurple text-white" href="#">Download CSV</a>
            </div>
            <hr class="my-8">
            <div class="py-2" id="acja-table">
                <p class="text-lg text-transpurple font-semibold pb-2"><strong>Administration of Criminal Justice Act/Laws</strong></p>
                <!-- <div class="">
                    <h6>No files available for download</h6>
                </div> -->
                <div class="pt-5 pb-2">
                    <div class="mx-auto">
                        <div class="flex flex-col mb-4">
                            <label>Search</label>
                            <div class="h-full flex bg-white rounded-lg justify-between items-center shadow-md lg:w-1/3">
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
                        </div>
                    </div>
                </div>
                <table class="table w-full" id="acja">
                    <thead class="bg-light">
                        <tr class="text-left">
                            <th>Document</th>
                            <th width="20%">File size</th>
                            <th width="20%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="pagination"></div>
            </div>
            <!-- <div class="section pt-3 no-records">
                <h4>No records Available</h4>
            </div> -->
            <hr class="my-8">
            <div class="py-2" id="acja-table">
                <p class="text-lg text-transpurple font-semibold pb-2"><strong>Judgments</strong></p>
                <!-- <div class="">
                    <h6>No files available for download</h6>
                </div> -->
                <div class="pt-5 pb-2">
                    <div class="mx-auto">
                        <div class="flex flex-col mb-4">
                            <label>Search</label>
                            <div class="h-full flex bg-white rounded-lg justify-between items-center shadow-md lg:w-1/3">
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
                        </div>
                    </div>
                </div>
                <table class="table w-full" id="acja">
                    <thead class="bg-light">
                        <tr class="text-left">
                            <th>Document</th>
                            <th width="20%">File size</th>
                            <th width="20%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-hero">Bauchi ACJA</td>
                            <td data-th="File size">25 MB</td>
                            <td data-th="Action">
                                <a class="flex flex-row" target="_blank" rel="noreferrer noopener" href="#" download>
                                    <DownloadCloudIcon class="mr-3" /> Download
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="pagination"></div>
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
		},
        mounted() {
            // $(document).ready( function () {

            //     let acja = $('#acja').DataTable({
            //         "dom": 'rtp',
            //         "pageLength": 5
            //     });
            //     let judg = $('#judg').DataTable({
            //         "dom": 'rtp',
            //         "pageLength": 5
            //     });

            //     $('#filterAcja').on( 'keyup', function () {
            //         acja.search( this.value ).draw();
            //     });

            //     $('#filterJudg').on( 'keyup', function () {
            //         judg.search( this.value ).draw();
            //     });
            // })
        }
	};
</script>

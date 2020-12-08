<template>
	<section>
		<div class="bg-hero pt-16 pb-8 md:pt-24">
			<div class="lg:mx-32 px-4 mb-16">
				<div class="mb-3">
					<h1 class="text-3xl font-bold font-transpurple mb-4">Contact</h1>
					<div class="flex flex-row mb-3">
						<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TransparencITng" class="text-link" data-toggle="tooltip" data-original-title="Follow us">
							<TwitterIcon />
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://facebook.com/TransparencITng" class="ml-3 text-link" data-toggle="tooltip" data-original-title="Follow us">
							<FacebookIcon />
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/TransparencITng" class="ml-3 text-link" data-toggle="tooltip" data-original-title="Follow us">
							<InstagramIcon />
						</a>
					</div>
				</div>
				<div class="md:grid grid-col-2">
					<div class="mb-4">
						<p>
							Suite 1, 1st Floor, Hamza Zayyad House <br>No. 4, Muhammadu Buhari Way, Kaduna <br> Nigeria
						</p>
					</div>
					<div class="">
						<p class="">
							info@corruptioncases.ng<br>
							+234 (0) 704 141 0707
						</p>
					</div>
				</div>
				<div class="md:grid grid-cols-2 mt-12">
					<div class="">
						<h4 class="text-2xl leading-tight mb-2">
							Tracking Corruption Cases
						</h4>
						<p class="text-justify">
							This is a project of <a class="text-link" href="http://transparencit.com" target="_blank" rel="noreferrer noopener">TransparencIT</a> funded and supported by <a class="text-link" href="http://trustafrica.org" target="_blank" rel="noreferrer noopener">TrustAfrica</a> to monitor corruption cases in Nigeria to ensure compliance, reduce delays, improve efficiency and achieve speedy conclusion of trials.
						</p>
					</div>
					<div class="mt-8 md:mt-0">
						<div class="w-full md:pl-12 mb-8">
							<p class="text-lg">Newsletter Signup</p>
							<form action="#" method="GET">
								<div class="h-full flex bg-white rounded-lg justify-between items-center shadow-md">
									<label
										for="search-text"
										class="flex w-2/3 items-center ml-2"
									>
										<input
											id="search-text"
											class="h-12 focus:outline-none pl-1 w-full"
											type="email"
											placeholder="Enter your email"
										/>
									</label>
									<div class="w-1/3 px-2">
										<button
											type="submit"
											class="px-4 text-white rounded bg-transpurple focus:outline-none text-sm w-full py-2"
										>
											Join
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="pt-8 pb-16 px-4">
			<div class="mx-auto md:w-5/6 lg:w-2/3">
				<h5 class="text-lg md:text-xl text-center py-3">Send us a message, we would respond within 24hrs</h5>
			</div>
			<div class="md:w-5/6 lg:w-2/3 mx-auto">
				<div class="shadow-lg bg-light rounded">
					<div class="p-4 md:p-8">
						<form method="POST" action="#">
							<div class="md:grid grid-cols-2 gap-4 mb-4">
								<div>
									<label for="name">Name</label>
									<div class="flex mb-4 bg-white rounded justify-between items-center shadow-md">
										<label
											for="name"
											class="flex w-full items-center m-2"
										>
											<input
												id="name"
												class="h-8 focus:outline-none pl-1 w-full"
												type="text"
												placeholder="Enter your name"
											/>
										</label>
									</div>
								</div>
								<div>
									<label for="email">Email</label>
									<div class="flex mb-4 bg-white rounded justify-between items-center shadow-md">
										<label
											for="email"
											class="flex w-full items-center m-2"
										>
											<input
												id="email"
												class="h-8 focus:outline-none pl-1 w-full"
												type="email"
												placeholder="Enter your email"
											/>
										</label>
									</div>
								</div>
							</div>
							<label for="subject">Subject</label>
							<div class="flex mb-4 bg-white rounded justify-between items-center shadow-md">
								<label
									for="subject"
									class="flex w-full items-center m-2"
								>
									<input
										id="subject"
										class="h-8 focus:outline-none pl-1 w-full"
										type="text"
										placeholder="Enter the subject"
									/>
								</label>
							</div>
							<label for="message">Message</label>
							<div class="flex bg-white rounded justify-between items-center shadow-md">
								<label
									for="message"
									class="flex w-full items-center m-2"
								>
									<textarea rows="3" placeholder="Enter your message..." name="message" id="message" value="" class="w-full focus:outline-none py-2 px-1"></textarea>
								</label>
							</div>
							<button type="submit" class="w-full mt-4 p-2 bg-transpurple text-white rounded shadow-md hover:shadow-lg">Send</button>
						</form>
					</div>
				</div>
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


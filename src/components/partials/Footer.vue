<template>
  <footer class="bg-hero">
      <div
        class="pt-16 pb-8 px-4 md:px-8 flex flex-row flex-wrap"
      >
        <div class="w-full md:px-4 mb-8 md:w-1/2 lg:w-1/3">
          <p class="text-xl md:text-2xl mb-2">Tracking Corruption Cases</p>
          <p class="text-sm text-justify">
            This is a project of <a href="http://transparencit.com" target="_blank" rel="noreferrer noopener">TransparencIT</a> funded and supported by <a href="http://trustafrica.org" target="_blank" rel="noreferrer noopener">TrustAfrica</a> to monitor corruption cases in Nigeria to ensure compliance, reduce delays, improve efficiency and achieve speedy conclusion of trials.
          </p>
        </div>
        <div class="w-full md:px-4 mb-8 md:w-1/2 lg:w-1/3">
          <p class="text-sm">Newsletter Signup</p>
          <form action="#" method="GET">
            <div class="h-full flex bg-white rounded-lg justify-between items-center">
              <label
                for="search-text"
                class="flex w-2/3 items-center ml-2"
              >
                <input
                  id="search-text"
                  class="h-12 focus:outline-none pl-1 w-full"
                  type="text"
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
        <div class="w-full md:px-4 lg:w-1/3">
          <h4 class="text-2xl mb-2">Contact</h4>
          <div class="flex flex-row mb-3">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TransparencITng" class="" data-toggle="tooltip" data-original-title="Follow us">
              <TwitterIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/TransparencITng" class="ml-3" data-toggle="tooltip" data-original-title="Follow us">
              <FacebookIcon />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/TransparencITng" class="ml-3" data-toggle="tooltip" data-original-title="Follow us">
              <InstagramIcon />
            </a>
          </div>
          <div class="flex flex-col text-sm md:text-md">
            <div class="w-full mb-4">
              <p>Suite 1, 1st Floor, Hamza Zayyad House <br>No. 4, Muhammadu Buhari Way, Kaduna <br> Nigeria</p>
            </div>
            <div class="w-full">
              <p class="">
                info@corruptioncases.ng<br>
                +234 (0) 704 141 0707
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex bg-transpurple h-8 justify-center items-center">
        <p class="text-white text-sm">Copyright {{year}}</p>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style scoped></style>

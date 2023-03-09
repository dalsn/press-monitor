<template>
  <footer class="" :class="className">
    <div
      class="pt-8 pb-8 px-2 flex flex-row flex-wrap md:px-10 xl:px-16 justify-between"
    >
      <div class="w-full mb-8 md:w-1/2 lg:w-1/3">
        <p class="text-xl md:text-2xl mb-2">Press Freedom Monitor</p>
        <!-- <div class="logo mb-2">
          <router-link to="/">
            <img
              class="h-10 md:h-12"
              src="../../assets/images/pfm-logo.png"
              alt="Press Freedom Monitor logo"
            />
          </router-link>
        </div> -->
        <p class="text-sm text-justify">
          This is a project of
          <a
            class="text-link"
            href="//transparencit.com"
            target="_blank"
            rel="noreferrer noopener"
            >TransparencIT</a
          >
          that monitors and documents incidents of attack, arrest, detention and trial of journalists or citizen bloggers reporting around Nigeria's 2023 elections
        </p>
      </div>
      <div class="w-full md:pl-16 md:mt-1 mb-8 md:w-1/2 lg:w-1/3">
        <p class="text-sm mb-2">Get more information on press freedom in Nigeria</p>
        <form action="#" method="POST" @submit.prevent="subscribe">
          <div
            class="h-full flex bg-white rounded-lg justify-between items-center shadow-md"
          >
            <label for="search-text" class="flex w-2/3 items-center ml-2">
              <input
                v-model="email"
                id="search-text"
                class="h-12 focus:outline-none pl-1 w-full"
                type="email"
                placeholder="Sign up with your email"
                required
              />
            </label>
            <div class="w-1/3 px-2">
              <button
                type="submit"
                class="px-4 text-white rounded bg-transpurple focus:outline-none text-sm w-full py-2"
                :disabled="isLoading"
              >
                {{ isLoading ? "Subscribing..." : "Join" }}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="w-full lg:w-1/3 lg:pl-16">
        <h4 class="text-2xl mb-2">Contact</h4>
        <div class="flex flex-row mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/TransparencITng"
            class="text-link"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <TwitterIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/TransparencITng"
            class="ml-3 text-link"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <FacebookIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/TransparencITng"
            class="ml-3 text-link"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <InstagramIcon />
          </a>
        </div>
        <div class="flex flex-col text-sm md:text-md">
          <div class="w-full mb-4">
            <p>
              Suite 1, 1st Floor, Hamza Zayyad House <br />No. 4, Muhammadu
              Buhari Way, Kaduna <br />
              Nigeria
            </p>
          </div>
          <div class="w-full">
            <p class="">
              info@transparencit.com<br />
              +234 (0) 704 141 0707
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex bg-transpurple h-8 justify-center items-center">
      <p class="text-white text-sm">Copyright {{ year }}</p>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",
  props: ["className"],
  data() {
    return {
      email: "",
      year: new Date().getFullYear(),
      host_url: `${window.host}`,
      isLoading: false
    };
  },
  methods: {
    subscribe() {
      this.isLoading = true;
      axios
        .post(this.host_url + "/api/subscribe", {
          email: this.email
        })
        .then(response => {
          if (response.data) {
            window.toastr.success(response.data.message);
            this.email = "";
          }
          this.isLoading = false;
        })
        .catch(error => {
          window.toastr.error(error.response.data.message);
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>

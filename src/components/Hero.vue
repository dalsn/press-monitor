<template>
  <header class="h-auto font-serif">
    <div
      class="md:pb-12 md:pt-59 px-2 md:px-10 xl:px-16 bg-hero relative overflow-y-hidden"
    >
      <div class="text pt-10 md:pt-8 lg:pt-5 lg:mb-24 text-left">
        <h1
          class="font-semibold md:leading-58 text-transpurple text-4xl"
        >
          Fostering Vibrant Civic Space in Nigeria
        </h1>
        <p class="text-xl md:text-2xl text-transgray200 pt-5">
          The dashboard monitors and documents incidents of violations of freedoms and<br class="hidden md:block" /> rights of activists, journalists, and citizens to amplify voices, provide insights,<br class="hidden md:block" /> and mobilize against the shrinking civic space.
        </p>
      </div>
      <div class="form-group h-50 rounded-lg mt-10 md:mt-66">
        <form @submit.prevent="search">
          <div class="h-full flex bg-white rounded-lg shadow-md">
            <label
              for="search-text"
              class="flex w-1/2 items-center border-r ml-2 md:px-5 md:py-4"
            >
              <div class="svg-container w-2 p-2">
                <svg
                  viewBox="0 0 24 24"
                  class="svg-content"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.1355 23.2847L19.0688 17.9977C20.4941 16.1059 21.3518 13.7257 21.3518 11.1389C21.3518 4.997 16.5627 0 10.6766 0C4.78908 0 0 4.997 0 11.1389C0 17.2795 4.78908 22.2765 10.6766 22.2765C12.9829 22.2765 15.1155 21.4996 16.8637 20.1973L21.9783 25.5349C22.2765 25.8454 22.6664 26 23.0576 26C23.4475 26 23.8373 25.8454 24.1355 25.5349C24.7306 24.9139 24.7306 23.9071 24.1355 23.2847ZM3.0491 11.139C3.0491 6.75205 6.47162 3.18315 10.6766 3.18315C14.8816 3.18315 18.3014 6.75205 18.3014 11.139C18.3014 15.5259 14.8816 19.0934 10.6766 19.0934C6.47162 19.0934 3.0491 15.5259 3.0491 11.139Z"
                    fill="#BFC5D2"
                  />
                </svg>
              </div>
              <input
                v-model="q"
                class="h-12 focus:outline-none pl-1 md:pl-3 w-full"
                type="text"
                placeholder="Search incidents database"
              />
            </label>
            <label for="search-dropdown" class="flex w-1/2 items-center ml-2">
              <div class="svg-container w-2 p-2">
                <svg
                  viewBox="0 0 24 24"
                  class="svg-content"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm14 14.395l4-1.714V5.033l-4 1.714v12.648zm-2-.131V6.736l-4-2v12.528l4 2zm-6-2.011V4.605L4 6.319v12.648l4-1.714z"
                    fill="#BFC5D2"
                  />
                </svg>
              </div>
              <select
                v-model="state"
                class="h-12 w-full mx-2 focus:outline-none"
              >
                <option value="">Search all states</option>
                <option
                  v-for="(state, key) in states"
                  :key="key"
                  :value="state.name"
                  >{{ state.name }}</option
                >
              </select>
            </label>
            <div
              class="hidden md:flex md:w-4/12 md:p-4 xl:w-3/12 xl:py-5 xl:px-4"
            >
              <button
                type="submit"
                class="z-10 text-white rounded-searchbutton bg-transpurple leading-24 focus:outline-none text-xl font-transsemibold w-full h-full"
              >
                Search
              </button>
            </div>
          </div>
          <div class="my-3 h-full md:hidden">
            <button
              type="submit"
              class="text-white rounded-lg bg-transpurple focus:outline-none font-transsemibold w-full h-10"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <!-- <div class="svg-container"> -->
      <!-- <img
        class="z-0 hidden md:block absolute md:w-2/5 right-0 bottom-0"
        src="@/assets/svg/heroill.svg"
        alt=""
      /> -->
      <!-- </div> -->
    </div>
  </header>
</template>

<script>
import axios from "axios";

export default {
  name: "Hero",
  data() {
    return {
      states: [],
      state: "",
      q: ""
    };
  },
  mounted() {
    this.getStates();
  },
  methods: {
    getStates() {
      axios.get(`${window.host}/api/states`).then(response => {
        if (response.data) {
          this.states = response.data;
        }
      });
    },
    search() {
      this.$router.push(`/incidents?state=${this.state}&q=${this.q}`);
    }
  }
};
</script>

<style scoped lang="scss">
header {
  form {
    input[type="text"] {
      &:focus {
        @apply outline-none;
        //border: 3px solid #070241;
      }

      &::placeholder {
        color: #b2b8c4;
      }
    }

    select {
      &:focus {
        @apply outline-none;
        //border: 3px solid #070241;
      }
    }
  }
}
.svg-container {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: hidden;

  .svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>

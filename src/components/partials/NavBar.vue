<template>
  <nav
    class="bg-transpurple py-2 px-2 md:px-10 xl:px-16 overflow-x-hiddens shadow-xl"
  >
    <div class="lg:flex justify-between items-center">
      <div class="w-full top-menu flex justify-between items-center">
        <div class="logo p-1">
          <router-link to="/">
            <img
              class="h-12 md:h-20"
              src="../../assets/images/ccdlogo_white.png"
              alt="Corruption Cases Database logo"
            />
          </router-link>
        </div>
        <HamburgerIcon
          class="z-20 cursor-pointer block lg:hidden"
          :status="isNavOpen"
          @setNav="isNavOpen = !isNavOpen"
        />
      </div>
      <div
        :class="isNavOpen ? 'block' : 'hidden'"
        class="nav-links w-full mt-5 lg:mt-0  lg:flex flex-grow lg:items-center lg:w-auto font-sans text-white "
      >
        <router-link
          to="/"
          class="block lg:w-24 xl:w-32 lg:inline-block mb-5 py-2 lg:mb-0  text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer"
        >
          <span @click="isNavOpen = false">Home</span>
        </router-link>
        <router-link
          to="/cases"
          class="block lg:w-24 xl:w-32 lg:inline-block mb-5 py-2 lg:mb-0  text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer"
        >
          <span @click="isNavOpen = false">Cases</span>
        </router-link>
        <router-link
          to="/cause-list"
          class=" block lg:w-24 xl:w-32 lg:inline-block mb-5 py-2 lg:mb-0  text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer"
        >
          <span @click="isNavOpen = false">Cause List</span>
        </router-link>
        <a
          :href="portal_url"
          class="links block lg:w-24 xl:w-32 lg:inline-block mb-5 py-2 lg:mb-0 text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer"
        >
          <span @click="isNavOpen = false">Data Portal</span>
        </a>
        <router-link
          to="/resources"
          class=" block lg:w-24 xl:w-32 lg:inline-block mb-5 py-2 lg:mb-0 text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer"
        >
          <span @click="isNavOpen = false">Resources</span>
        </router-link>
        <router-link
          to="/about"
          class="block lg:w-24 xl:w-32 lg:inline-block mb-5 py-2 lg:mb-0  text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer"
        >
          <span @click="isNavOpen = false">About Us</span>
        </router-link>
        <!-- <router-link
          to="/contact-us"
          class="links block lg:w-24 xl:w-32 lg:inline-block mb-5 py-2 lg:mb-0 text-base md:text-lg lg:text-base leading-19 text-center cursor-pointer"
        >
          Contact Us
        </router-link> -->
      </div>
    </div>
  </nav>
</template>

<script>
import HamburgerIcon from "@/components/UIElements/HamburgerIcon";
export default {
  name: "NavBar",
  components: {
    HamburgerIcon
  },
  data() {
    return {
      isNavOpen: false,
      portal_url: window.portal
    };
  }
};
</script>

<style scoped lang="scss">
img {
  max-width: inherit;
}
</style>

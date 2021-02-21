<template>
  <svg
    width="40"
    height="40"
    :class="{ 'text-eatizgray': status === true }"
    class="fill-current z-50"
    viewBox="0 0 100 80"
    xmlns="http://www.w3.org/2000/svg"
    @click="updateNavStatus"
  >
    <g id="Hamburger">
      <rect
        y="10"
        width="100"
        height="5"
        :class="{
          'bar-one gray': status === true,
          'css-1gyiezd': status === false
        }"
      ></rect>
      <rect
        :class="{ 'bar-two gray': status === true }"
        y="30"
        width="100"
        height="5"
        class="css-1b5twje"
        fill="#f8f8f9"
      ></rect>
      <rect
        y="50"
        :class="{
          'bar-three gray': status === true,
          'css-ppgaya': status === false
        }"
        width="100"
        height="5"
      ></rect>
      <rect
        :class="{ 'bar-two gray': status === true }"
        y="70"
        width="100"
        height="5"
        class="css-1b5twje"
        fill="#f8f8f9"
      ></rect>
    </g>
  </svg>
</template>

<script>
export default {
  name: "HamburgerIcon",
  props: {
    status: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    updateNavStatus() {
      const variable = this.status;
      this.$emit("setNav", variable);
    }
  }
};
</script>

<style scoped lang="scss">
svg {
  .bar-one {
    fill: rgb(248, 248, 249);
    display: block;
    background-color: red;
    transform-origin: 50% 50%;
    transform: rotate(-45deg) translateY(25px);
    transition: transform 0.3s ease 0s;
  }
  .bar-two {
    fill: rgb(248, 248, 249);
    display: block;
    transform-origin: 50% 50%;
    transform: scaleX(0);
    transition: transform 0.3s ease 0s;
  }

  .bar-three {
    fill: rgb(248, 248, 249);
    display: block;
    transform-origin: 50% 50%;
    transform: rotate(45deg) translateY(-15px);
    transition: transform 0.3s ease 0s;
  }
  .css-1gyiezd {
    fill: rgb(248, 248, 249);
    display: block;
    transform-origin: 50% 50%;
    transform: rotate(0deg) translateY(0px);
    transition: transform 0.3s ease 0s;
  }
  .css-ppgaya {
    fill: rgb(248, 248, 249);
    display: block;
    transform-origin: 50% 50%;
    transform: rotate(0deg) translateY(0px);
    transition: transform 0.3s ease 0s;
  }
  .bar-one.gray,
  .bar-two.gray,
  .bar-three.gray {
    fill: #f8f8f9 !important;
  }
}
</style>

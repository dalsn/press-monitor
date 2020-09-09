<template>
  <svg
    width="25px"
    height="23px"
    :class="{ 'text-eatizgray': status === true }"
    class="fill-current z-50"
    viewBox="0 0 25 23"
    xmlns="http://www.w3.org/2000/svg"
    @click="updateNavStatus"
  >
    <g id="Hamburger">
      <rect
        x="0"
        y="0"
        width="25"
        height="3"
        :class="{
          'bar-one gray': status === true,
          'css-1gyiezd': status === false
        }"
        class=""
      ></rect>
      <rect
        :class="{ 'bar-two gray': status === true }"
        x="8"
        y="10"
        width="17"
        height="3"
        class="css-1b5twje"
        fill="#f8f8f9"
      ></rect>
      <rect
        x="0"
        y="20"
        :class="{
          'bar-three gray': status === true,
          'css-ppgaya': status === false
        }"
        width="25"
        height="3"
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
    transform: rotate(-45deg) translateY(10px);
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
    transform: rotate(45deg) translateY(-10px);
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

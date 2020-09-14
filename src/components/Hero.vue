<template>
  <header
    class="bg-hero relative font-serif pt-59 md:pb-12 pl-16 overflow-y-hidden"
  >
    <div class="text pt-5 md:pt-8 lg:pt-5 text-center md:text-left ">
      <h1
        class="font-bold leading-loose md:leading-58 text-transpurple text-2xl md:text-5xl"
      >
        Find Information on
      </h1>
      <h1
        class="font-bold leading-loose md:leading-58 text-transpurple text-2xl md:text-5xl"
      >
        Corruption Cases in Nigeria
      </h1>
      <p class="text-17 leading-28  text-transgray200 pt-5">
        This is a central database to find details of ongoing and decided
        corruption
      </p>
      <p class="text-17 leading-28 text-transgray200">
        cases in the country with simplified infographics.
      </p>
    </div>
    <div class="form-group h-88 rounded-lg mt-66 w-7/12">
      <form class="h-full flex grids grid-cols-12 bg-white rounded-lg" action="">
          <label for="search-text" class=" flex w-6/12 items-center  pl-22 pr-5 pt-29 pb-29  border-r ">
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              class="absolute "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.1355 23.2847L19.0688 17.9977C20.4941 16.1059 21.3518 13.7257 21.3518 11.1389C21.3518 4.997 16.5627 0 10.6766 0C4.78908 0 0 4.997 0 11.1389C0 17.2795 4.78908 22.2765 10.6766 22.2765C12.9829 22.2765 15.1155 21.4996 16.8637 20.1973L21.9783 25.5349C22.2765 25.8454 22.6664 26 23.0576 26C23.4475 26 23.8373 25.8454 24.1355 25.5349C24.7306 24.9139 24.7306 23.9071 24.1355 23.2847ZM3.0491 11.139C3.0491 6.75205 6.47162 3.18315 10.6766 3.18315C14.8816 3.18315 18.3014 6.75205 18.3014 11.139C18.3014 15.5259 14.8816 19.0934 10.6766 19.0934C6.47162 19.0934 3.0491 15.5259 3.0491 11.139Z"
                fill="#BFC5D2"
              />
            </svg>

            <input
              id="search-text"
              type="text"
              class="search-text  h-full focus:outline-none pl-3  ml-5 w-full text-15"
              placeholder="Search by case name, crime etc"
            />
          </label>
          <label for="search-dropdown" class="flex items-center  w-4/12 pl-6 pr-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              class="mr-5"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm14 14.395l4-1.714V5.033l-4 1.714v12.648zm-2-.131V6.736l-4-2v12.528l4 2zm-6-2.011V4.605L4 6.319v12.648l4-1.714z"
                fill="#BFC5D2"
              />
            </svg>
            <select
              class=" focus:outline-none bg-white w-full focus:shadow-outline focus:border focus:border-blue-700"
              id="search-dropdown"
            >
              <option value="">Abia</option>
              <option value="">Adamawa</option>
            </select>
          </label>
         <div class="w-3/12 pt-5 pb-5 px-4">
           <button type="submit" class=" text-white rounded-searchbutton bg-transpurple leading-24 focus:outline-none text-xl font-transsemibold w-full h-full">Search</button>
         </div>
      </form>
    </div>
    <svg width="609" height="461" class="absolute right-0 top-0 mt-4" viewBox="0 0 609 461" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-83" width="1075" height="1075">
        <path d="M537.223 991.178L1074.18 454.223L537.223 -82.7326L0.267327 454.223L537.223 991.178Z" fill="white"/>
      </mask>
      <g mask="url(#mask0)">
        <path d="M891.074 503.807C891.074 503.807 931.588 226.196 650.483 119.311" stroke="#36CFFF" stroke-width="48.7898" stroke-linecap="round"/>
        <path d="M177.775 404.593C177.775 404.593 132.423 681.455 411.62 793.23" stroke="#45D9BE" stroke-width="35.707" stroke-linecap="round"/>
        <path d="M195.621 405.9C194.249 415.664 185.221 422.467 175.456 421.095C165.692 419.722 158.889 410.694 160.261 400.93C161.634 391.166 170.662 384.363 180.426 385.735C190.19 387.107 196.993 396.135 195.621 405.9Z" fill="black" fill-opacity="0.16"/>
        <path d="M586.085 96.1507C586.085 96.1507 309.224 50.798 197.449 329.995" stroke="#48484C" stroke-width="35.707" stroke-linecap="round"/>
        <path d="M584.779 113.996C575.014 112.624 568.211 103.596 569.584 93.8317C570.956 84.0674 579.984 77.2644 589.748 78.6367C599.512 80.0089 606.316 89.0369 604.943 98.8012C603.571 108.565 594.543 115.368 584.779 113.996Z" fill="black" fill-opacity="0.16"/>
        <path d="M290.804 317.013C290.804 317.013 186.089 491.347 338.356 653.09" stroke="#612DF7" stroke-width="35.707" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M303.252 304.414C296.279 297.442 284.975 297.442 278.003 304.414C271.031 311.386 271.031 322.691 278.003 329.663C284.975 336.635 296.279 336.635 303.252 329.663C310.224 322.691 310.224 311.386 303.252 304.414Z" fill="black" fill-opacity="0.16"/>
        <path d="M674.433 207.804C674.433 207.804 500.099 103.089 338.356 255.356" stroke="#36CFFF" stroke-width="35.707" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M783.642 591.433C783.642 591.433 888.357 417.099 736.09 255.356" stroke="#612DF7" stroke-width="48.7898" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M740.913 481.174C740.913 481.174 725.439 621.559 584.184 654.17" stroke="#612DF7" stroke-width="48.7898" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M334.222 427.773C334.222 427.773 349.696 287.388 490.951 254.776" stroke="#48484C" stroke-width="35.707" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M495.501 272.159C505.109 269.941 511.099 260.354 508.881 250.747C506.663 241.139 497.076 235.149 487.469 237.367C477.861 239.585 471.871 249.172 474.089 258.779C476.307 268.387 485.894 274.377 495.501 272.159Z" fill="black" fill-opacity="0.16"/>
        <path d="M564.27 250.632C564.27 250.632 704.655 266.106 737.267 407.361" stroke="#92909E" stroke-width="48.7898" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M507.187 657.627C507.187 657.627 367.095 639.717 336.952 497.903" stroke="#36CFFF" stroke-width="48.7898" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>

  </header>
</template>

<script>
export default {
  name: "Hero"
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
</style>

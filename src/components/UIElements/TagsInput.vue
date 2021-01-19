<template>
  <vue-tags-input
    :class="className"
    :only-existing-tags="true"
    :add-tags-on-comma="true"
    :add-tags-on-blur="true"
    :typeahead="true"
    typeahead-style="dropdown"
    :typeahead-url="url"
  >
  </vue-tags-input>
</template>

<script>
import VueTagsInput from "@voerro/vue-tagsinput";

export default {
  name: "TagsInput",
  props: ["url", "className"],
  components: {
    VueTagsInput
  }
};
</script>

<style scoped></style>

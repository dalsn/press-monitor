<script>
import { HorizontalBar } from "vue-chartjs";
export default {
  name: "HorizontalBar.vue",
  extends: HorizontalBar,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style scoped></style>

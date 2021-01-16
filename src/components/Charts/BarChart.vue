<script>
import { Bar } from "vue-chartjs";
export default {
  name: "BarChart.vue",
  extends: Bar,
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
  watch: {
    chartdata: {
      handler: function(val) {
        this.renderChart(val, this.options);
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style scoped></style>

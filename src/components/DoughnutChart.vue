<script lang='ts'>
import {
  Component,
  Mixins,
  Prop,
} from 'vue-property-decorator';
import { Doughnut, mixins } from 'vue-chartjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
})
export default class DoughnutChart extends Mixins(Doughnut) {
  @Prop(Object)
  readonly chartData!: ChartData;

  @Prop(Object)
  readonly options!: ChartOptions;

  mounted() {
    this.addPlugin(ChartDataLabels);
    this.renderChart(this.chartData, this.options);
  }
}
</script>

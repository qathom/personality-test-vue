<script lang='ts'>
import {
  Component,
  Mixins,
  Prop,
} from 'vue-property-decorator';
import { Doughnut, mixins } from 'vue-chartjs';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
})
export default class DoughnutChart extends Mixins(Doughnut) {
  @Prop(Object)
  readonly chartData!: object

  @Prop(Object)
  readonly options!: object

  mounted() {
    this.addPlugin(ChartDataLabels);
    this.renderChart(this.chartData, this.options);
  }
}
</script>

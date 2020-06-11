<template>
  <div class="welcome">
    <h1>Personality test</h1>
    <p class="lead font-weight-normal">What is your dominant color?</p>
    <hr />
    <b-button to="/test" variant="primary">Start the test</b-button>

    <div class="mt-5">
      <versioning :version=version />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  Vue,
  Component,
  Prop,
} from 'vue-property-decorator';
import { Doughnut, mixins } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';
import Versioning from '@/components/Versioning.vue';
import { version } from '../../package.json';

@Component({
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  components: {
    Versioning,
  },
})
export default class Welcome extends Vue {
  @Prop(Object)
  readonly chartData!: ChartData;

  @Prop(Object)
  readonly options!: ChartOptions;

  private version = version;
}
</script>

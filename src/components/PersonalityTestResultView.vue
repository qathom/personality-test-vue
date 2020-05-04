<template>
  <div class="mt-3">
    <h5>Your profile</h5>
    <div class="chart-container mx-auto">
      <doughnut-chart :chart-data="chartData" :options="chartOptions" />
    </div>

    <div class="text-center mt-5">
      <h5>Your dominant color is {{dominantColor}}</h5>
      <a href="#" @click.prevent="triggerReview">Review your answers</a>
    </div>

    <b-tabs class="mt-3" content-class="pt-3" fill>
      <b-tab
        v-for="(color, index) in personalityColors"
        :key="index"
        :active="isColorDominant(color)"
      >
        <template v-slot:title>
          <span :class="`personality-test-${color.toLowerCase()}`">{{color.toUpperCase()}}</span>
        </template>
        <component :is="`${color.toLowerCase()}-meaning`" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Emit,
} from 'vue-property-decorator';
import DoughnutChart from '@/components/DoughnutChart.vue';
import RedMeaning from '@/components/PersonalityColorMeaning/Red.vue';
import BlueMeaning from '@/components/PersonalityColorMeaning/Blue.vue';
import GreenMeaning from '@/components/PersonalityColorMeaning/Green.vue';
import YellowMeaning from '@/components/PersonalityColorMeaning/Yellow.vue';
import {
  PersonalityTestResponse,
  PersonalityTestResult,
  PersonalityColor,
  TestWordGroup,
} from '../../types';

@Component({
  components: {
    DoughnutChart,
    RedMeaning,
    BlueMeaning,
    GreenMeaning,
    YellowMeaning,
  },
})
export default class PersonalityTestResultView extends Vue {
  private result: PersonalityTestResult = {
    [PersonalityColor.Red]: 0,
    [PersonalityColor.Green]: 0,
    [PersonalityColor.Blue]: 0,
    [PersonalityColor.Yellow]: 0,
  };

  private dominantColor!: PersonalityColor;

  private chartData!: object;

  private personalityColors: string[] = [];

  private chartOptions: object = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      datalabels: {
        color: '#fff',
      },
    },
  };

  @Prop({ type: Array, required: true })
  private readonly groups!: TestWordGroup[];

  @Prop({ type: Map, required: true })
  private readonly response!: PersonalityTestResponse;

  private created() {
    this.buildTestResult();
    this.fillChartData();

    this.personalityColors = Object.keys(this.result);
  }

  private isColorDominant(color: PersonalityColor) {
    return this.dominantColor === color;
  }

  private getKeyResultByOrder(): string[] {
    const keys: PersonalityColor[] = Object.keys(this.result) as PersonalityColor[];
    keys.sort((a, b) => this.result[b] - this.result[a]);
    return keys;
  }

  private buildTestResult() {
    this.response.forEach((value, key) => {
      const item = this.groups[key].find((groupItem) => groupItem.id === value);

      if (!item) {
        console.warn('Warning! No color value for group item');
        return;
      }

      const colorEnumKey: PersonalityColor = item.color;

      // eslint-disable-next-line
      this.result[colorEnumKey] += 1;
    });

    [this.dominantColor] = this.getKeyResultByOrder() as PersonalityColor[];
  }

  @Emit('review-test')
  private triggerReview(): boolean {
    /* eslint class-methods-use-this: 0 */
    return true;
  }

  private fillChartData() {
    const colors = {
      [PersonalityColor.Red]: '#FF4136',
      [PersonalityColor.Green]: '#2ECC40',
      [PersonalityColor.Blue]: '#0074D9',
      [PersonalityColor.Yellow]: '#FFDC00',
    };

    const keys: PersonalityColor[] = this.getKeyResultByOrder() as PersonalityColor[];

    this.chartData = {
      labels: keys,
      datasets: [
        {
          backgroundColor: keys.map((k: PersonalityColor) => colors[k] || '#ddd'),
          data: keys.map((k) => this.result[k]),
        },
      ],
    };
  }
}
</script>

<style lang="scss" scoped>
.chart-container {
  width: 200px;
  height: 200px;
}

.personality-test-red {
  color: #FF4136;
}

.personality-test-blue {
  color: #0074D9;
}

.personality-test-green {
  color: #2ECC40;
}

.personality-test-yellow {
  color: #FFDC00;
}
</style>

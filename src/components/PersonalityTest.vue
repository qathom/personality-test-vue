<template>
  <div class="personality-test" v-if="currentGroupNumber > -1">
    <b-progress
      :max="100"
      show-value
      class="test-progress"
    >
      <b-progress-bar
        :value="progressValue"
        :label="getProgressLabel()"
      />
    </b-progress>

    <div class="word-group-container" v-if="currentGroupNumber !== groups.length">
      <p>Select one word or phrase:</p>

      <transition-group name="list" tag="p">
        <b-button
          v-for="(item, index) in currentGroup"
          :key="`${item.id}-${index}`"
          :variant="isWordSelected(item) ? 'primary' : 'light'"
          @click.prevent="onSelectWord(item)"
          class="d-block w-100 btn-answer"
        >
          {{item.word}}
        </b-button>
      </transition-group>
    </div>

    <personality-test-result-view
      v-if="currentGroupNumber === groups.length"
      :response=selection
      :groups=groups
      v-on:review-test="onReviewTest"
    />
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Watch,
} from 'vue-property-decorator';
import {
  Getter,
  Action,
} from 'vuex-class';
import questionGroups from '@/data/test-data';
import PersonalityTestResultView from '@/components/PersonalityTestResultView.vue';
import {
  TestWordGroup,
  TestWord,
  PersonalityTestResponse,
  AddSelectionPayload,
} from '../../types';

@Component({
  components: {
    PersonalityTestResultView,
  },
})
export default class PersonalityTest extends Vue {
  @Getter('selection')
  private selection!: PersonalityTestResponse;

  @Action('setGroupNumber')
  private setGroupNumber!: (number: number) => void;

  @Action('addSelection')
  private addSelection!: (payload: AddSelectionPayload) => void;

  @Action('reset')
  private reset!: () => void;

  @Getter('groupNumber')
  private currentGroupNumber!: number;

  private currentGroup: TestWordGroup|null = null;

  private progressValue = 0;

  private readonly groups: TestWordGroup[] = questionGroups;

  private created() {
    if (this.currentGroupNumber === -1) {
      // Start new test
      this.setGroupNumber(0);
      return;
    }

    // Resume progress
    this.setProgress();
  }

  private onReviewTest() {
    this.setGroupNumber(0);
  }

  private getProgressLabel() {
    if (this.currentGroupNumber >= this.groups.length) {
      return 'Finished';
    }

    return `${this.currentGroupNumber + 1} / ${this.groups.length}`;
  }

  private setProgress() {
    this.currentGroup = this.groups[this.currentGroupNumber];
    this.progressValue = parseFloat(
      (((this.currentGroupNumber + 1) / this.groups.length) * 100).toFixed(2),
    );
  }

  private onSelectWord(item: TestWord) {
    this.addSelection({ groupdId: this.currentGroupNumber, value: item.id });

    // Go to next word group
    this.setGroupNumber(this.currentGroupNumber + 1);
  }

  isWordSelected(item: TestWord) {
    return Array.from(this.selection.values()).indexOf(item.id) > -1;
  }

  @Watch('currentGroupNumber', { immediate: false, deep: true })
  onGroupChanged() {
    this.setProgress();
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

.personality-test {
  width: 600px;
  max-width: 100%;
  background-color: $white;
  padding: $spacer * 2.5;
  margin: 0 auto;

  .btn {
    padding-top: 30px;
    padding-bottom: 30px;
    text-transform: uppercase;

    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }

  .word-group-container {
    padding: $spacer * 2 0 0 0;
  }

  .test-progress {
    height: 28px;
    font-size: $font-size-base;
  }

  .list-enter-active {
    transition: opacity 1.2s;
  }

  .list-enter {
    opacity: 0;
  }

  .list-leave,
  .list-leave-active,
  .list-leave-to {
    opacity: 0;
    position: absolute;
  }
}

</style>

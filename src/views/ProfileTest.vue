<template>
  <div class="test">
    <b-container class="test-container pt-5">
      <personality-test />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PersonalityTest from '@/components/PersonalityTest.vue';

@Component({
  components: {
    PersonalityTest,
  },
})
export default class Test extends Vue {}
</script>

<style lang="scss" scoped>
.test {
  background-color: #eee;
}

.test,
.test-container {
  min-height: 100%;
}
</style>

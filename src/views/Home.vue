<template>
  <div class="d-flex justify-content-center align-items-center">
    <b-container class="home-container text-center">
      <welcome />
    </b-container>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/Welcome.vue';

@Component({
  components: {
    Welcome,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home-container {
  padding: 60px 0;
}
</style>

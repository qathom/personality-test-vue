<template>
  <div id="app">
    <primary-navbar />
    <div id="main-container">
      <router-view/>
    </div>
  </div>
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
import PrimaryNavbar from '@/components/PrimaryNavbar.vue';

/**
 * The App component is the root component
 * It includes the style and the primary navbar so that
 * they are available everywhere
 */
@Component({
  components: {
    PrimaryNavbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/scss/app';
</style>

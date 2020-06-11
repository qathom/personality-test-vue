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
} from 'vue-property-decorator';
import Versioning from '@/components/Versioning.vue';
import { version } from '../../package.json';

/**
 * This component is showing the content of the home page view
 * It displays a link to the profile test and the version of the app
 */
@Component({
  components: {
    Versioning,
  },
})
export default class Welcome extends Vue {
  private version = version;
}
</script>

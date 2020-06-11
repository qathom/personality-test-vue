<template>
   <p>
    <small>v{{version}}</small>
  </p>
</template>
<script lang='ts'>
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

/**
 * This component is a tiny one which is used to display the app version
 */
@Component
export default class Versioning extends Vue {
  @Prop(String)
  readonly version!: string;
}
</script>

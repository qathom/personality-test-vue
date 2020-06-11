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

@Component({})
export default class Versioning extends Vue {
  @Prop(String)
  readonly version!: string;
}
</script>

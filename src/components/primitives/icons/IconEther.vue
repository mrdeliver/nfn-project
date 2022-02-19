<!-- eslint-disable max-len -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.82 45.19"
    :width="iconSize" :height="iconSize"
      >
      <g :fill="iconColor">
        <path id="Icon_awesome-ethereum" data-name="Icon awesome-ethereum" class="cls-1" d="M26.81,23,13.41,31.2,0,23,13.41,0ZM13.41,33.83,0,25.64,13.41,45.19,26.82,25.64Z"/>
      </g></svg>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'IconEther',
})
export default class IconEther extends Vue {
  @Prop({ type: Number })
  iconSize = 18;

  @Prop({ type: String })
  iconColor = 'currentColor';
}

</script>

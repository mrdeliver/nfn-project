<!-- eslint-disable max-len -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.59 42.6"
    :width="iconSize" :height="iconSize"
      >
      <g :fill="iconColor">
        <path id="Icon_awesome-globe" data-name="Icon awesome-globe" class="cls-1" d="M28.9,13.05C27.65,5.38,24.72,0,21.29,0S14.94,5.38,13.7,13.05ZM13.05,21.3a53.33,53.33,0,0,0,.29,5.5H29.25a53.31,53.31,0,0,0,.28-5.5,53.17,53.17,0,0,0-.28-5.5H13.34A53.18,53.18,0,0,0,13.05,21.3Zm27.89-8.25A21.35,21.35,0,0,0,27.38.89a29.07,29.07,0,0,1,4.28,12.16ZM15.22.89A21.33,21.33,0,0,0,1.66,13.05h9.27A28.82,28.82,0,0,1,15.22.89ZM41.86,15.8H32a52.75,52.75,0,0,1,.28,5.5c0,1.85-.1,3.69-.28,5.5h9.84a20.89,20.89,0,0,0,.74-5.5A21.69,21.69,0,0,0,41.86,15.8ZM10.31,21.3c0-1.85.1-3.69.28-5.5H.74a20.7,20.7,0,0,0,0,11h9.84C10.41,25,10.31,23.15,10.31,21.3Zm3.39,8.24c1.24,7.67,4.18,13.06,7.6,13.06s6.35-5.39,7.6-13.06ZM27.38,41.7A21.34,21.34,0,0,0,41,29.54H31.67A29,29,0,0,1,27.38,41.7ZM1.66,29.54A21.32,21.32,0,0,0,15.23,41.7a28.92,28.92,0,0,1-4.3-12.16Z"/>
      </g></svg>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'IconGlobeMeridian',
})
export default class IconGlobeMeridian extends Vue {
  @Prop({ type: Number })
  iconSize = 18;

  @Prop({ type: String })
  iconColor = 'currentColor';
}

</script>

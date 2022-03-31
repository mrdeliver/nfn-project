<!-- eslint-disable max-len -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.59 42.6"
    :width="iconSize" :height="iconSize"
      >
      <g :fill="iconColor">
        <path id="e" class="h" d="M0,13.83v27.71c0,.58,.46,1.05,1.04,1.05,0,0,0,0,.01,0H13.84c.58,0,1.05-.46,1.05-1.04,0,0,0,0,0-.01V13.83c0-.58-.46-1.05-1.04-1.05,0,0,0,0-.01,0H1.05C.47,12.77,0,13.24,0,13.81c0,0,0,0,0,.01Z"/><path id="f" class="h" d="M18.08,0c-.58,0-1.05,.46-1.05,1.04,0,0,0,0,0,.01V42.58h15.98c.58,0,1.05-.46,1.05-1.04,0,0,0,0,0-.01V1.05C34.07,.47,33.6,0,33.03,0c0,0,0,0-.01,0h-14.93Z"/><path id="g" class="h" d="M50.05,21.29h-12.8c-.58,0-1.05,.46-1.05,1.04,0,0,0,0,0,.01v19.19c0,.58,.46,1.05,1.04,1.05,0,0,0,0,.01,0h12.8c.58,0,1.05-.46,1.05-1.04,0,0,0,0,0-.01V22.34c0-.58-.46-1.05-1.04-1.05,0,0,0,0-.01,0Z"/>
      </g>
    </svg>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'IconLock',
})
export default class IconLock extends Vue {
  @Prop({ type: Number })
  iconSize = 18;

  @Prop({ type: String })
  iconColor = 'currentColor';
}

</script>

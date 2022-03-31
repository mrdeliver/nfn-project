<!-- eslint-disable max-len -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.59 42.6"
    :width="iconSize" :height="iconSize"
      >
      <g :fill="iconColor">
        <path id="d" class="e" d="M18.55,2.85l2.16-2.16c.91-.91,2.38-.92,3.29-.01h.01l18.92,18.93c.91,.91,.92,2.38,.01,3.29h-.01l-18.92,18.93c-.91,.91-2.38,.92-3.29,.01h-.01l-2.16-2.16c-.91-.92-.91-2.4,0-3.31l.03-.03,11.73-11.18H2.34C1.05,25.16,0,24.12,0,22.83c0,0,0-.01,0-.02v-3.12c0-1.29,1.04-2.33,2.32-2.34,0,0,0,0,.01,0H30.32L18.59,6.18c-.93-.88-.97-2.35-.09-3.28,.02-.02,.03-.03,.05-.05Z"/>
      </g>
    </svg>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'IconArrowRight',
})
export default class IconArrowRight extends Vue {
  @Prop({ type: Number })
  iconSize = 18;

  @Prop({ type: String })
  iconColor = 'currentColor';
}

</script>

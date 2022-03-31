<!-- eslint-disable max-len -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.59 42.6"
    :width="iconSize" :height="iconSize"
      >
      <g :fill="iconColor">
        <path id="d" class="e" d="M33.22,18.6h-1.99v-5.98C31.23,5.65,25.58,0,18.6,0S5.98,5.65,5.98,12.62v5.98h-1.99C1.79,18.6,0,20.39,0,22.59v15.95c0,2.2,1.79,3.99,3.99,3.99h29.23c2.2,0,3.99-1.78,3.99-3.99v-15.95c0-2.2-1.79-3.99-3.99-3.99Zm-8.64,0H12.62v-5.98c0-3.3,2.68-5.98,5.98-5.98,3.3,0,5.98,2.68,5.98,5.98v5.98Z"/>
      </g>
    </svg>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'IconQuestionmarc',
})
export default class IconQuestionmarc extends Vue {
  @Prop({ type: Number })
  iconSize = 18;

  @Prop({ type: String })
  iconColor = 'currentColor';
}

</script>

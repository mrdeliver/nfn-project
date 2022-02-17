<template>
  <div class="center-icon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="iconWidth"
      :height="iconHeight"
      viewBox="0 0 50 50"
      :aria-labelledby="iconName"
      role="presentation"
    >
      <title
        :id="iconName"
        lang="en"
      >{{ iconName }} icon</title>
      <g :fill="iconColor" style="display: flex; justify-content: center; align-items: center;">
        <slot />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'IconBase',
})
export default class IconBase extends Vue {
  @Prop({ type: String })
  iconName = 'box';

  @Prop()
  iconWidth = 18;

  @Prop()
  iconHeight = 18;

  @Prop({ type: String })
  iconColor = 'currentColor';
}
</script>

<style lang="scss" scoped>
.center-icon {
  display: flex;
  align-items: center;;
}
</style>

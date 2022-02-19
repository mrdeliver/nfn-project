<template>
  <div class="center-icon">
    <component
    :is="iconType"
    v-bind="{'iconSize': size, 'iconColor': color}">
    </component>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import IconEther from './IconEther.vue';
import IconGlobeMeridian from './IconGlobeMeridian.vue';

@Options({
  name: 'IconBase',
  components: {
    IconEther,
    IconGlobeMeridian,
  },
})
export default class IconBase extends Vue {
  @Prop({ type: String })
  iconType = 'IconEther';

  @Prop({ type: Number })
  size = 18;

  @Prop({ type: String })
  color = 'currentColor';
}
</script>

<style lang="scss" scoped>
.center-icon {
  display: flex;
  align-items: center;;
}
</style>

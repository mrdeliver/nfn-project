<template>
  <div class="tag" :class="[tagColor, tagSize]">
    <div class="tag-content">
        <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'Tag',
})
export default class Tag extends Vue {
  private expand = false;

  @Prop({ default: 'neutral' })
  tagColor = 'neutral';

  @Prop({ default: 'normal' })
  tagSize = 'normal';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/colors';
@import '../../styles/general-styles';
@import '../../styles/texts';

.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  position: inline;
  -webkit-user-select:none;
  user-select: none;

  &:hover {
    cursor: default;
  }

}

.normal {
  $size: 40px;
  $padding: 15px;
  $drop-shadow-depth: 2px;

  @include omnes-text-normal-medium;

  border-radius: $btn-border-radius-big;
  height: $size;
  min-width: $size;
  padding: 0px $padding 0px $padding;
  -webkit-box-shadow: 0px $drop-shadow-depth 0px 0px;
  box-shadow: 0px $drop-shadow-depth 0px 0px;
}

.small {
  $size: 25px;
  $padding: 8px;
  $drop-shadow-depth: 2px;

  @include omnes-text-tiny-medium;

  border-radius: $btn-border-radius-small;
  height: $size;
  min-width: $size;
  padding: 0px $padding 0px $padding;
  margin: 4px 10px 4px 10px;
  -webkit-box-shadow: 0px $drop-shadow-depth 0px 0px;
  box-shadow: 0px $drop-shadow-depth 0px 0px;
}

.tiny {
  $size: 15px;
  $padding: 6px;
  $drop-shadow-depth: 1px;

  @include omnes-text-detail-medium;

  border-radius: $btn-border-radius-tiny;
  height: $size;
  min-width: $size;
  padding: 0px $padding 0px $padding;
  margin: 4px 10px 4px 10px;
  -webkit-box-shadow: 0px $drop-shadow-depth 0px 0px;
  box-shadow: 0px $drop-shadow-depth 0px 0px;
}

.red {
  background-color: $color_red_2;
  border-color: $color_red_2 !important;
  color: $color_red_7; // oddly, this sets the drop shadow color, when not specified otherwise

  .tag-content {
    color: $color_red_8;
  }
}

.neutral {
  background-color: $color_purple_2;
  border-color: $color_purple_2 !important;
  color: $color_purple_5;

  .tag-content {
    color: $color_purple_9;
  }

}

.neutral-dark {
  background-color: $color_purple_9;
  border-color: $color_purple_9 !important;
  color: $color_purple_5;

  .tag-content {
    color: $color_purple_2;
  }
}

.green {
  background-color: $color_green_3;
  border-color: $color_green_3 !important;
  color: $color_green_5;

  .tag-content {
    color: $color_green_8;
  }
}

</style>

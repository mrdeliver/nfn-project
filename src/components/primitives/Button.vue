<template>
  <div class="button-wrapper">
    <div :class="classList">
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <div class="text">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'Button',
})
export default class Button extends Vue {
  private expand = false;

  @Prop({ type: String })
  private size!: 'normal';

  @Prop({ type: String })
  private color!: 'red';

  @Prop({ type: Boolean })
  private iconOnly!: false;

  @Prop({ type: Boolean })
  private textOnly!: false;

  classList: string[] = []

  created(): void {
    this.classList = ['nfn-button', this.size, this.color];
    if (this.iconOnly) { this.classList.push('iconOnly'); }
    if (this.textOnly) { this.classList.push('textOnly'); }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/colors';
@import '../../styles/general-styles';

.button-wrapper {
  display: inline-block;
}

.nfn-button {
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select:none;
  user-select: none;

  .text {
    flex-grow: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
  }

}

.iconOnly {
  padding: 0px !important;

  > .text {
    display: none;
  }

  > .icon {
    padding-right: 0px !important;
  }
}

.textOnly {
  > .icon {
    display: none;
  }
}

@mixin button-press($size, $padding, $click-depth, $drop-shadow-depth) {
  $anim_dur: 0.1s;
  $anim_type: ease-out;
  height: $size;
  min-width: $size;

  padding: 0px $padding 0px $padding;
  margin: 4px 10px 4px 10px;
  -webkit-box-shadow: 0px $drop-shadow-depth 0px 0px;
  box-shadow: 0px $drop-shadow-depth 0px 0px;
  transition: margin $anim_dur $anim_type, box-shadow $anim_dur $anim_type;
  -webkit-transition: margin $anim_dur $anim_type, box-shadow $anim_dur $anim_type;

  &:active {
    margin: calc(4px + #{$click-depth}) 10px calc(4px - #{$click-depth}) 10px;
     -webkit-box-shadow: 0px calc(#{$drop-shadow-depth} - #{$click-depth}) 0px 0px;
    box-shadow: 0px calc(#{$drop-shadow-depth} - #{$click-depth}) 0px 0px ;
  }

  > .icon {
    padding-right: calc(#{$padding} - 3px);
  }
}

.normal {
  $size: 64px;
  $padding: 15px;
  $click-depth: 6px;
  $drop-shadow-depth: 10px;
  @include omnes-text-button-normal;
  border-radius: $btn-border-radius-big;
  @include button-press($size, $padding, $click-depth, $drop-shadow-depth);
}

.small {
  $size: 40px;
  $padding: 10px;
  $click-depth: 3px;
  $drop-shadow-depth: 7px;
  border-radius: $btn-border-radius-small;
  @include omnes-text-normal-medium;
  @include button-press($size, $padding, $click-depth, $drop-shadow-depth);
}

.tiny {
  $size: 25px;
  $padding: 8px;
  $click-depth: 2px;
  $drop-shadow-depth: 4px;
  border-radius: $btn-border-radius-tiny;
  @include omnes-text-tiny-medium;
  @include button-press($size, $padding, $click-depth, $drop-shadow-depth);
}

.red-primary {
  .text {
    @include light-text;
  }

  .icon {
    @include light-text;
  }

  background-color: $color_red_5;
  border-color: $color_red_5 !important;
  color: $color_red_7; // oddly, this sets the drop shadow color, when not specified otherwise
}

.neutral-primary {
  .text {
    @include dark-text;
  }

  .icon {
    @include dark-text;
  }

  background-color: $color_purple_2;
  border-color: $color_purple_2 !important;
  color: $color_purple_5;
}

.neutral-dark-primary {
  .text {
    @include light-text;
  }

  .icon {
    @include light-text;
  }

  background-color: $color_purple_9;
  border-color: $color_purple_9 !important;
  color: $color_purple_5;
}

.green-dark-primary {
  .text {
    color: $color_green_2;
  }

  .icon {
    color: $color_green_2;
  }

  background-color: $color_green_7;
  border-color: $color_green_7 !important;
  color: $color_green_2; // oddly, this sets the drop shadow color, when not specified otherwise
}
</style>

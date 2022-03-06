<template>
  <div>
    <div class="hoverarea"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      ref="hoverArea">
      <slot name="hoverarea"></slot>
      <div class="information" :class="[tooltipDirectionClass, color]" v-show="hover">
        <slot name="information"></slot>
        <span class="triangle"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  name: 'HoverInformation',
})
export default class HoverInformation extends Vue {
    hover = false;

    @Prop({ default: '' })
    private tooltipDirection = '';

    @Prop({ default: 'neutral' })
    color = 'neutral';

    // props cannot be passed directly as class bindings
    tooltipDirectionClass = '';

    declare $refs:{
      hoverArea: HTMLElement;
    }

    mounted(): void {
      this.setToolTipDirection();
    }

    setToolTipDirection(): void {
      if (this.tooltipDirection === '') {
        const hoverAreaPosition = this.$refs.hoverArea.getBoundingClientRect();
        console.log(hoverAreaPosition);
        if (hoverAreaPosition.x > (window.innerWidth / 2)) {
          this.tooltipDirectionClass = 'left';
        } else {
          this.tooltipDirectionClass = 'right';
        }
      } else {
        this.tooltipDirectionClass = this.tooltipDirection;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/colors';
@import '../../styles/general-styles';

$tooltip-padding: 15px;
$tooltip-min-height: 16px;
$triangle-size: 16px;
$hover-area-padding: 6px;

.hoverarea {
  position: relative;
  padding: $hover-area-padding;

  &:hover {
    cursor: default;
  }
}

.information {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: $tooltip-padding;
  min-height: $tooltip-min-height;
  border-radius: $border-radius-small;

  .triangle {
    background: inherit;
    display: block;
    position: absolute;
    width: $triangle-size;
    height: $triangle-size;
    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
    border-radius: 0 0 0 0.25em;
  }
}

.left {
  right: calc(100% + #{$triangle-size} - #{$hover-area-padding} - 3px);
  top: 50%;
  transform: translateY(-50%);
  .triangle {
    right: -$triangle-size/2;
    transform: rotate(-135deg);
  }
}

.right {
  left: calc(100% + #{$triangle-size} - #{$hover-area-padding} - 3px);
  top: 50%;
  transform: translateY(-50%);
  .triangle {
    left: -$triangle-size/2;
    transform: rotate(45deg);
  }
}

.bottom {
  top: calc(50% + #{$triangle-size} + #{$hover-area-padding} - 3px);
  left: 50%;
  transform: translateX(-50%);
  .triangle {
    left: calc(50% - #{$triangle-size}/2);
    bottom: calc(50% + #{$triangle-size});
    transform: rotate(135deg);
  }
}

.top {
  bottom: calc(50% + #{$triangle-size} + #{$hover-area-padding} - 3px);
  left: 50%;
  transform: translateX(-50%);
  .triangle {
    left: calc(50% - #{$triangle-size}/2);
    top: calc(50% + #{$triangle-size});
    transform: rotate(-45deg);
  }
}

.neutral {
  background-color: $color_purple_2;
  color: $color_purple_9;
}

.neutral-dark {
  background-color: $color_purple_9;
  color: $color_purple_2;
}

.red {
  background-color: $color_red_1;
  color: $color_red_8;
}

.green {
  background-color: $color_green_2;
  color: $color_green_8;
}

</style>

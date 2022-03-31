<template>
  <div class="landing-wrapper">
    <div class="logo-bar">
      <img src="../assets/logo_transparent.png"/>
      <p class="hashtag">#nfnproject</p>
      <a class="button-bar" style="right:50px"><span class="material-icons">help_outline</span></a>
      <a class="button-bar" style="right:10px"><span class="material-icons">language</span></a>
    </div>
    <div class="content">
      <h2 class="main-heading"><span class="small-font">over</span> 2.000.000</h2>
      <p class="small-font">Trees planted / kg plastic collected / animals protected</p>
      <h1 class="main-heading"> Join the game!</h1>
      <div class="light-omnes-heading"> Omnes Heading</div>
      <div class="action-bar">
        <Button size="normal" color="red-primary">
          <template #icon><IconBase iconType="IconEther" size="30" color="white">
            </IconBase></template>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="small" color="red-primary">
          <template #icon></template>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="small" color="red-primary" textOnly>
          <template #text>
            <div>Buy for </div>
            <IconBase iconType="IconEther" size="20" color="white"></IconBase>
            <div>0.11 on Openseas</div>
          </template>
        </Button>
        <Button size="tiny" color="red-primary">
          <template #icon></template>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="normal" color="neutral-primary" iconOnly>
          <template #icon>
            <IconBase iconType="IconEther" size="40"></IconBase>
          </template>
        </Button>
        <Button size="normal" color="green-dark-primary" textOnly>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="tiny" color="neutral-dark-primary" textOnly>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="normal" color="red-primary" iconOnly>
          <template #icon>
            <IconBase iconType="IconGlobeMeridian" size="40" color="white"></IconBase>
          </template>
        </Button>
      </div>
      <div class="action-bar" style="margin-top: 50px;">
        <HoverInformation style="z-index: 1">
            <template #hoverarea>
              <Tag :tagColor="'neutral'" :tagSize="'small'">
                <div>
                  Tag Content
                </div>
              </Tag>
            </template>
            <template #information>
              <div> Some information</div>
            </template>
        </HoverInformation>
        <HoverInformation
          :tooltipDirection="'bottom'"
          :color="'neutral-dark'">
          <template #hoverarea>
            <Tag :tagColor="'neutral-dark'" :tagSize="'normal'">
              <div>
                Dark Tag Content
              </div>
            </Tag>
          </template>
          <template #information>
            information
          </template>
        </HoverInformation>
        <HoverInformation
          :tooltipDirection="'top'"
          :color="'red'">
          <template #hoverarea>
           <Tag :tagColor="'red'" :tagSize="'normal'">
              <div>
                Red Tag Content
              </div>
            </Tag>
          </template>
          <template #information>
            information
          </template>
        </HoverInformation>
        <HoverInformation :color="'green'">
            <template #hoverarea>
              <Tag :tagColor="'green'" :tagSize="'tiny'">
                <div>
                  Green Tag Content
                </div>
              </Tag>
            </template>
            <template #information>
              information
            </template>
        </HoverInformation>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './primitives/Button.vue';
import IconBase from './primitives/icons/IconBase.vue';
import HoverInformation from './primitives/HoverInformation.vue';
import Tag from './primitives/Tag.vue';

@Options({
  components: {
    Button,
    IconBase,
    HoverInformation,
    Tag,
  },
})
export default class Landing extends Vue {

}
</script>

<style scoped lang="scss">

@import '../style.scss';
@import '../styles/texts.scss';

.main-heading {
  @include peace-heading-1;
}

.small-font {
  @include peace-heading-2;
}

.landing-wrapper {
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  background: radial-gradient(#79588c,#302240);
}
.content {
  margin-top: 20vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.logo-bar {
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-content: center;
  align-items: center;
}

.action-bar {
  display: flex;
  justify-content: center;
}

.logo-bar > img {
  height: 50px;
  margin-right: 10px;
}

.bar-button > span {
  vertical-align: middle;
}

.hashtag {
  font-size: 2vw;
}

</style>

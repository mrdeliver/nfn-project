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
        <Button size="tiny" color="red-primary">
          <template #icon></template>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="normal" color="light-purple-primary" iconOnly>
          <template #icon></template>
        </Button>
        <Button size="normal" color="red-primary" textOnly>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="tiny" color="dark-purple-primary" textOnly>
          <template #text>Leaderboard</template>
        </Button>
        <Button size="normal" color="red-primary" iconOnly>
          <template #icon>
            <IconBase iconType="IconGlobeMeridian" size="40" color="white"></IconBase>
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './primitives/Button.vue';
import IconBase from './primitives/icons/IconBase.vue';

@Options({
  components: {
    Button,
    IconBase,
  },
})
export default class Landing extends Vue {

}
</script>

<style scoped lang="scss">

@import '../style.scss';

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

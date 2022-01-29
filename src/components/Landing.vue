<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
  <link rel="stylesheet" href="https://use.typekit.net/mdj8kqm.css">
  <div class="landing-wrapper">
    <div class="logo-bar">
      <img src="../assets/logo_transparent.png"/>
      <p class="hashtag">#nfnproject</p>
      <a class="button-bar" style="right:50px"><span class="material-icons">help_outline</span></a>
      <a class="button-bar" style="right:10px"><span class="material-icons">language</span></a>
    </div>
    <div class="content">
      <h2><span class="small-font">over</span> 2.000.000</h2>
      <p class="small-font">Trees planted / kg plastic collected / animals protected</p>
      <h1> Join the game!</h1>
      <div>
        <a class="button-text"><span>Leaderboard</span></a>
        <a class="button-icon"><span class="material-icons">help_outline</span></a>
        <a class="button-icon"><span class="material-icons">language</span></a>
      </div>
    </div>
  </div>
  </template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Landing extends Vue {

}
</script>

<style lang="scss">

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

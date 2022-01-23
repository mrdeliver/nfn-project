<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
  <link rel="stylesheet" href="https://use.typekit.net/mdj8kqm.css">
  <div class="landing-wrapper">
    <div class="logo-bar">
      <img src="../assets/logo_transparent.png"/>
      <p class="hashtag">#nfnproject</p>
      <a class="bar-button" style="right:50px"><span class="material-icons">help_outline</span></a>
      <a class="bar-button" style="right:10px"><span class="material-icons">language</span></a>
    </div>
    <div class="content">
      <h2><span class="small-font">over</span> 2.000.000</h2>
      <p class="small-font">Trees planted / kg plastic collected / animals protected</p>
      <h1> Join the game!</h1>
      <div class="button-wrapper">
        <a class="button text-button"><span>Leaderboard</span></a>
        <a class="button icon-button"><span class="material-icons">help_outline</span></a>
        <a class="button icon-button"><span class="material-icons">language</span></a>
      </div>
    </div>
  </div>
  </template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Landing extends Vue {

}
</script>

<style>

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

h2, h1, p, a {
  color: white;
  font-family: Peace;
  margin: 0px;
}

h1 {
  font-weight: 400;
  font-size: 5.2vw;
  margin-bottom: 5vh;
  margin-top: 5vh;
}

h2 {
  font-weight: 400;
  font-size: 5vw;
  margin-bottom: 0px;
}

.small-font{
  font-size: 1vw;
  font-weight: 100;
  margin: 0px;
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

.bar-button {
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  border-color: #fcfaff;
  background-color: #fcfaff;
  color: #302240;
  filter: drop-shadow(0px 5px 0px #bd9de0);
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: 10px;
  position: absolute;
}

.bar-button > span {
  vertical-align: middle;
}

.hashtag {
  font-size: 2vw;
}

.button {
  font-family: omnes-pro;
  font-weight: bold;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  filter: drop-shadow(0px 5px 0px #a31121);
}

.icon-button {
  background-color: #6b4d7d;
  margin-left: 10px;
  color:#fcc1ca;
  border-color: #b54468;
}

.icon-button > span {
  vertical-align: bottom;
}

.text-button {
  background-color: #ee3f58;
  border-color: #ee3f58;
  padding-left: 30px;
  padding-right: 30px;

}

</style>

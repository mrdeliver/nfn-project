<template>
  <div class="worlds-wrapper">
    <div class="heading">
      <h1 class="main-heading">... and discover worlds</h1>
    </div>
    <div class="worlds-container">
      <div class="world unlocked">
        <div class="locked-icon world-item">
          <span class="material-icons icon-hidden">lock</span>
        </div>
        <div class="world-heading world-item sub-heading">Forrest</div>
        <div class="world-subheading world-item thin-font">
          <span class="text">Discover collection</span>
          <span class="material-icons icon discover-icon md-18">east</span>
        </div>
      </div>
      <div class="world locked">
        <div class="locked-icon world-item"><span class="material-icons icon">lock</span></div>
        <div class="world-heading world-item sub-heading">Ocean</div>
        <div class="world-subheading world-item thin-font">comming soon</div>
      </div>
      <div class="world locked">
        <div class="locked-icon world-item"><span class="material-icons icon">lock</span></div>
        <div class="world-heading world-item sub-heading">Wildlife</div>
        <div class="world-subheading world-item thin-font">comming soon</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Worlds extends Vue {

}
</script>

<style lang="scss">

@import '../style.scss';

.worlds-wrapper {
  height: 100vh;
  display:flex;
  background: radial-gradient(#79588c,#302240);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}

.heading {
  margin-top: 5vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.worlds-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5%;
}

.world {
  height: 574px;
  width: 467px;
  margin-left: 3%;
  margin-right: 3%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-line-pack: justify;
  align-content: center;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  border-radius: 25px;
  filter: drop-shadow(0px 10px 0px #D4F5D8);
}

.unlocked {
  filter: drop-shadow(0px 10px 0px #D4F5D8);
  color: #205828;
  background-image: url("https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
}

.locked {
  filter: drop-shadow(0px 10px 0px #E3E3E3);
  color: #3A4A52;
  background-image: linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url("https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
}

.world-item {
  width: 100%;
  color: white;
  margin-bottom: 5px;
}

.icon-hidden {
  visibility: hidden;
}

.discover-icon {
  background-color: #205828;
  color:#CDF0D9;
  filter: drop-shadow(0px 3px 0px #D4F5D8);
  border-radius: 6px;
  margin-left: 5px;
  display:inline-block;
  padding: 3px;
}

.text {
  display:inline-block;
}

</style>

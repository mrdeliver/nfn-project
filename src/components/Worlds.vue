<template>
  <div class="worlds-wrapper">
    <div class="heading">
      <h1>... and discover worlds</h1>
    </div>
    <div class="worlds-container">
      <div class="world">
        <div class="locked-icon world-item">locked</div>
        <div class="world-heading world-item">FOREST</div>
        <div class="world-subheading world-item">Discover collection</div>
      </div>
      <div class="world">
        <div class="locked-icon world-item">locked</div>
        <div class="world-heading world-item">FOREST</div>
        <div class="world-subheading world-item">Discover collection</div>
      </div>
      <div class="world">
        <div class="locked-icon world-item">locked</div>
        <div class="world-heading world-item">FOREST</div>
        <div class="world-subheading world-item">Discover collection</div>
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
  border: solid red 1px;
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
  background-image: url("https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
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
}

.world-item {
  width: 100%;
  color: white;
  margin-bottom: 5px;
}
</style>

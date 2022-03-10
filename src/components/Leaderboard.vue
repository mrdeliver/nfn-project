<template>
  <div class="wrapper">
    <leaderboard-item
        userName="Anonymus"
        itemName="NFT BLI BLA"
        numberOfTrees="3000"
        assetPrice="0.11"
        imgUrl="nothing"
        :traits="this.traits">
      </leaderboard-item>
  </div>
</template>

<script lang="ts">

import { Vue, Options } from 'vue-class-component';
import LeaderboardItem from './LeaderboardItem.vue';

@Options({
  components: {
    LeaderboardItem,
  },
})
export default class Leaderboard extends Vue {
  private traits: Array<any> = [{ color: '#9D575B' }, { color: '#00F000' }, { color: '#00800B' }, { color: '#352C29' }]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.wrapper {
  height: 100vh;
}

</style>

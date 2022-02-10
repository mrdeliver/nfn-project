<template>
  <div class="home">
    <Landing/>
    <Worlds/>
    <Leaderboard/>
    <NFTCollection/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NFTCollection from '@/components/NFTCollection.vue'; // @ is an alias to /src
import Landing from '@/components/Landing.vue';
import Worlds from '@/components/Worlds.vue';
import Leaderboard from '@/components/Leaderboard.vue';

@Options({
  components: {
    NFTCollection,
    Landing,
    Worlds,
    Leaderboard,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">

@import '../style.scss';

</style>

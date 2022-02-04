<template>
  <div class="home">
    <Landing/>
    <Worlds/>
    <NFTCollection/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NFTCollection from '@/components/NFTCollection.vue'; // @ is an alias to /src
import Landing from '@/components/Landing.vue';
import Worlds from '@/components/Worlds.vue';

@Options({
  components: {
    NFTCollection,
    Landing,
    Worlds,
  },
})
export default class Home extends Vue {}
</script>

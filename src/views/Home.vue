<template>
  <div class="home">
    <Landing/>
    <NFTCollection/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NFTCollection from '@/components/NFTCollection.vue'; // @ is an alias to /src
import Landing from '@/components/Landing.vue'; // @ is an alias to /src

@Options({
  components: {
    NFTCollection,
    Landing,
  },
})
export default class Home extends Vue {}
</script>

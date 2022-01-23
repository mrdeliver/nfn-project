<template>
  <div class="home">
    <Landing/>
    <HelloWorld msg="Moin Meister"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Landing from '@/components/Landing.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Landing,
  },
})
export default class Home extends Vue {}
</script>

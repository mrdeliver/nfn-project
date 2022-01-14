<template>
<h1>LEADERBOARD BLA BLA ASSETS NFT COLLECTION BLA</h1>
  <div class="hello">
    <div v-for="asset in assets" :key="asset" class="asset">
      <img :src="asset.image_url" :alt="asset.asset_contract.name">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.opensea.io/api/v1/';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string

  private collection: any = null

  private primaryAssetContracts: any = null

  private assets: any = null

  async fetchCollection(name: string): Promise<void> {
    await axios
      .get(`collection/${name}`)
      .then((response) => {
        this.collection = response.data.collection;
        this.primaryAssetContracts = this.collection.primary_asset_contracts;
      });
  }

  async fetchAssets(contract:string): Promise<void> {
    await axios
      .get(`assets?asset_contract_address=${contract}&order_direction=desc&offset=0&limit=20`)
      .then((response) => {
        console.log(response);
        this.assets = response.data.assets;
      });
  }

  async mounted(): Promise<void> {
    await this.fetchCollection('boredapeyachtclub');
    await this.fetchAssets(this.primaryAssetContracts[0].address);
    console.log(this.assets);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.asset {
  width: 20%;
  float: left;
  padding: 2%;
}

img {
  max-width:100%;
  max-height:100%;
}

</style>

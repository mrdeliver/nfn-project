<template>
  <div class="collection-wrapper">
    <div v-for="asset in assets" :key="asset" class="asset">
      <collection-item
        :userName="getUsernameForAsset(asset)"
        :itemName="asset.asset_contract.name"
        numberOfTrees="30"
        :assetPrice="getPriceForAsset(asset)"
        :imgUrl="asset.image_url"
        :traits="this.traits">
      </collection-item>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Options } from 'vue-class-component';
import axios from 'axios';
import CollectionItem from './CollectionItem.vue';

axios.defaults.baseURL = 'https://api.opensea.io/api/v1/';

@Options({
  components: {
    CollectionItem,
  },
})
export default class NFTCollection extends Vue {
  private collection: any = null

  private primaryAssetContracts: any = null

  private assets: any = null

  private traits: Array<any> = [{ color: '#9D575B' }, { color: '#00F000' }, { color: '#00800B' }, { color: '#352C29' }]

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

  getUsernameForAsset(asset:any):string {
    if (!asset.owner.user || !asset.owner.user.username) {
      return 'No owner given';
    }
    return asset.owner.user.username;
  }

  getPriceForAsset(asset:any): string {
    if (!asset.last_sale || !asset.last_sale.payment_token.usd_price) {
      return '...';
    }
    const totalPriceInWEI = parseInt(asset.last_sale.total_price, 10);
    const totalPriceInETH = (totalPriceInWEI / 10 ** 18);
    const totalPriceInDollar = totalPriceInETH * asset.last_sale.payment_token.usd_price;
    return `${totalPriceInDollar.toFixed(0).toString()}$`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.collection-wrapper {
  background-color: #312541;
  overflow: hidden; // give height for div with floating children
  display: flex;
  flex-wrap: wrap;
}

.asset {
  width: 20%;
  float: left;
  padding: 2%;
}

img {
  max-width:100%;
  max-height:100%;
}

p {
  color: black;
}

</style>

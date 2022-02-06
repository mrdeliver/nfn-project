<template>
  <div class="wrapper ">
    <div class="inner-wrapper">
      <div class="flex-center item-heading">{{itemName}}</div>
      <div class="flex row-space">
        <div class="fixed-image-square">
          <img :src="this.imgUrl">
        </div>
        <div class="col-right flex-down">
          <div v-for="trait in this.traits"
          :key="trait" class="trait"
          :style="{'background-color':trait.color}"></div>
        </div>
      </div>
      <div class="flex row-space">
        <div class="flex row-gap">
          <a class="label flex tree-label-color">
            <span class="material-icons">park</span>
            <span>{{this.numberOfTrees}}</span>
          </a>
          <a class="label flex name-label-color">
            <span class="material-icons">person</span>
            <span>{{this.userName}}</span>
          </a>
        </div>
      </div>
      <div class="flex row-space">
        <a class="label flex-center buy-label-color full-width">
            <span>Buy for {{this.assetPrice}} on OpenSea</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    itemName: String,
    userName: String,
    numberOfTrees: Number,
    imgUrl: String,
    traits: Array,
    assetPrice: Number,
  },
})
export default class CollectionItem extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style.scss';

.wrapper {
  width: 260px;
  background-color: white;
  border-radius: 40px;
  padding-top: 10px;
  padding-bottom: 22px;
  filter: drop-shadow(0px 6px 0px #B488DE);
}

.item-heading {
  font-family: omnes-pro;
  font-weight: 700;
  font-size: 21px;
}

.inner-wrapper {
  margin-left: 10px;
  margin-right: 10px;
}

.col-right {
  width: 100%;
}

.flex {
  display: flex;

  &-down {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: justify;
    align-content: space-between;
    width: 100%;
    height: 188px;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }

  &-center {
    align-items: center;
    justify-content: center;
  }
}

img {
    height: 100%;
    border-radius: 19px;
}

.trait {
  height: 41px;
  width: 41px;
  margin-left: auto;
  background-color: red;
  border-radius: 13px;
}

.fixed-image-square {
  height: 188px;
  width: 188px;
}

.tree-label-color {
  color: #002A02;
  filter: drop-shadow(0px 3px 0px #007410);
  background-color: #65FF9F;
  font-weight: 500;
}

.name-label-color {
  color: #261933;
  filter: drop-shadow(0px 3px 0px #B488DE);
  background-color: #E7CEFF;
  font-weight: 500;
}

.buy-label-color {
  color: white;
  filter: drop-shadow(0px 5px 0px #A60010);
  background-color: #FF0040;
  font-weight: 600;
}

.row-gap {
  gap: 5px;
}

.row-space {
  margin-top: 12px;
}

.full-width {
  width: 100%;
}

</style>

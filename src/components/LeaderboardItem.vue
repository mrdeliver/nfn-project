<template>
  <div class="leaderboard-item-wrapper">
    <div class="left-col">
      <div class="flex-center item-heading row-space">{{itemName}}</div>
      <div class="fixed-image-size">
          <img src="https://lh3.googleusercontent.com/3GN1RPjmaarlwxVX6-VRpNZbNhitK6q_g74hLSOhmBcQJ3dpj85Fu5fLpEKNoPknVjSdMyjX3cx289T7LZDo-_MaIl8Io7xRnt7WQQ">
        </div>
    </div>
    <div class="right-col">
      <div class="user-heading row-space">
        Currently owned by <span class="bold">{{this.userName}}</span>
      </div>
      <div class="col-wrapper flex-down">
        <div class="tree-wrapper flex-down-center flex-center">
            <span class="material-icons md-36">park</span>
            <span>{{this.numberOfTrees}}</span>
        </div>
        <div class="price-wrapper flex-center flex-down-center">{{this.assetPrice}}</div>
        <div class="flex details-wrapper">
          <div>View details</div>
          <div class="margin-left">View on Opensea</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Options } from 'vue-class-component';

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
export default class LeaderboardItem extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.leaderboard-item-wrapper {
  width: 548px;
  height: 232px;
  background: #FAD022;
  border-radius: 40px;
  display: flex;
  filter: drop-shadow(0px 8px 0px #FFF1B5);
}

.details-wrapper {
  font-family: omnes-pro;
  font-weight: 700;
  font-size: 18px;
}

.left-col {
  width: 170px;
  padding: 7px;
}

.col-wrapper {
  height: 161px;
}

.item-heading {
  font-family: omnes-pro;
  font-weight: 700;
  font-size: 21px;
  color: #302440
}

.user-heading {
  font-family: omnes-pro;
  font-weight: 500;
  font-size: 21px;
  color: #302440
}

.margin-left {
  margin-left: 10px;
}

.right-col {
  padding: 7px;
}

.flex {
  display: flex;
}

.fixed-image-size {
  height: 161px;
  width: 161px;
  margin: auto;
}

img {
    height: 100%;
    border-radius: 35px;
}

.md-36 {
  font-size: 38px;
}

.tree-wrapper {
  font-family: omnes-pro;
  font-weight: 800;
  width: 338px;
  height: 67px;
  background: #2EB238;
  border-radius: 13px;
  color: white;
  font-size: 53px;
}

.price-wrapper {
  width: 185px;
  height: 38px;
  background: #F53B56;
  border-radius: 13px;
  color: white;
  font-family: omnes-pro;
  font-weight: 500;
  font-size: 20px;
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
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }

  &-down-center {
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
  }

  &-center {
    align-items: center;
    justify-content: center;
  }
}

.row-space {
    margin-bottom: 12px;
}

.bold {
  font-weight: 600;
}

</style>

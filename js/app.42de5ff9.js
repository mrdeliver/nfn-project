(function(e){function t(t){for(var r,s,o=t[0],i=t[1],l=t[2],p=0,b=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/nfn-project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"270a":function(e,t,n){},3181:function(e,t,n){"use strict";n("270a")},"4caa":function(e,t,n){},7779:function(e,t,n){},a292:function(e,t,n){"use strict";n("4caa")},c2fb:function(e,t,n){e.exports=n.p+"img/logo_transparent.b68de101.png"},c6d5:function(e,t,n){"use strict";n("7779")},c7c3:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["z"])("router-view");return Object(r["r"])(),Object(r["d"])(n)}n("ec64");var c=n("6b0d"),s=n.n(c);const o={},i=s()(o,[["render",a]]);var l=i,u=n("6c02"),p={class:"home"};function b(e,t,n,a,c,s){var o=Object(r["z"])("Landing"),i=Object(r["z"])("NFTCollection");return Object(r["r"])(),Object(r["e"])("div",p,[Object(r["h"])(o),Object(r["h"])(i)])}var f=n("bee2"),d=n("d4ec"),O=n("262e"),j=n("2caf"),v=n("9ab4"),h=n("ce1f"),m=(n("b0c0"),{class:"collection-wrapper"});function g(e,t,n,a,c,s){var o=this,i=Object(r["z"])("collection-item");return Object(r["r"])(),Object(r["e"])("div",m,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(e.assets,(function(t){return Object(r["r"])(),Object(r["e"])("div",{key:t,class:"asset"},[Object(r["h"])(i,{userName:e.getUsernameForAsset(t),itemName:t.asset_contract.name,numberOfTrees:"30",assetPrice:e.getPriceForAsset(t),imgUrl:t.image_url,traits:o.traits},null,8,["userName","itemName","assetPrice","imgUrl","traits"])])})),128))])}var y=n("1da1"),w=(n("d3b7"),n("25f0"),n("b680"),n("96cf"),n("bc3a")),_=n.n(w),x=function(e){return Object(r["v"])("data-v-2a1c52e6"),e=e(),Object(r["s"])(),e},k={class:"wrapper"},N={class:"inner-wrapper"},P={class:"flex-center item-heading"},A={class:"flex row-space"},S={class:"fixed-image-square"},C=["src"],F={class:"col-right flex-down"},T={class:"flex row-space"},B={class:"flex row-gap"},R={class:"label flex tree-label-color"},U=x((function(){return Object(r["f"])("span",{class:"material-icons"},"park",-1)})),M={class:"label flex name-label-color"},I=x((function(){return Object(r["f"])("span",{class:"material-icons"},"person",-1)})),z={class:"flex row-space"},L={class:"label flex-center buy-label-color full-width"};function J(e,t,n,a,c,s){return Object(r["r"])(),Object(r["e"])("div",k,[Object(r["f"])("div",N,[Object(r["f"])("div",P,Object(r["B"])(e.itemName),1),Object(r["f"])("div",A,[Object(r["f"])("div",S,[Object(r["f"])("img",{src:this.imgUrl},null,8,C)]),Object(r["f"])("div",F,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(this.traits,(function(e){return Object(r["r"])(),Object(r["e"])("div",{key:e,class:"trait",style:Object(r["n"])({"background-color":e.color})},null,4)})),128))])]),Object(r["f"])("div",T,[Object(r["f"])("div",B,[Object(r["f"])("a",R,[U,Object(r["f"])("span",null,Object(r["B"])(this.numberOfTrees),1)]),Object(r["f"])("a",M,[I,Object(r["f"])("span",null,Object(r["B"])(this.userName),1)])])]),Object(r["f"])("div",z,[Object(r["f"])("a",L,[Object(r["f"])("span",null,"Buy for "+Object(r["B"])(this.assetPrice)+" on OpenSea",1)])])])])}n("a9e3");var q=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n)}(h["b"]);q=Object(v["a"])([Object(h["a"])({props:{itemName:String,userName:String,numberOfTrees:Number,imgUrl:String,traits:Array,assetPrice:Number}})],q);var D=q;n("3181");const H=s()(D,[["render",J],["__scopeId","data-v-2a1c52e6"]]);var $=H;_.a.defaults.baseURL="https://api.opensea.io/api/v1/";var E=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.collection=null,e.primaryAssetContracts=null,e.assets=null,e.traits=[{color:"#9D575B"},{color:"#00F000"},{color:"#00800B"},{color:"#352C29"}],e}return Object(f["a"])(n,[{key:"fetchCollection",value:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("collection/".concat(t)).then((function(e){n.collection=e.data.collection,n.primaryAssetContracts=n.collection.primary_asset_contracts}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"fetchAssets",value:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("assets?asset_contract_address=".concat(t,"&order_direction=desc&offset=0&limit=20")).then((function(e){console.log(e),n.assets=e.data.assets}));case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCollection("boredapeyachtclub");case 2:return e.next=4,this.fetchAssets(this.primaryAssetContracts[0].address);case 4:console.log(this.assets);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getUsernameForAsset",value:function(e){return e.owner.user&&e.owner.user.username?e.owner.user.username:"No owner given"}},{key:"getPriceForAsset",value:function(e){if(!e.last_sale||!e.last_sale.payment_token.usd_price)return"...";var t=parseInt(e.last_sale.total_price,10),n=t/Math.pow(10,18),r=n*e.last_sale.payment_token.usd_price;return"".concat(r.toFixed(0).toString(),"$")}}]),n}(h["b"]);E=Object(v["a"])([Object(h["a"])({components:{CollectionItem:$}})],E);var G=E;n("a292");const K=s()(G,[["render",g],["__scopeId","data-v-1c1d883a"]]);var Q=K,V=n("c2fb"),W=n.n(V),X=Object(r["g"])('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://use.typekit.net/mdj8kqm.css"><div class="landing-wrapper"><div class="logo-bar"><img src="'+W.a+'"><p class="hashtag">#nfnproject</p><a class="button-bar" style="right:50px;"><span class="material-icons">help_outline</span></a><a class="button-bar" style="right:10px;"><span class="material-icons">language</span></a></div><div class="content"><h2><span class="small-font">over</span> 2.000.000</h2><p class="small-font">Trees planted / kg plastic collected / animals protected</p><h1> Join the game!</h1><div><a class="button-text"><span>Leaderboard</span></a><a class="button-icon"><span class="material-icons">help_outline</span></a><a class="button-icon"><span class="material-icons">language</span></a></div></div></div>',3);function Y(e,t,n,r,a,c){return X}var Z=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n)}(h["b"]);n("c6d5");const ee=s()(Z,[["render",Y]]);var te=ee,ne=function(e){Object(O["a"])(n,e);var t=Object(j["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n)}(h["b"]);ne=Object(v["a"])([Object(h["a"])({components:{NFTCollection:Q,Landing:te}})],ne);var re=ne;const ae=s()(re,[["render",b]]);var ce=ae,se=[{path:"/",name:"Home",component:ce}],oe=Object(u["a"])({history:Object(u["b"])(),routes:se}),ie=oe,le=n("5502"),ue=Object(le["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(l).use(ue).use(ie).mount("#app")},ec64:function(e,t,n){"use strict";n("c7c3")}});
//# sourceMappingURL=app.42de5ff9.js.map
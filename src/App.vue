<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
  <link rel="stylesheet" href="https://use.typekit.net/mdj8kqm.css">
  <router-view/>
</template>

<style lang="scss">
@font-face {
  font-family: "Peace";
  src: local("Peace"),
  url("./fonts/Peace_Sans_Webfont.woff2") format("truetype");
}
#app {
  font-family: Peace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}
</style>

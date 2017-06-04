<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  min-width: 1200px;
  overflow: auto;
}
ul li {list-style-type: none}
/* scrollbar for chrome */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: rgba(0,153,77,.2);
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0,153,77,.2);
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
}
::-webkit-scrollbar-track:hover {
  background-color: rgba(0,153,77,.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0,153,153,.4);
}
::-webkit-scrollbar-track:active {
  background-color: rgba(0,153,77,.5);
  -webkit-box-shadow: inset 0 0 6px rgba(0,153,153,.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(0,153,77,.3);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0,153,153,.6);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,.1);
}
::-webkit-scrollbar-thumb:active {
  background: rgba(0,153,153,.8);
}
/* scrollbar for chrome end */
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'desktop-assist',
    created () {
      this.setIsLive()
    },
    methods: {
      setIsLive() {
        localStorage.setItem('isLive',false)
      }
    }
  }
</script>

<style>
  /* CSS */
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  button {
    -webkit-app-region: no-drag;
  }
</style>

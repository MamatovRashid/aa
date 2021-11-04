<template>
  <div id="app" class="flex">
    <Menu/>
    <div class="main flex-1">
      <Header />
      <router-view />
    </div>
  </div>
</template>
<script>
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
export default {
  name: "App",
  components: {
    Menu,
    Header
  }
}
</script>

<style lang="scss">
body{
  background: #f9f9f9;
}
</style>

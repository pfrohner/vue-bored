<template>
  <div id="app">
    <Bored />
  </div>
</template>

<script>
import Bored from "@/components/Bored.vue";

export default {
  name: "app",
  components: {
    Bored
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <app-header/>
  <router-view></router-view>
  <contact/>
</template>



<script >
import AppHeader from "./components/AppHeader.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    AppHeader,
    Contact    
  },
};
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

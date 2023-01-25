<template>
  <section class="app-header-container">
    <navbar class="app-header-nav">
      <div class="app-logo" @click="logoClick">
        <!-- <h1 class="logo">NoamBar</h1> -->
        <img class="logo" src="https://res.cloudinary.com/noambar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673697441/Portfolio/NoamLogo_ft0vkb.png" alt="">
      </div>
      <div class="app-header-links">
        <RouterLink to="/about/me" class="header-link">About</RouterLink>
        <!-- <RouterLink class="header-link">Projects</RouterLink> -->
        <!-- <RouterLink class="header-link">Contact</RouterLink> -->
      </div>
    </navbar>
    </section>
  </template>


<script>

export default {
  methods:{
    logoClick(){
      this.$router.push({ path: '/' })
    }
  }
};
</script>

<style>
</style>
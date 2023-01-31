<template>
  <section class="app-header-container">
    <navbar class="app-header-nav">
      <div class="app-logo" @click="logoClick">
        <!-- <h1 class="logo">NoamBar</h1> -->
        <img
          class="logo"
          src="https://res.cloudinary.com/noambar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673697441/Portfolio/NoamLogo_ft0vkb.png"
          alt=""
        />
      </div>
      <div class="app-header-toggle-btn" @click="onToggleNav" ref="toggleBtn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="app-header-links" ref="navBar">
        <RouterLink @click="onSelect(false)" to="/about/me" class="header-link">About Me</RouterLink>
        <a href="#" @click="onSelect('projects')" class="header-link">Projects</a>
        <a href="#" @click="onSelect('contact')" class="header-link">Contact Me</a>
        <!-- <RouterLink class="header-link">Projects</RouterLink> -->
        <!-- <RouterLink class="header-link">Contact</RouterLink> -->
      </div>
    </navbar>
  </section>
</template>


<script>
export default {
  methods: {
    logoClick() {
      this.$router.push({ path: "/" });
    },

    onToggleNav() {
      this.$refs.toggleBtn.classList.toggle('open')
      this.$refs.navBar.classList.toggle('open-nav')
      document.body.classList.toggle('nav-is-open')
    },

    onSelect(select){
      if(window.innerWidth<=800){
        this.onToggleNav()
      }
      if(select) this.$emit(select);
    },
  },
};
</script>

<style>
</style>
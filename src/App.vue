<template>
  <div>
    <app-header @projects="scrollToProjects" @contact="scrollToContact" />
    <router-view></router-view>
    <div ref="contact"><contact /></div>
  </div>
</template>



<script >
import AppHeader from "./components/AppHeader.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    AppHeader,
    Contact,
  },
  methods: {
    scrollToContact() {
      setTimeout(() => {
        this.$refs.contact.scrollIntoView({ behavior: "smooth" });
      });
    },
    scrollToProjects() {
      this.$router.push('/')
      setTimeout(() => {
        document.querySelector('#projects-container').scrollIntoView({ behavior: "smooth" });
      });
    },
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

<template>
  <section class="homepage-container">
    <hero-comp />
    <service-comp />
    <skill-comp />
    <proj-comp />
    <!-- <contact /> -->
  </section>
</template>

<script>
import SkillComp from "../components/SkillComp.vue";
import Contact from "../components/Contact.vue";
import ProjComp from "../components/ProjComp.vue";
import ServiceComp from "../components/ServiceComp.vue";
import HeroComp from "../components/HeroComp.vue";

export default {
  components: {
    SkillComp,
    Contact,
    ProjComp,
    ServiceComp,
    HeroComp,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
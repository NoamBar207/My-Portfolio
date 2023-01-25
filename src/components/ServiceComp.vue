<template>
  <section v-if="!features" class="services-container">
    <article v-for="serv in services" :key="serv.name" class="service-container">
      <main class="card-container">
        <div class="front">
          <div class="service-img"><i :class="serv.img"></i></div>
          <h2>{{ serv.name }}</h2>
        </div>
        <div class="back">
          <h2>{{ serv.name }}</h2>
          <p class="service-info">{{ serv.info }}</p>
        </div>
      </main>
    </article>
  </section>
  <section v-else class="services-container">
    <article v-for="feat in features" :key="feat.name" class="service-container">
      <main class="card-container">
        <div class="front">
          <div class="service-img"><i :class="feat.img"></i></div>
          <h2>{{ feat.title }}</h2>
        </div>
        <div class="back">
          <h2>{{ feat.title }}</h2>
          <p class="service-info">{{ feat.info }}</p>
        </div>
      </main>
      <!-- <div class="service-img"><i :class="feat.img"></i></div>
      <h2>{{ feat.title }}</h2>
      <p class="service-info">{{ feat.info }}</p> -->
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: "Responsive",
          info: "My layouts will work on any device, big or small.",
          img: "fa-solid fa-desktop",
        },
        {
          name: "Fast",
          info: "Fast load times and lag free interaction, for best user experince.",
          img: "fa-solid fa-bolt",
        },
        {
          name: "Intuitive",
          info: "Strong preference for easy to use, intuitive UX/UI.",
          img: "fa-solid fa-lightbulb",
        },
        {
          name: "Dynamic",
          info: "Websites don't have to be static, I love making pages come to life.",
          img: "fa-solid fa-rocket",
        },
      ],
    };
  },

  props: ["features"],
  
};
</script>

<style>
</style>
<template>
  <section class="about-project-container" v-if="project">
    <div class="try-div" :style="{ 'background-image': 'url(' + project.bg + ')' }">
      <article class="project-main">
        <h2 class="project-title">{{ project.title }}</h2>
        <div class="cv-repo-btn">
          <button class="button-cv" v-if="project.url" @click="openInNewTab(project.url)">
            Check It Out!
          </button>
          <button class="media-btn" @click="openInNewTab(project.repoLink)" title="Repository" :style="{'background-image' : 'url(' + 'https://res.cloudinary.com/noambar/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1675295723/Portfolio/xeklyfoav8tqkasm5zvm.png' + ')'}"><span></span></button>
          <!-- <button class="button-cv" v-if="project.url" @click="openInNewTab(project.repoLink)">
            Repo Link
          </button> -->
        </div>
        <h5 class="project-info">{{ project.mainInfo }}</h5>
      <h5 class="project-technologies">{{ project.technologies }}</h5>
      <!-- <div class="prev-pic" :style="{ 'background-image': 'url(' + project.bg + ')' }"></div> -->
    </article>
  </div>
    <service-comp :features="project.features" />
    <section class="project-showcase-container">
      <h2 class="project-showcase-header">Show Case:</h2>
      <carousel @next="next" @prev="prev">
        <carousel-slide
          class="project-showcase"
          v-for="(sc, index) in project.showcase"
          :key="sc"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
          :sc="sc"
        >
          <h3>{{ index + 1 }}) {{ sc.showcaseTitle }}</h3>
          <img :src="sc.img" class="curr-img" />
        </carousel-slide>
      </carousel>
      <article class="project-showcase-prew-container">
        <div
          class="prew-carousel"
          v-for="(sc, index) in project.showcase"
          :key="sc.showcaseTitle"
          :style="{ 'background-image': 'url(' + sc.img + ')' }"
          @click="setVisibleSlide(index)"
        >
          <span v-if="visibleSlide === index" class="slide-ind"
            ><i class="fa-solid fa-location-pin"></i
          ></span>
        </div>
      </article>
      <div class="carousel-side">
        <div class="project-showcase-info">
          <h4 class="info-title">Info:</h4>
          <h3 class="info-txt">{{ slideInfo }}</h3>
        </div>
      </div>
      <article v-if="project.moreAbout" class="more-info-container">
        <h2>More About:</h2>
        <div
          class="more-info-loop"
          v-for="(info, idx) in project.moreAbout"
          :key="idx"
        >
          <h3>{{ info }}</h3>
        </div>
      </article>

      <!-- <div class="project-showcase" v-for="sc in project.showcase" :key="sc.showcaseTitle">
        <div class="show-case-info">
          <h3>{{ sc.showcaseTitle }}</h3>
        </div>
        <img :src="sc.img" />
      </div> -->
    </section>
  </section>
</template>

<script>
import { projectService } from "../services/project.service";
import Carousel from "../components/util.cmps/carousel/Carousel.vue";
import CarouselSlide from "../components/util.cmps/carousel/CarouselSlide.vue";
import ServiceComp from "../components/ServiceComp.vue";

export default {
  data() {
    return {
      project: null,
      visibleSlide: 0,
      direction: "right",
    };
  },
  components: {
    Carousel,
    CarouselSlide,
    ServiceComp,
  },
  computed: {
    showcaseLen() {
      return this.project.showcase.length;
    },
    slideInfo() {
      return this.project.showcase[this.visibleSlide].info;
    },
  },

  methods: {
    next() {
      if (this.visibleSlide >= this.showcaseLen - 1) this.visibleSlide = 0;
      else this.visibleSlide++;
      this.direction = "right";
    },
    prev() {
      if (this.visibleSlide <= 0) this.visibleSlide = this.showcaseLen - 1;
      else this.visibleSlide--;
      this.direction = "left";
    },
    setVisibleSlide(index) {
      this.visibleSlide = index;
    },
    openInNewTab(url) {
      window.open(url, "_blank", "noreferrer");
    },
  },

  async created() {
    window.scrollTo(0, 0);
    const _id = this.$route.params._id;
    this.project = await projectService.get(_id);
  },
};
</script>

<style>
img {
  width: 100%;
}
</style>
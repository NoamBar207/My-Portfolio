<template>
  <section class="hero-container">
    <vanta-hero />
    <article class="hero-body" :style="{ height: this.bodyHeight + 'px' }">
      <div
        class="hero-info-container"
        :style="{ height: this.infoHeight + 'px' }"
      >
        <!-- <img
          class="hero-info-img"
          src="https://res.cloudinary.com/noambar/image/upload/v1676306229/Portfolio/IMG_3154_kofrxi.jpg"
        /> -->
        <div class="hero-info-img" :style="{backgroundImage: 'url(https://res.cloudinary.com/noambar/image/upload/v1676306229/Portfolio/IMG_3154_kofrxi.jpg)'}"></div>
        <div class="hero-main">
          <div class="hero-info-text">
            <h4 class="hero-greeting">Hello World,</h4>
            <h2 class="hero-name">I am Noam Bar, a Full Stack Developer</h2>
            <h5 class="hero-main">
              I create efficient mobile and web applications by working on both the backend and frontend. I ensure optimal performance and deliver desired designs.
            </h5>
          </div>
          <div class="hero-social-media">
            <!-- <button>DOWNLOAD CV</button>
                <div class="social-media-btn">
                    <button><span><i class="fa-brands fa-square-facebook"></i></span></button>
                    <button><span><i class="fa-brands fa-instagram"></i></span></button>
                    <button><span><i class="fa-brands fa-linkedin"></i></span></button>
                </div> -->
            <media-buttons />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import MediaButtons from "./util.cmps/MediaButtons.vue";
import VantaHero from "./util.cmps/VantaHero.vue";
export default {
  data() {
    return {
      bodyHeight: window.innerWidth >= 800 ? 400 : 500,
      infoHeight: window.innerWidth >= 800 ? 250 : 420,
    };
  },

  mounted() {
    window.addEventListener("resize", this.resizeHandle);
  },

  unmounted() {
    window.removeEventListener("resize", this.resizeHandle);
  },

  methods: {
    resizeHandle(e) {
      let bodyH = window.innerWidth >= 800 ? 400 : 500;
      let infoH = window.innerWidth >= 800 ? 250 : 420;
      if (this.infoHeight !== infoH) {
        this.infoHeight = infoH;
        this.bodyHeight = bodyH;
      }
    },
  },

  components: {
    MediaButtons,
    VantaHero,
  },
};
</script>

<style>
</style>
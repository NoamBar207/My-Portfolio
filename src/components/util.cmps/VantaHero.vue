<template>
  <div
    class="venta-container"
    ref="vantaRef"
    :style="{ 'z-index': '-1' }"
  ></div>
</template>
  <script>
import NET from "vanta/dist/vanta.net.min.js";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default {
  data() {
    return {
      height: window.innerWidth >= 800 ? 400 : 500,
      pointes: window.innerWidth >= 800 ? 20.0 : 10.0,
    };
  },

  mounted() {
    window.addEventListener("resize", this.resizeHandle);
    this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: this.height,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: this.pointes,
      maxDistance: 22.0,
      spacing: 18.0,
      color: "#c4e9c5",
      backgroundColor: "#303030",
    });
  },

  unmounted() {
    window.removeEventListener("resize", this.resizeHandle);
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },

  methods: {
    resizeHandle(e) {
      let h = window.innerWidth >= 800 ? 400 : 500;
      let p = window.innerWidth >= 800 ? 20.0 : 10.0;
      if (this.height !== h) {
        this.height = h;
        this.pointes = p;
        if (this.vantaEffect) {
          this.vantaEffect.destroy();
          this.vantaEffect = NET({
            el: this.$refs.vantaRef,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: this.height,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            points: this.pointes,
            maxDistance: 22.0,
            spacing: 18.0,
            color: "#c4e9c5",
            backgroundColor: "#303030",
          });
        }
      }
    },
  },
};
</script>

<style>
canvas {
  aspect-ratio: 2000 / 400 !important;
}
</style>
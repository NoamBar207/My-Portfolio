<template>
  <section class="skills-container">
    <h1>Skills & Expertise</h1>

    <ul class="skills-progress">
      <li class="skill" v-for="skill in skills" :key="skill.title">
        <div class="lang" :style="{ color: skill.color }">
          <span><i :class="skill.symbol"></i></span>{{ skill.title }}
        </div>
        <div class="bar">
          <div
            class="progress"
            :style="{
              width: skill.percent + '%',
              'background-image':
                'linear-gradient(120deg , ' +
                skill.darkenColor +
                ' , ' +
                skill.color +
                ')',
            }"
          ></div>
        </div>
      </li>
    </ul>
  </section>
</template>



<script>
export default {
  data() {
    return {
      skills: [
        {
          symbol: "fa-brands fa-html5",
          title: "HTML",
          percent: 100,
          color: "#FF8200",
          darkenColor: "#663400",
        },
        {
          symbol: "fa-brands fa-node",
          title: "Node.JS",
          percent: 90,
          color: "#6cc24a",
          darkenColor: "#2a501b",
        },
        {
          symbol: "fa-brands fa-square-js",
          title: "Javascript",
          percent: 100,
          color: "#F6BE00",
          darkenColor: "#624c00",
        },
        {
          title: "MongoDB",
          symbol: "fa-brands fa-envira",
          percent: 85,
          color: "#00ED64",
          darkenColor: "#005f28",
        },
        {
          symbol: "fa-brands fa-css3-alt",
          title: "CSS/SCSS",
          percent: 95,
          color: "#00BCE3",
          darkenColor: "#004b5b",
        },
        {
          symbol: "fa-brands fa-vuejs",
          title: "Vue",
          percent: 85,
          color: "#41B883",
          darkenColor: "#1a4a34",
        },
        {
          symbol: "fa-brands fa-react",
          title: "React",
          percent: 95,
          color: "#006eb3",
          darkenColor: "#002c48",
        },
        {
          symbol: "fa-brands fa-angular",
          title: "Angular",
          percent: 80,
          color: "#dd1b16",
          darkenColor: "#580b09",
        },
      ],
    };
  },
};
</script>


<style>
</style>
<template>
  <section class="about-me-container">
    <article class="about-me-summary">
        <div class="summary-tech">
            <h2>
                A Full-Stack Developer specializing in JavaScript programming and creating SPA (Single Page Applications) using the latest web technologies as :
            </h2>
            <ul class="tech-list">
                <li v-for="t in tech" :key="t"><span><i :class="t.symbol"></i></span>{{ t.title }}</li>
            </ul>
            <!-- React, Node.js, Redux, Vue, Vuex, Angular including ES6, Express.js, HTML,
            CSS, SASS, TypeScript. Also have a wide knowledge at C++ and C languages. -->
        </div>
        <div class="summary-myself">
            <h3>I am a quick learner, hardworking, have great communication skills, I am a team player, proactive, and self-motivated.</h3>
            <h3>I have the ability and experience to work under pressure and to manage multiple concurrent tasks.</h3>
            <h3>I am very passionate about programming and always eager to expand my knowledge.</h3>
            <h3>Languages I speak : Hebrew - native, English - proficient.</h3>
        </div>
    </article>



    <article class="img-text-container">
        <div class="img" :style="{'background-image':'url(https://res.cloudinary.com/noambar/image/upload/v1674073830/Portfolio/Projects/WhatsApp_Image_2023-01-18_at_12.48.28_el7jhs.jpg)'}"></div>
        <!-- // :style="{ 'background-image': 'url(' + project.bg + ')' }" -->
        <!-- <img src="https://res.cloudinary.com/noambar/image/upload/v1674073830/Portfolio/Projects/WhatsApp_Image_2023-01-18_at_12.48.28_el7jhs.jpg"/> -->
    <div class="about-me-info-container">
        <div class="about-me-personality">
            <h1>About Me:</h1>
            <div>
                <h3>I have a passion for nature, traveling, and hiking, and have always been a fan of motorsports.</h3>
                <h3>I have been playing the bass guitar since I was 15 years old. I am also a passionate football fan and have been supporting Israel's soccer team Maccabi Haifa for a long time.</h3>
                <h3>I have a diverse taste in music and enjoy listening to different genres, from Rock to Eastern, Pop to Techno.</h3>
            </div>
        </div>
        <!-- <div class="about-me-military">
            <h1>Military Service:</h1>
            <div>
                <h3> I served in the Israeli army for three years.</h3>
                <h3>At July 2015 I been recruited to Israeli Flight Course. Dropped after the fifteen flight. </h3>
                <h3>Then went on to serve in the Israeli Borderr Police as "Mistarev" - an undercover solider.</h3>
                <h3>At May 2018 I honorably discharged. </h3>
        </div>
        </div> -->
    <div class="about-me-professional">
        <h1>Professional Experince:</h1>
        <div class="professional-info">
            <h3>
                <span>2018-2019:</span> After being discharged from the army, for two years I worked at an events hall in Ashdod and became its events manager. I was responsible for managing the events, waiters, and event supplies.
            </h3>
            <h3>
                <span>2019-2020:</span> I worked as a bar manager at the 'Space' restaurant in Emonim. My responsibilities included conducting interviews, employee supervision, meeting sales goals, and working with suppliers."
            </h3>
            <h3>
                <span>2020-2021:</span> Worked at the Ashdod Sea Port as a Security System Manager, where I was in charge of supervising both employees and the port.
            </h3>
        </div>
    </div>
    </div>
    </article>
    <h2 class="end-title">
        At May 2022, I started The Coding Academy's Full-Stack bootcamp because I had self-taught myself C & C++ and fell in love with programming.
    </h2>
  </section>
</template>

<script>
export default {

    data() {
        return {
            tech:[
                {
                    title:'HTML',
                    symbol:'fa-brands fa-html5'
                },
                {
                    title:'CSS',
                    symbol:'fa-brands fa-css3-alt'
                },
                {
                    title:'SASS',
                    symbol:'fa-brands fa-sass'
                },
                {
                    title:'JavaScript',
                    symbol:'fa-brands fa-square-js'
                },
                {
                    title:'React',
                    symbol:'fa-brands fa-react'
                },
                {
                    title:'Redux',
                    symbol:'fa-brands fa-react'
                },
                {
                    title:'Node.js',
                    symbol:'fa-brands fa-node'
                },
                // 'MongoDB',
                // 'TypeScript',
                {
                    title:'MongoDB',
                    symbol:'fa-brands fa-envira'
                },
                {
                    title:'TypeScript',
                    // symbol:'fa-solid fa-t'
                },
                {
                    title:'Angular',
                    symbol:'fa-brands fa-angular'
                },
                {
                    title:'Vue',
                    symbol:'fa-brands fa-vuejs'
                },
                {
                    title:'Vuex',
                    symbol:'fa-brands fa-vuejs'
                },
                {
                    // title:'C',
                    symbol:'fa-solid fa-c'
                },
                {
                    title:'++',
                    symbol:'fa-solid fa-c'
                }
            ]
        }
    },
    created(){
        window.scrollTo(0, 0);
    }
};
</script>

<style>
</style>
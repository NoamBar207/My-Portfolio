<template>
    <section class="projects-container" id="projects-container" >
        <h1>My Projects</h1>
        <main>
            <article v-for="proj in projects" class="project-container" @click="onContainerClick(proj._id)" :key="proj.name">
                <div class="proj-img" :style="{'background-image':'url(' + proj.img + ')'}"/>
                <div class="proj-info">
                    <h2 class="proj-name">{{ proj.name }}</h2>
                    <h3 class="proj-details">{{ proj.info }}</h3>
                    <RouterLink :to="`/about/project/${proj._id}`">Read More</RouterLink>
                </div>
            </article>
        </main>

    </section>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            projects: [
                {
                    name: "Meme Generator",
                    info: "Genarte your own memes. built using HTML5, CSS and JS.",
                    _id: "memegenerator",
                    img: "https://res.cloudinary.com/noambar/image/upload/v1674149177/Portfolio/Projects/fotor_2023-1-19_19_25_50_pdpwuq.png"
                },
                {
                    name: "Mello",
                    info: "Mello - Trello clone, built using MERN stack. E2E project.",
                    _id: "mello",
                    img: "https://res.cloudinary.com/noambar/image/upload/v1673948000/Portfolio/Projects/fotor_2023-1-17_11_32_59_oadhqw.png"
                },
                {
                    name: "Mellofy",
                    info: "Spotify clone + Chat app, built using MERN stack. E2E project.",
                    _id: "mellofy",
                    img: "https://res.cloudinary.com/noambar/image/upload/v1673889648/Portfolio/Projects/fotor_2023-1-16_19_18_55_qoi3f3.png",
                },
                {
                    name: "MisterBitcoin",
                    info: "Wallet app, built using Angular JS. My first Project in Angular.",
                    _id: "misterbitcoin",
                    img: "https://res.cloudinary.com/noambar/image/upload/v1675160598/Portfolio/Projects/MisterBitcoinAngularFullPic_vhsjw5.png"
                },
                {
                    name: "Mine Sweeper",
                    info: "The game with extra featuers. built using HTML5, CSS and JS.",
                    _id: "minesweeper",
                    img: "https://res.cloudinary.com/noambar/image/upload/v1674565363/Portfolio/Projects/fotor_2023-1-24_15_2_3_xeqxeq.png"
                },
                {
                    name: "This Portfolio",
                    info: "My Portfolio . built using Vue, Sass and JS.",
                    _id: "portfolio",
                    img: "https://res.cloudinary.com/noambar/image/upload/v1675073347/Portfolio/Projects/PortfolioFullPic_fvdg8i.png"
                },
            ]
        };
    },
    methods:{
        onContainerClick(id){
            this.$router.push(`/about/project/${id}`)
        }
    }
};
</script>

<style>
</style>
<template>
    <div class="social-media-btn">
        <!-- <button class="download-cv button-cv" @click="openPdf()">READ CV</button> -->
        <button class="download-cv button-cv" @click="openInNewTab('https://pdfhost.io/v/~NGw~kMII_Noam_Bar_CV_2')">READ CV</button>
        <div class="social-media"> 
            <button class="media-btn" @click="openInNewTab('https://www.facebook.com/profile.php?id=100010249146928&mibextid=ZbWKwL')" :style="{'background-image' : 'url(' + FB_LOGO + ')'}"><span></span></button>
            <button class="media-btn" @click="openInNewTab('https://www.instagram.com/noambar')" :style="{'background-image' : 'url(' + IG_LOGO + ')'}"><span></span></button>
            <button class="media-btn" @click="openInNewTab('https://github.com/NoamBar207')" :style="{'background-image' : 'url(' + GH_LOGO + ')'}"><span></span></button>
            <button class="media-btn" @click="openInNewTab('https://www.linkedin.com/in/noam-bar-142378243')" :style="{'background-image' : 'url(' + LD_LOGO + ')'}"><span></span></button>
        </div>
  </div>
</template>

<script>
// import pdfFile from "../../assets/links/Noambar.pdf"
export default {

    data(){
        return {
            FB_LOGO :'https://res.cloudinary.com/noambar/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1673553683/Portfolio/fb_icon_325x325_wzy0l1.png',
            IG_LOGO:'https://res.cloudinary.com/noambar/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1673554826/Portfolio/Instagram_logo_2022_xmiqge.svg',
            LD_LOGO:'https://res.cloudinary.com/noambar/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1673554991/Portfolio/640px-LinkedIn_logo_initials_yklshw.png',
            GH_LOGO:'https://res.cloudinary.com/noambar/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1675295723/Portfolio/xeklyfoav8tqkasm5zvm.png'
        }
    },
    methods:{
        openInNewTab(url){
            window.open(url, '_blank', 'noreferrer')
        },
        openPdf(url){
            window.open(pdfFile, '_blank', 'noreferrer')
        }
    }
};
</script>

<style>
</style>
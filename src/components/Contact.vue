<template>
  <section class="contact-container">
    <article class="contact-info-container">
      <div class="contact-logo">
        <img class="logo" src="https://res.cloudinary.com/noambar/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1673697441/Portfolio/NoamLogo_ft0vkb.png" alt="">
      </div>
      <div class="contact-info-name">
        <!-- <h1 class="name">Noam Bar</h1> -->
        <h2 class="job-title">Full Stack Developer</h2>
        <!-- <button>DOWNLOAD CV</button> -->
      </div>
      <div class="contact-social-media">
        <div class="social-btn">
          <media-buttons />
        </div>
        <div class="contact-number">
          <span class="contact-number-prev">My personal contact:</span>
          <span>NoamBar2845@gmail.com</span>
          <span class="contact-number-span">+972 52 627 8764</span>
        </div>
      </div>
    </article>
    <article class="contact-msg-container">
      <div class="contact-me">
        <span>Contact</span><span class="span-color">Me.</span>
      </div>
      <div class="contact-form">
        <form @submit="sendEmail">
          <div class="input-wrap">
            <input name="name" v-model="name" type="text" class="input-text" @focusout="handleFoucusOut" required/>
            <label class="floating-label">What is your name?</label>
          </div>
          <div class="input-wrap">
            <input name="email" v-model="email" type="email" class="input-text" @focusout="handleFoucusOut" required />
            <label class="floating-label">What is your email?</label>
          </div>
          <div class="input-wrap">
            <!-- <input type="textarea" class="input-text textarea" @focusout="handleFoucusOut" required /> -->
            <!-- <label class="floating-label">Write message here</label> -->
            <textarea name="message" v-model="message" class="input-text textarea" @focusout="handleFoucusOut" required />
            <label class="floating-label">Write message here</label>
          </div>
          <!-- <input type="textarea" placeholder="What's your name?"/> -->
          <!-- <input type="email" placeholder="What is your email?"/> -->
          <!-- <input type="textarea" placeholder="Write message here"/> -->
          <button class="button-cv">Send</button>
        </form>
      </div>
    </article>
  </section>
</template>

<script>
import MediaButtons from "./util.cmps/MediaButtons.vue";
import emailjs from 'emailjs-com';

export default {

  data(){
    return {
      email:'',
      name:'',
      message:'',
    }
  },
  methods: {
    handleFoucusOut(ev) {
    //   console.log("focusout", ev.target.validity.valid);
      if (!ev.target.validity.valid) ev.target.style = "border-bottom: 1px solid red"
      else ev.target.style = "border-bottom: 1px solid green";
    },

    sendEmail(e){
      e.preventDefault()
      try{
        emailjs.sendForm('MyPortfolio', 'template_x48hjib', e.target,
        'i50CZHs_M3GM04UpE', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        // console.log(e)

      }catch(err){
        console.log(err)
      }
      this.name = ''
      this.email = ''
      this.message = ''
    }
  },

  components: {
    MediaButtons,
  },
};
</script>

<style>
</style>
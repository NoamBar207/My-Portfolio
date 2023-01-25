<template>
  <section class="carousel">
    <slot></slot>

    <button @click="next" class="next"><i class="fa-solid fa-chevron-right"></i></button>
    <button @click="prev" class="prev"><i class="fa-solid fa-chevron-left"></i></button>
  </section>
</template>

<script>
export default {

    methods:{
        next(){
            this.$emit('next')
        },

        prev(){
            this.$emit('prev')
        }
    }
};
</script>

<style>
</style>
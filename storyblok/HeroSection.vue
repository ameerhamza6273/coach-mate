<template>
    <div v-editable="blok" class=" text-center pt-40 pb-10">
        <h1 class=" font-bold text-7xl">
            {{ blok.titleblack }}
        </h1>
        <h1 class=" text-bluetext font-bold text-7xl">
            {{ blok.titleblue }}
        </h1>
        <p class="text-lg text-textcolor font-normal leading-6 max-w-2xl mx-auto mt-7">
            {{ blok.text }}
        </p>
        <button class="text-white bg-gradient-to-b from-btncolor-light 
        to-btncolor-dark font-bold rounded-lg text-sm px-8 py-3.5 text-center mt-7" 
         v-for="value in blok.action">
             {{ value.text }}
        </button>
        <img :src="blok.star.filename" alt="blok.star.alt" class="absolute left-[13%] top-[50.6%] max-w-[15%] z-10">
        <img :src="blok.leftimage.filename" alt="blok.leftimage.alt" class="absolute left-[0] top-[29%] max-w-[15%]">
        <img :src="blok.rightimage.filename" alt="blok.rightimage.alt" class="absolute right-[7%] top-[33%] max-w-[10%]">
        <img :src="blok.mainimage.filename" alt="blok.mainimage.alt" class="mx-auto mt-12 max-w-6xl">
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
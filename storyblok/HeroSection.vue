<template>
    <div v-editable="blok" class=" text-center pt-40 pb-10">
        <h1 class=" font-montserrat text-headingclr font-bold lg:text-7xl text-5xl">
            {{ blok.titleblack }}
        </h1>
        <h1 class="font-montserrat text-bluetext font-bold lg:text-7xl text-5xl">
            {{ blok.titleblue }}
        </h1>
        <p class="font-vadodara text-lg text-textcolor font-normal leading-6 max-w-[640px] mx-auto mt-7">
            {{ blok.text }}
        </p>
        <button class="text-white bg-gradient-to-b from-btncolor-light shadow-lg
        to-btncolor-dark font-montserrat font-bold rounded-lg text-sm px-8 py-3.5 text-center mt-7" 
         v-for="value in blok.action">
             {{ value.text }}
        </button>
        <img :src="blok.star.filename" alt="blok.star.alt" class="absolute left-[13%] top-[50.6%] max-w-[15%] z-10">
        <img :src="blok.leftimage.filename" alt="blok.leftimage.alt" class="absolute left-[0] top-[29%] max-w-[15%]">
        <img :src="blok.rightimage.filename" alt="blok.rightimage.alt" class="absolute right-[7%] top-[33%] max-w-[10%]">
        <img :src="blok.mainimage.filename" alt="blok.mainimage.alt" class="mx-auto mt-12 max-w-[90%]">
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
<template>
    <div v-editable="blok" class="max-w-[90%] mx-auto pt-40 pb-10">
        <div class="grid lg:grid-cols-2 lg:grid-cols-2">
            <div class="self-center">
                <h1 class="font-bold text-5xl font-montserrat">{{ blok.heading }}</h1>
                <p class="text-textcolor font-normal text-base max-w-md mt-2 font-lato">{{ blok.text }}</p>
                <button class="font-montserrat text-white bg-gradient-to-b from-btncolor-light shadow-lg
                    to-btncolor-dark font-bold rounded-lg text-sm px-8 py-3.5 text-center mt-5"
                    v-for="value in blok.action">
                        {{ value.text }}
                </button>
            </div>
            <div class="relative lg:mt-0 mt-14">
                <img :src="blok.image1.filename" :alt="blok.image1.alt" class="rounded-t-[20px]">
                <img :src="blok.image2.filename" :alt="blok.image2.alt" class="absolute right-[0%] bottom-[-90px] w-[70%]">
            </div>
        </div>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
 
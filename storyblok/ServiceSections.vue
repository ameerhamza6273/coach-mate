<template>
    <div v-editable="blok" class="max-w-[90%] mx-auto mt-8 pb-20">
        <div class="grid lg:grid-cols-5 sm:grid-cols-2">
            <div class="mb-16 col-span-2">
                <img :src="blok.image.filename" :alt="blok.image.alt" class="rounded-t-[20px]">
            </div>
            <div class="mt-14 pl-16 col-span-3">
                <h1 class="text-headingclr text-4xl font-bold font-montserrat">{{ blok.heading }}</h1>
                <p class="text-textcolor font-normal text-base mt-2 font-lato">{{ blok.text }}</p>
                <button class="font-montserrat text-white bg-gradient-to-b from-btncolor-light shadow-lg
                    to-btncolor-dark font-bold rounded-lg text-sm px-8 py-3.5 text-center mt-5"
                    v-for="value in blok.action">
                        {{ value.text }}
                </button>
            </div>
        </div>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
 
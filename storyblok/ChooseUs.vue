<template>
    <div v-editable="blok" class="max-w-[90%] mx-auto mt-20 pb-24 relative">
        <img :src="blok.image.filename" :alt="blok.image.alt" class="absolute left-[-50px] top-[-105px] w-[20%]">
        <h1 class="text-4xl font-bold text-center">{{ blok.heading }}</h1>
        <p class="text-lg text-center text-textcolor font-normal leading-6 max-w-3xl mx-auto mt-7">{{ blok.text }}</p>
        <div class="grid grid-cols-4 gap-5 mt-10">
            <div class="bg-cardsbackground px-5 rounded-[14px] mt-4 py-6" v-for="value in blok.section">
                <img :src="value.image.filename" :alt="value.image.alt" class="rounded-[13px] h-10 w-10 mb-3 mt-1">
                <h3 class="text-xl font-semibold">{{ value.title }}</h3>
                <p class="font-normal text-sm text-textcolor mt-1">{{ value.text }}</p>
            </div>
        </div>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
 
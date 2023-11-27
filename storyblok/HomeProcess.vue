<template>
    <div v-editable="blok" class="max-w-[90%] mx-auto mt-8 pb-20">
        <div class="grid lg:grid-cols-2 lg:grid-cols-2">
            <div class="relative mb-16">
                <img :src="blok.image.filename" :alt="blok.image.alt" class="rounded-t-[20px]">
                <img :src="blok.numberimage.filename" :alt="blok.numberimage.alt" class="absolute right-[0%] bottom-[-90px] w-[70%]">
            </div>
            <div class="mt-14 lg:px-16 sm:px-16">
                <h1 class="text-headingclr text-4xl font-bold font-montserrat">{{ blok.heading }}</h1>
                <div class="mt-8">
                    <ul v-for="item in blok.section" class="border-t max-w-lg mb-8">
                        <li class="flex my-3">
                            <img :src="item.image.filename" :alt="item.image.alt" class="h-10 w-10 mt-2">
                            <div class="ml-3">
                                <h3 class="font-lato text-headingclr text-lg font-semibold">{{ item.title }}</h3>
                                <p class="font-lato text-sm font-normal max-w-xs mt-1 text-textcolor">{{ item.text }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
 
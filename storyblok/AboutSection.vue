<template>
    <div v-editable="blok" class="max-w-[90%] mx-auto mt-12 pb-20">
        <div class="grid lg:grid-cols-2 lg:grid-cols-2">
            <div class="self-center">
                <h1 class="font-bold text-5xl font-montserrat">{{ blok.heading }}</h1>
                <p class="text-bluetext font-bold text-lg max-w-sm mt-3 font-lato">{{ blok.bluetext }}</p>
                <p class="text-textcolor font-normal text-base max-w-md mt-2 font-lato">{{ blok.text }}</p>
                <div class="mt-6">
                    <ul v-for="item in blok.block" class="border-t max-w-xs">
                        <li class="flex items-center my-3">
                            <img :src="item.image.filename" :alt="item.image.alt">
                            <p class="text-xl font-medium ml-2 text-headingclr">{{ item.text }}</p>
                        </li>
                    </ul>
                </div>
                <button class="font-montserrat text-white bg-gradient-to-b from-btncolor-light shadow-lg
                    to-btncolor-dark font-bold rounded-lg text-sm px-8 py-3.5 text-center mt-5"
                    v-for="value in blok.action">
                        {{ value.text }}
                </button>
            </div>
            <div class="relative lg:mt-0 mt-14">
                <img :src="blok.dotsimage.filename" :alt="blok.dotsimage.alt" class="absolute left-[-57px] bottom-[-72px] w-[48%]">
                <img :src="blok.image.filename" :alt="blok.image.alt" class="rounded-t-[20px]  relative">
                <img :src="blok.numbreimage.filename" :alt="blok.numbreimage.alt" class="absolute  right-[0%] bottom-[-90px] w-[70%]">
            </div>
        </div>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
 
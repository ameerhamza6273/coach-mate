<template>
    <div v-editable="blok" class="max-w-6xl mx-auto py-10">
       <h1 class="font-bold text-5xl">{{ blok.heading }}</h1>
       <p class="text-bluetext font-bold text-lg max-w-sm mt-3">{{ blok.bluetext }}</p>
       <p class="text-textcolor font-normal text-base max-w-md mt-3">{{ blok.text }}</p>
       <div >
        <ul v-for="item in blok.block" class="mt-6">
            <li class="flex items-center">
                <img :src="item.image.filename" :alt="item.image.alt">
                <p class="text-xl font-medium ml-2">{{ item.text }}</p>
            </li>
        </ul>
       </div>
       <button class="text-white bg-gradient-to-b from-btncolor-light 
        to-btncolor-dark font-bold rounded-lg text-sm px-8 py-3.5 text-center mt-7" 
         v-for="value in blok.action">
             {{ value.text }}
        </button>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>
 
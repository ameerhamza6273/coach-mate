<template>
    <div v-editable="blok" class="max-w-[90%] mx-auto mt-28 pb-20 relative">
        <img :src="blok.image.filename" :alt="blok.image.alt" class="absolute right-[-10px] top-[-65px] w-[20%]">
        <h1 class="text-4xl font-bold text-center max-w-sm mx-auto">{{ blok.heading }}</h1>
        <div class="grid grid-cols-3 gap-10 mt-14">
            <div class="bg-cardsbackground p-4 rounded-[14px] mt-4" v-for="value in blok.section">
                <img :src="value.image.filename" :alt="value.image.alt" class="rounded-[13px]">
                <div class="p-4">
                    <h3 class="text-xl font-semibold">{{ value.title }}</h3>
                    <p class="font-normal text-sm text-textcolor mt-1">{{ value.text }}</p>
                    <button
                        class="text-cardsbtntext bg-cardsbtnbg font-bold rounded-full text-sm px-6 py-2 text-center mt-5"
                        v-for="btn in value.action">
                        {{ btn.text }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script setup>

defineProps({ blok: Object });

</script>
 
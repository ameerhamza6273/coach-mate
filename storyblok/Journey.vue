<template>
    <div v-editable="blok" class="max-w-[95%] mt-40 mb-28 py-14 pl-40 pr-14 relative bg-cardsbackground rounded-tr-[320px]">
        <img :src="blok.image.filename" :alt="blok.image.alt" class="absolute ml-[23%] w-[7%] top-[-180px]">
        <!-- main heading & text is here -->
        <h1 class="text-headingclr text-4xl font-montserrat font-bold text-center mr-20">{{ blok.heading }}</h1>
        <p class="font-vadodara text-base text-center text-textcolor font-normal leading-6 max-w-[815px] mt-10">{{ blok.text }}</p>
        <!--  cards is here  -->
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 mt-10">
            <div class="bg-white px-5 rounded-[14px] mt-4 py-9 relative" v-for="value in blok.section">
                <img :src="value.image.filename" :alt="value.image.alt" class="absolute h-10 w-10 top-[-6%] left-[-6%]">
                <h3 class="font-vadodara text-headingclr text-base font-semibold">{{ value.title }}</h3>
                <p class="font-vadodara font-normal text-sm text-textcolor mt-1">{{ value.text }}</p>
            </div>
        </div>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object });
</script>
 
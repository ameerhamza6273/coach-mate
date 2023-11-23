<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>
 
<template>
  <div class="bg-themebackground">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
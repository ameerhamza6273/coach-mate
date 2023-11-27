<script setup>
const story = await useAsyncStoryblok('about', { version: 'draft' })
</script>
 
<template>
  <div class="bg-themebackground">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
<script setup>
const story = await useAsyncStoryblok('services', { version: 'draft' })
</script>
 
<template>
  <div class="bg-themebackground">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
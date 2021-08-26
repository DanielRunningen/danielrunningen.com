<template>
   <main>
      <div class="p-5">
         <h1>{{ genre.title }}</h1>
         <nuxt-content :document="{ body: genre.body }" />
      </div>
      <Carousel :content="genre.data" :parentSlug="genre.slug" />
   </main>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const g = await $content('gallery', params.slug).fetch();
      return {
         genre: g,
      };
   },
};
</script>

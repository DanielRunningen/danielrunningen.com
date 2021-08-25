<template>
   <main>
      <div class="p-5">
         <h1>{{ g.title }}</h1>
         <nuxt-content :document="{ body: g.body }" />
      </div>
      <Carousel :content="g.data" parentSlug="gallery" />
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

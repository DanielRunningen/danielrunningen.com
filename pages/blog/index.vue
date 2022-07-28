<template>
   <main class="p-4">
      <h1 class="text-center">Blog Posts</h1>
      <div class="row g-3">
         <ContentCard v-for="p in posts" :key="p.slug" :content="p" />
      </div>
   </main>
</template>

<script>
export default {
   async asyncData({ $content }) {
      const p = await $content('blog').sortBy('createdAt', 'desc').fetch();

      return {
         posts: p,
      };
   },
   head() {
      const meta = {
         title: "Dan's Blog",
         description: this.posts[0].description,
         image:
            process.env.baseUrl +
            require(`~/assets/img/${this.posts[0].image}`),
      };
      return {
         title: meta.title,
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: meta.description,
            },
            { hid: 'og:title', name: 'og:title', content: meta.title },
            { hid: 'og:image', name: 'og:image', content: meta.image },
            { hid: 'og:site_name', name: 'og:site_name', content: meta.title },
            {
               hid: 'og:description',
               name: 'og:description',
               content: meta.description,
            },
            {
               hid: 'twitter:description',
               name: 'twitter:description',
               content: meta.description,
            },
            {
               hid: 'twitter:title',
               name: 'twitter:title',
               content: meta.title,
            },
            {
               hid: 'twitter:image',
               name: 'twitter:image',
               content: meta.image,
            },
         ],
      };
   },
};
</script>

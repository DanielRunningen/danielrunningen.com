<template>
   <main class="container-fluid p-4">
      <h1>Projects</h1>
      <div class="row g-3">
         <ContentCard v-for="p in projects" :key="p.slug" :content="p" />
      </div>
   </main>
</template>

<script>
export default {
   async asyncData({ $content }) {
      const p = await $content('projects').sortBy('createdAt', 'desc').fetch();

      return {
         projects: p,
      };
   },
   head() {
      const meta = {
         title: "Dan's Projects",
         image:
            process.env.baseUrl +
            require(`~/assets/img/${this.projects[0].image}.png`),
      };
      return {
         title: meta.title,
         meta: [
            { hid: 'og:title', name: 'og:title', content: meta.title },
            { hid: 'og:site_name', name: 'og:site_name', content: meta.title },
            { hid: 'og:image', name: 'og:image', content: meta.image },
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

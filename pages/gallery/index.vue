<template>
   <main class="p-4">
      <h1 class="text-center mb-4">Art Gallery</h1>
      <div class="card text-primary" v-for="g in genres" :key="g.slug">
         <h2 class="card-title my-3 px-3">{{ g.title }}</h2>
         <nuxt-content class="mb-2 px-3" :document="{ body: g.body }" />
         <Carousel :content="g.data" :parentSlug="g.slug" />
      </div>
   </main>
</template>

<script>
export default {
   async asyncData({ $content }) {
      const g = await $content('gallery').sortBy('order', 'desc').fetch();

      return {
         genres: g,
      };
   },
   head() {
      const g = this.genres[0];
      const img = g.data.find((d) => {
         return d.active;
      });
      const meta = {
         title: "Dan's Gallery",
         description: g.description,
         image:
            process.env.baseUrl +
            require(`~/assets/img/${g.slug}/${
               img.file ? img.file : img.name.replace(/\s+/g, '') + '.png'
            }`),
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

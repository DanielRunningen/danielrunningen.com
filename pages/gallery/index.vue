<template>
   <main>
      <div class="container-fluid px-0">
         <div v-for="g in genres" :key="g.slug">
            <div class="p-5 bg-secondary text-primary">
               <h2>{{ g.title }}</h2>
               <nuxt-content :document="{ body: g.body }" />
            </div>
            <Carousel :content="g.data" :parentSlug="g.slug" />
         </div>
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
         description: g.excerpt,
         image:
            process.env.baseUrl +
            require(`~/assets/img/${g.slug}/${
               img.file ? img.file : img.name.replace(/\s+/g, '')
            }.png`),
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

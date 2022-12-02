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
   head() {
      const img = this.genre.data.find((d) => {
         return d.active;
      });
      const meta = {
         title: this.genre.title,
         description: this.genre.description,
         image:
            process.env.baseUrl +
            require(`~/assets/img/${this.genre.slug}/${
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

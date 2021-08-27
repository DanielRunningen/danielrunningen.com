<template>
   <ContentArticle :content="project" />
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const p = await $content('projects', params.slug).fetch();

      return {
         project: p,
      };
   },
   head() {
      const meta = {
         title: this.project.title,
         description: this.project.description,
         image:
            process.env.baseUrl + require(`~/assets/img/${this.project.image}`),
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

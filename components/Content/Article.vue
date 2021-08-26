<template>
   <main class="px-5">
      <div class="row d-flex">
         <div class="col-lg-8">
            <h1 class="text-primary mt-4">{{ content.title }}</h1>
            <div class="fs-6 text-muted mb-3">
               Initialized
               <Date class="text-info" :dateStr="content.createdAt" /> | Revised
               <Date class="text-info" :dateStr="content.updatedAt" />
            </div>
         </div>
         <div class="col-lg-4 mt-lg-auto mt-3 h3 px-3" v-if="content.toc">
            This Page
         </div>
      </div>
      <div class="row d-flex">
         <nav class="col-lg-4 order-lg-2">
            <div class="position-sticky top-0">
               <hr class="mt-2 mb-0" />
               <ul class="toc" v-if="content.toc">
                  <li
                     v-for="link of content.toc"
                     :key="link.id"
                     :class="`toc${link.depth}`"
                  >
                     <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                  </li>
               </ul>
               <hr class="my-0" />
            </div>
         </nav>
         <div class="col-lg-8 order-lg-1">
            <div class="lead m-3">{{ content.description }}</div>
            <img
               :src="require(`~/assets/img/${content.image}.png`)"
               :alt="content.imageAlt"
               class="mb-4 w-100"
            />
            <nuxt-content :document="{ body: content.body }" />
         </div>
         <Tags
            class="text-info order-3"
            v-if="content.tags"
            :tags="content.tags"
         />
      </div>
      <ToTop />
   </main>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

export default {
   head() {
      const image =
         process.env.baseUrl +
         require(`~/assets/img/${this.content.image}.png`);
      return {
         title: this.content.title,
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: this.content.description,
            },
            { hid: 'og:title', name: 'og:title', content: this.content.title },
            {
               hid: 'og:description',
               name: 'og:description',
               content: this.content.description,
            },
            {
               hid: 'og:site_name',
               name: 'og:site_name',
               content: this.content.title,
            },
            { hid: 'og:image', name: 'og:image', content: image },
            {
               hid: 'twitter:title',
               name: 'twitter:title',
               content: this.content.title,
            },
            {
               hid: 'twitter:description',
               name: 'twitter:description',
               content: this.content.description,
            },
            { hid: 'twitter:image', name: 'twitter:image', content: image },
         ],
      };
   },
   mounted() {
      Prism.highlightAll();
   },
   props: {
      content: {
         type: Object,
         require: true,
         validator: function (value) {
            return [
               'title',
               'description',
               'image',
               'imageAlt',
               'createdAt',
               'updatedAt',
               'toc',
               'body',
            ].every((p) => {
               return p in value;
            });
         },
      },
   },
};
</script>

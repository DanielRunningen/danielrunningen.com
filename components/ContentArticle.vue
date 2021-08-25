<template>
   <main class="container-fluid">
      <div class="row d-flex">
         <div class="col-lg-8">
            <h1 class="text-primary pt-5">{{ content.title }}</h1>
            <div class="fs-6 text-muted">
               Initialized
               <Date class="text-info" :dateStr="content.createdAt" /> | Revised
               <Date class="text-info" :dateStr="content.updatedAt" />
            </div>
         </div>
         <div class="col-lg-4 mt-lg-auto mt-4 h3 px-3">This Page</div>
      </div>
      <div class="row d-flex">
         <nav class="col-lg-4 order-lg-2">
            <div class="position-sticky top-0">
               <hr class="mt-2 mb-0" />
               <ul class="toc">
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
            <div class="lead p-3">{{ content.description }}</div>
            <img
               :src="require(`~/assets/img/${content.image}.png`)"
               :alt="content.imageAlt"
               class="mb-4 w-100"
            />
            <nuxt-content :document="{ body: content.body }" />
         </div>
         <Tags class="text-info order-3" :tags="content.tags" />
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
               content: this.content.description
            },
            { hid: 'og:title', name: 'og:title', content: this.content.title },
            {
               hid: 'og:description',
               name: 'og:description',
               content: this.content.description
            },
            {
               hid: 'og:site_name',
               name: 'og:site_name',
               content: this.content.title
            },
            { hid: 'og:image', name: 'og:image', content: image },
            {
               hid: 'twitter:title',
               name: 'twitter:title',
               content: this.content.title
            },
            {
               hid: 'twitter:description',
               name: 'twitter:description',
               content: this.content.description
            },
            { hid: 'twitter:image', name: 'twitter:image', content: image }
         ]
      };
   },
   mounted() {
      Prism.highlightAll();
   },
   props: {
      content: {
         require: true
      }
   }
};
</script>

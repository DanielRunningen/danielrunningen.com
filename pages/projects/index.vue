<template>
   <main class="container-fluid p-4">
      <div class="row g-3">
         <div
            class="card container-fluid p-0"
            v-for="p in projects"
            :key="p.slug"
         >
            <div class="row g-0">
               <div class="col-md-4">
                  <img
                     :src="require(`~/assets/img/${p.image}.png`)"
                     class="card-img-top"
                     :alt="p.imageAlt"
                     style="object-fit: cover; height: 100%"
                  />
               </div>
               <div class="col-md-8">
                  <div class="d-flex flex-column h-100">
                     <div class="card-body flex-shrink-0">
                        <div class="card-title h2 text-primary">
                           {{ p.title }}
                        </div>
                        <Tags
                           class="card-subtitle text-info m-0 pb-3"
                           :tags="p.tags"
                        />
                        <nuxt-content
                           class="card-text m-0"
                           :document="{ body: p.excerpt }"
                        />
                     </div>
                     <div
                        class="
                           card-footer
                           d-flex
                           justify-content-between
                           mt-auto
                        "
                     >
                        <Date :dateStr="p.createdAt" />
                        <NuxtLink :to="p.path">Read More</NuxtLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>

<script>
export default {
   async asyncData({ $content }) {
      const p = await $content('projects').sortBy('createdAt', 'desc').fetch();

      return {
         projects: p
      };
   },
   head() {
      const meta = {
         title: "Dan's Projects",
         image:
            process.env.baseUrl +
            require(`~/assets/img/${this.projects[0].image}.png`)
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
               content: meta.title
            },
            { hid: 'twitter:image', name: 'twitter:image', content: meta.image }
         ]
      };
   }
};
</script>

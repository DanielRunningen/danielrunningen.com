<template>
   <div class="card container-fluid p-0">
      <div class="row g-0">
         <div class="col-md-4">
            <img
               :src="require(`~/assets/img/${content.image}.png`)"
               class="card-img-top"
               :alt="content.imageAlt"
               style="object-fit: cover; height: 100%"
            />
         </div>
         <div class="col-md-8">
            <div class="d-flex flex-column h-100">
               <div class="card-body flex-shrink-0">
                  <div class="card-title h2 text-primary">
                     {{ content.title }}
                  </div>
                  <Tags
                     v-if="content.tags"
                     class="card-subtitle text-info m-0 pb-3"
                     :tags="content.tags"
                  />
                  <div class="card-text m-0">
                     <nuxt-content
                        v-if="content.excerpt"
                        :document="{ body: content.excerpt }"
                     />
                     <div v-else>
                        {{ content.description }}
                     </div>
                  </div>
               </div>
               <div class="card-footer d-flex justify-content-between mt-auto">
                  <Date :dateStr="content.createdAt" />
                  <NuxtLink :to="content.path">Read More</NuxtLink>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
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
            ].every((p) => {
               return p in value;
            });
         },
      },
   },
};
</script>

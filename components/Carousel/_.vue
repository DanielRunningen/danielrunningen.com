<template>
   <div
      class="carousel slide carousel-fade carousel-dark bg-primary"
      :id="parentSlug"
      data-bs-ride="carousel"
      data-bs-interval="10000"
   >
      <div class="carousel-inner">
         <CarouselItem
            v-for="i in content"
            :key="i.name"
            :item="i"
            :parent="parentSlug"
         />
         <button
            class="carousel-control-prev"
            type="button"
            :data-bs-target="`#${parentSlug}`"
            data-bs-slide="prev"
         >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
         </button>
         <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="`#${parentSlug}`"
            data-bs-slide="next"
         >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
         </button>
      </div>
   </div>
</template>

<script>
const nonZeroLength = function (value) {
   return value.length > 0;
};

export default {
   props: {
      content: {
         type: Array,
         require: true,
         validator: nonZeroLength,
      },
      parentSlug: {
         type: String,
         require: true,
         validator: nonZeroLength,
      },
   },
};
</script>

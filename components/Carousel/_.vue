<template>
   <div
      class="carousel slide carousel-fade carousel-dark bg-primary"
      :id="id"
      data-bs-ride="carousel"
      data-bs-interval="10000"
   >
      <div class="carousel-inner">
         <slot />
         <button
            class="carousel-control-prev"
            type="button"
            :data-bs-target="'#' + id"
            data-bs-slide="prev"
         >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
         </button>
         <button
            class="carousel-control-next"
            type="button"
            :data-bs-target="'#' + id"
            data-bs-slide="next"
         >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
         </button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      id: {
         type: String,
         require: true,
         validator: function (value) {
            return value.length > 0;
         },
      },
   },
};
</script>

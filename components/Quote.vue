<template>
   <figure class="bg-primary text-secondary p-4 rounded">
      <svg class="fill-secondary" height="25" viewBox="0 0 7 5">
         <polygon points="2,0 4,0 1,5 0,5" />
         <polygon points="5,0 7,0 4,5 3,5" />
      </svg>
      <blockquote class="blockquote px-5">
         {{ text }}
      </blockquote>
      <svg class="fill-secondary d-block ms-auto" height="25" viewBox="0 0 7 5">
         <polygon points="2,0 4,0 1,5 0,5" />
         <polygon points="5,0 7,0 4,5 3,5" />
      </svg>
      <figcaption class="blockquote-footer">
         <slot />
      </figcaption>
   </figure>
</template>

<script>
export default {
   props: {
      text: {
         type: String,
         require: true,
         validator: function (value) {
            return value.length > 0;
         },
      },
   },
};
</script>

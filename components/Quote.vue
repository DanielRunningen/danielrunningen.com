<template>
   <figure class="bg-primary text-secondary my-5 px-4 pt-4 pb-3 rounded">
      <svg
         class="fill-secondary"
         style="opacity: 0.5"
         height="25"
         viewBox="0 0 7 5"
      >
         <polygon points="2,0 4,0 1,5 0,5" />
         <polygon points="5,0 7,0 4,5 3,5" />
      </svg>
      <blockquote class="blockquote px-5">
         {{ text }}
      </blockquote>
      <figcaption class="blockquote-footer mb-0 mx-3 px-5">
         <slot />
      </figcaption>
      <svg
         class="fill-secondary d-block ms-auto mb-2"
         style="opacity: 0.5"
         height="25"
         viewBox="0 0 7 5"
      >
         <polygon points="2,0 4,0 1,5 0,5" />
         <polygon points="5,0 7,0 4,5 3,5" />
      </svg>
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

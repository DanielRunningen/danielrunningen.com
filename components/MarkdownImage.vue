<template>
   <img :src="imgSrc" :alt="alt" :style="`height: ${h}; width: ${w}`" />
</template>

<script>
const strValidator = function (value) {
   return value.length > 0;
};

export default {
   computed: {
      imgSrc: function () {
         if (this.src.startsWith('http')) {
            return this.src;
         } else {
            return require(`~/assets/img/${this.src}`);
         }
      }
   },
   props: {
      alt: {
         type: String,
         require: true,
         validator: strValidator
      },
      h: {
         type: String,
         require: false,
         default: 'auto',
         validator: strValidator
      },
      src: {
         type: String,
         require: true,
         validator: strValidator
      },
      w: {
         type: String,
         require: false,
         default: 'auto',
         validator: strValidator
      }
   }
};
</script>

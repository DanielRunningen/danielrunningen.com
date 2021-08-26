<template>
   <img :src="imgSrc" :alt="alt" :style="`height: ${h}; width: ${w}`" />
</template>

<script>
const nonZeroLength = function (value) {
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
      },
   },
   props: {
      alt: {
         type: String,
         require: true,
         validator: nonZeroLength,
      },
      h: {
         type: String,
         require: false,
         default: 'auto',
         validator: nonZeroLength,
      },
      src: {
         type: String,
         require: true,
         validator: nonZeroLength,
      },
      w: {
         type: String,
         require: false,
         default: 'auto',
         validator: nonZeroLength,
      },
   },
};
</script>

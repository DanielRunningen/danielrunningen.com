<template>
   <div>
      <Navbar />
      <Nuxt />
      <Footer />
   </div>
</template>

<script>
export default {
   head() {
      const image =
         process.env.baseUrl + require('~/assets/img/FauxCoralBanner.png');
      return {
         meta: [
            { hid: 'og:image', name: 'og:image', content: image },
            { hid: 'twitter:image', name: 'twitter:image', content: image },
         ],
      };
   },
};
</script>

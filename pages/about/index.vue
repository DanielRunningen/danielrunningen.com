<template>
   <main>
      <div class="h1 text-center bg-secondary p-5 m-0">Coming soon!</div>
   </main>
</template>

<script>
const meta = {
   title: 'About Dan'
};

export default {
   head: {
      title: meta.title,
      meta: [
         { hid: 'og:title', name: 'og:title', content: meta.title },
         { hid: 'og:site_name', name: 'og:site_name', content: meta.title },
         { hid: 'twitter:title', name: 'twitter:title', content: meta.title }
      ]
   }
};
</script>

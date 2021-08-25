<template>
   <main>
      <div class="text-center bg-secondary p-5 m-0">
         <div class="h1">404 - Page Not Found</div>
         <div class="fs-2 p-5">
            The page <code>{{ $route.path }}</code> doesn't exist or has moved.
         </div>
         <div class="fs-2">Go <a @click="$router.go(-1)">back</a>?</div>
      </div>
   </main>
</template>

<script>
const meta = {
   title: 'Page Not Found',
};

export default {
   head: {
      title: meta.title,
      meta: [
         { hid: 'og:title', name: 'og:title', content: meta.title },
         { hid: 'og:site_name', name: 'og:site_name', content: meta.title },
         { hid: 'twitter:title', name: 'twitter:title', content: meta.title },
      ],
   },
};
</script>

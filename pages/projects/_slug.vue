<template>
   <Article :content="project" />
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const p = await $content('projects', params.slug).fetch();

      return {
         project: p,
      };
   },
};
</script>

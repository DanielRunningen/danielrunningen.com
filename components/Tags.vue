<template>
   <ul class="list-inline">
      <li class="list-inline-item" v-for="t in visibleTags" :key="t.text">
         {{ t.text }}
      </li>
   </ul>
</template>

<script>
export default {
   computed: {
      visibleTags: function () {
         return this.tags.filter((t) => {
            return t.show;
         });
      }
   },
   props: {
      tags: {
         default: [],
         require: true
      }
   }
};
</script>

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
      },
   },
   props: {
      tags: {
         type: Array,
         require: true,
         validator: function (value) {
            return value.length > 0;
         },
      },
   },
};
</script>

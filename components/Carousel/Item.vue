<template>
   <div :class="{ 'carousel-item': true, active: item.active }">
      <img
         class="d-block w-100 py-3 bg-primary"
         style="height: 65vh"
         :src="require(`~/assets/img/${src}.png`)"
         :alt="item.name"
         onContextMenu="return false;"
      />
      <div class="p-5" style="min-height: 35vh">
         <div class="fs-2">{{ item.name }}</div>
         <div class="fs-5 text-info">
            {{ `${item.date} - ${item.medium}` }}
         </div>
         <p class="m-0">{{ item.description }}</p>
      </div>
   </div>
</template>

<script>
export default {
   computed: {
      src: function () {
         return `${this.parent}/${
            this.item.file ? this.item.file : this.item.name.replace(/\s+/g, '')
         }`;
      },
   },
   props: {
      item: {
         type: Object,
         require: true,
         validator: function (value) {
            return ['name', 'date', 'medium', 'description'].every((p) => {
               return p in value;
            });
         },
      },
      parent: {
         type: String,
         require: true,
         validator: function (value) {
            return value.length > 0;
         },
      },
   },
};
</script>

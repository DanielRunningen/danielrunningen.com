<template>
   <div class="carousel-item">
      <img
         class="d-block w-100 py-3 bg-primary"
         style="height: 65vh"
         :src="require(`~/assets/img/${src}.png`)"
         :alt="name"
         onContextMenu="return false;"
      />
      <div class="bg-secondary p-5" style="min-height: 35vh">
         <div class="fs-2">{{ name }}</div>
         <div class="fs-5 text-info">{{ details }}</div>
         <p class="m-0">{{ description }}</p>
      </div>
   </div>
</template>

<script>
const strRequirements = {
   type: String,
   require: true,
   validator: function (value) {
      return value.length > 0;
   },
};

export default {
   props: {
      name: strRequirements,
      src: strRequirements,
      description: strRequirements,
      details: strRequirements,
   },
};
</script>

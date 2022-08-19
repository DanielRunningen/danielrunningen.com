<template>
   <div class="container-fluid m-3">
      <h1>Testing page</h1>
      <div
         id="target"
         v-on:mouseover="mouseOver"
         v-on:mouseleave="mouseLeave"
         class="text-center m-5 p-5 bg-secondary text-transparent"
         aria-live="polite"
      >
         Hover over me!
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      mouseOver: (event) => {
         const e = event.srcElement;
         e.classList.add('bg-success');
         e.classList.remove('bg-secondary');
         e.innerText = 'When you hover over me, you learn more!';
      },
      mouseLeave: function (event) {
         const e = event.srcElement;
         e.classList.add('bg-secondary');
         e.classList.remove('bg-success');
         e.innerText = 'Hover over me!';
      },
   },
};
</script>

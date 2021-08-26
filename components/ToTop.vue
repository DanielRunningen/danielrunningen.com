<template>
   <div class="d-flex position-sticky bottom-0">
      <i
         id="toTop"
         v-on:click="scrollToTop"
         aria-label="Scroll to Top"
         class="
            bi-chevron-up
            text-info
            fs-1
            fw-bold
            bg-secondary
            px-2
            rounded-circle
            ms-auto
            mb-2
            right-0
         "
      />
   </div>
</template>

<style lang="scss">
#toTop {
   opacity: 0;
   &.in {
      animation: in 0.25s linear forwards;
      @keyframes in {
         0% {
            opacity: 0;
         }
         100% {
            opacity: 1;
         }
      }
   }
   &.out {
      animation: out 0.25s linear forwards;
      @keyframes out {
         0% {
            opacity: 1;
         }
         100% {
            opacity: 0;
         }
      }
   }
}
</style>

<script>
export default {
   beforeMount() {
      window.addEventListener('scroll', this.toggleToTopFab);
   },
   beforeDestroy() {
      window.removeEventListener('scroll', this.toggleToTopFab);
   },
   methods: {
      scrollToTop() {
         window.scrollTo(0, 0);
      },
      toggleToTopFab() {
         const btn = document.querySelector('#toTop');
         if (window.pageYOffset > 500) {
            btn.classList.remove('out');
            btn.classList.add('in');
         } else {
            btn.classList.remove('in');
            btn.classList.add('out');
         }
      },
   },
};
</script>

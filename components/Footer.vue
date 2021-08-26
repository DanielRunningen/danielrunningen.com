<template>
   <footer id="footer" class="bg-primary py-5">
      <div class="container-fluid text-secondary text-center">
         <div class="row">
            <a
               class="col text-end"
               aria-label="Dan's GitHub Profile"
               href="https://github.com/DanielRunningen"
            >
               <i class="bi-github fs-1 align-middle" />
            </a>
            <NuxtLink class="col-4" to="/">
               <Logo class="align-middle" :height="48" />
            </NuxtLink>
            <a
               class="col text-start"
               aria-label="Dan's LinkedIn Profile"
               href="https://www.linkedin.com/in/daniel-runningen"
            >
               <i class="bi-linkedin fs-1 align-middle" />
            </a>
         </div>
         <div class="pt-5 mt-5">
            Copyright © 2010 - {{ currentYear }} Daniel Runningen<br />All
            rights reserved.
         </div>
      </div>
   </footer>
</template>

<script>
export default {
   computed: {
      currentYear: function () {
         return new Date().getFullYear();
      },
   },
};
</script>

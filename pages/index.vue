<template>
   <main class="text-center">
      <div class="position-relative overflow-hidden">
         <img
            class="img-fluid"
            src="~/assets/img/CoralBanner.png"
            alt="Macro image of coral"
            style="min-height: 500px; object-fit: cover"
         />
         <div
            class="
               w-100
               bg-primary
               fs-1
               py-3
               position-absolute
               top-50
               translate-middle-y
            "
         >
            &nbsp;
         </div>
         <Logo
            class="position-absolute start-50 bottom-50 translate-middle-x"
            :height="128"
         />
         <div
            class="
               fs-1
               text-uppercase
               pt-2
               pb-4
               fw-bolder
               text-secondary
               bg-primary
               w-100
               position-absolute
               top-50
            "
         >
            Daniel Runningen
         </div>
      </div>
      <div class="row-col fs-1 py-5">I like to make things.</div>
      <div class="row pb-5 mx-5">
         <router-link class="col text-primary" to="/blog">
            <i class="bi-file-post-fill fs-1" />
            <div class="fs-3">Blog</div>
         </router-link>
         <router-link class="col text-primary" to="/projects">
            <i class="bi-terminal-fill fs-1" />
            <div class="fs-3">Projects</div>
         </router-link>
         <router-link class="col text-primary" to="/gallery">
            <i class="bi-camera-fill fs-1" />
            <div class="fs-3">Gallery</div>
         </router-link>
      </div>
   </main>
</template>

<script>
export default {
   layout: 'FooterOnly',
};
</script>

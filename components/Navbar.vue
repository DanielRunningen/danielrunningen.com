<template>
   <nav class="navbar navbar-expand-md navbar-dark bg-primary px-3">
      <NuxtLink class="navbar-brand d-md-none px-3" to="/">
         <Logo />
      </NuxtLink>
      <button
         class="navbar-toggler border-0"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarToggler"
         aria-controls="navbarToggler"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
         <i class="bi-list fs-1 align-middle" />
      </button>
      <div id="navbarToggler" class="collapse navbar-collapse">
         <ul class="navbar-nav ms-auto me-auto">
            <li
               v-for="navItem in navTargets"
               :key="navItem.route"
               class="nav-item px-2"
            >
               <NuxtLink
                  class="nav-link text-end"
                  :class="{ active: navItem.route == $route.path }"
                  :to="navItem.route"
                  >{{ navItem.name }}</NuxtLink
               >
            </li>
         </ul>
      </div>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         navTargets: [
            { name: 'Home', route: '/' },
            { name: 'About', route: '/about' },
            { name: 'Projects', route: '/projects' },
            { name: 'Gallery', route: '/gallery' },
            { name: 'Blog', route: '/blog' }
         ]
      };
   }
};
</script>

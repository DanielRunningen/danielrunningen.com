<template>
   <main>
      <div class="container-fluid px-0">
         <div class="p-5 bg-secondary text-primary">
            <div class="h1">Photography</div>
            <p>{{ meta.description }}</p>
            <p>
               My current camera is a
               <a
                  href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-dslr-and-mirrorless-cameras/dslr/eos-rebel-t3"
                  >Canon EOS REBEL T3</a
               >
               with a Quantaray 28-200mm macro lens, both of which I've had for
               several years. Although, some of my favorite photos came from my
               old FUJIFILM FinePix Z5FD.
            </p>
         </div>
         <Carousel id="photographyCarousel">
            <CarouselItem
               v-for="photo in photos"
               :key="photo.file"
               :class="{ active: photo.active }"
               :src="`photography/${photo.file}`"
               :name="photo.name"
               :details="photo.date + ' - ' + photo.camera"
               :description="photo.description"
            />
         </Carousel>
      </div>
   </main>
</template>

<script>
const photos = require('~/assets/data/photos.json');
const meta = {
   title: "Dan's Gallery",
   description:
      'I spend most of my days in front of a computer, so when I get the opportunity, I tend to photograph organic things. Wild animals and insects challenge both my accuracy and patience, since I prefer to ajdust my camera settings manually.',
   image:
      process.env.baseUrl +
      require(`~/assets/img/photography/${
         photos.filter((p) => {
            return p.active;
         })[0].file
      }.png`)
};

export default {
   data() {
      return {
         meta: meta,
         photos: photos
      };
   },
   head() {
      return {
         title: meta.title,
         meta: [
            {
               hid: 'description',
               name: 'description',
               content: meta.description
            },
            { hid: 'og:title', name: 'og:title', content: meta.title },
            { hid: 'og:image', name: 'og:image', content: meta.image },
            { hid: 'og:site_name', name: 'og:site_name', content: meta.title },
            {
               hid: 'og:description',
               name: 'og:description',
               content: meta.description
            },
            {
               hid: 'twitter:description',
               name: 'twitter:description',
               content: meta.description
            },
            {
               hid: 'twitter:title',
               name: 'twitter:title',
               content: meta.title
            },
            { hid: 'twitter:image', name: 'twitter:image', content: meta.image }
         ]
      };
   }
};
</script>

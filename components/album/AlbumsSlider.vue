<template>
  <div>
    <swiper v-if="display == 'slider'" class="swiper" :options="swiperOption">
      <Album
        v-for="album in albums"
        :key="album.id"
        :title="album.name"
        :isSwiper="true"
        :cover="album.cover"
        :preview="album.preview"
      ></Album>
      <!-- <AlbumFake
        v-for="album in albums"
        :key="album.id"
        v-bind:text="album.name"
        :isSwiper="true"
      ></AlbumFake> -->
      <router-link
        to="albums/create"
        tag="div"
        class="swiper-slide px-2 w-full "
      >
        <div class="createAlbum"><h2>Créer un album</h2></div>
      </router-link>
    </swiper>
    <div class="swiper-pagination mx-auto left-50 mt-4" slot="pagination"></div>

  </div>
</template>

<script>
import Album from "@/components/album/Album";
import AlbumFake from "@/components/album/AlbumFake";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "albumsSlider",
  props: {
    albums: {
      type: Array,
      default: "",
    },
  },
  components: {
    Album,
    AlbumFake,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      display: "slider",
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        mousewheel: true,
        // loop: true,
        freeMode: true,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.createAlbum {
  @apply flex justify-center items-center rounded-2xl cursor-pointer;
  border: 2px rgb(200, 200, 200) dashed;
  height: 400px;
  transition: transform 0.2s;

  h2 {
    @apply font-bold;
    color: rgb(200, 200, 200);
  }

  &:hover {
    @apply border-red;
    transform: scale(0.97);

    h2 {
      @apply text-red;
    }
  }
}
</style>


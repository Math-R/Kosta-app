<template>
  <div class="container">
    <h1 class="title">Vos albums</h1>
    <div class="albumContainer flex-wrap">
      <!-- <Album
        v-for="album in albums"
        :key="album.id"
        v-bind:text="album.name"
      ></Album>
      <router-link
        to="albums/create"
        tag="div"
        class="createAlbum rounded-2xl px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <p>Créer un album</p>
      </router-link> -->
    </div>

    <swiper class="swiper" :options="swiperOption">
      <Album
        v-for="album in albums"
        :key="album.id"
        v-bind:text="album.name"
      ></Album>
      <router-link
        to="albums/create"
        tag="div"
        class="createAlbum swiper-slide rounded-2xl px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <p>Créer un album</p>
      </router-link>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Album from "@/components/common/Album";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "albums",
  components: {
    Album,
    Swiper,
    SwiperSlide,
  },
  middleware: "auth",
  data() {
    return {
      albums: [],
      swiperOption: {
		slidesPerView: 4,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
		freeMode: true,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
		  dynamicBullets: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
          },
          900: {
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
  async fetch() {
    const { data } = await this.$axios.get("http://localhost:8000/api/albums");

    this.albums = data.data;
  },
};
</script>

<style lang="scss" scoped>
.title {
  @apply text-2xl font-bold mt-8 mb-4;
}

.albumContainer {
  @apply flex;

  .createAlbum {
    border: 3px gray dashed;
  }
}
</style>


<template>
  <section v-if="album.medias" class="album py-10">
    <div class="container">
      <div class="text-7xl text-center font-bold mb-10">
        {{ album.name }}
      </div>
      <div class="album-short flex mb-20 items-center">
        <div class="w-6/12">
          <img :src="album.medias[0].photos[0].url" alt="" class="rounded-xl" />
        </div>
        <div class="w-6/12 pl-8">
          <div class="text-5xl">
            Du {{ startDate }} au {{ endDate }}
            {{ album.description }}
          </div>
        </div>
      </div>
      <div v-for="(group, index) in album.medias" :key="index">
        <div class="text-6xl text-center mb-20">
          {{ group.titre }}
        </div>
        <div v-if="!(index % 2)" class="masonry mx-auto w-10/12 mb-20">
          <div
            class="bg-center bg-no-repeat bg-cover rounded-xl"
            v-for="(photo, index) in group.photos"
            :style="{ backgroundImage: `url(${photo.url})` }"
            :key="index"
          ></div>
        </div>

        <swiper v-if="index % 2" :options="swiperOption" class="swiper">
          <div
            class="swiper-slide w-1/3"
            v-for="(photo, index) in group.photos"
            :key="index"
          >
            <div
              class="bg-cover bg-center bg-no-repeat w-full"
              :style="{ backgroundImage: `url(${photo.url})`, height: '500px' }"
            ></div>
          </div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import lsmoment from "moment";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import '~/swiper/swiper-bundle.css'
// import "swiper.scss";
import "./../../assets/css/swipper.css";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      album: {},
      swiperOption: {
        slidesPerView: 2,
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
      },
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `${process.env.BASE_URL}/api/album/${this.$route.params.name}`
    );
    this.album = data.data;
  },
  methods: {
    width() {
      return Math.floor(Math.random() * 4) + 1;
    },
  },
  computed: {
    startDate() {
      return lsmoment("2021-06-11T00:00:00+0100").format("D");
    },
    endDate() {
      lsmoment.locale("fr");
      return lsmoment("2021-06-14T00:00:00+0100").format("D MMMM");
    },
  },
};
</script>
<style lang="scss" scoped>
.masonry {
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  grid-auto-rows: minmax(20em, auto);
  grid-auto-flow: dense;

  div:nth-child(3n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  div:nth-child(5n) {
    grid-column: span 2;
  }

  div:nth-child(6n) {
    grid-row: span 2;
    grid-column: span 1;
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

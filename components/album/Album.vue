<template>
  <div :class="['px-2 w-full', isSwiper ? 'swiper-slide ' : '']">
    <div :class="['album', size]">
      <h2>{{ text }}</h2>
      <div class="absolute w-full bottom-0 flex p-2">
        <div
          v-for="img in albums.img"
          :key="img.id"
          class="bg-cover w-1/4 h-10 mr-2 rounded-xl"
          :style="{ backgroundImage: `url(${img})` }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  data() {
    return {
      albums: {
        img: [
          "https://www.fond-ecran-hd.net/Public/uploads/2019-01-14/thumbs-1/703.jpg",
          "https://i.pinimg.com/originals/92/94/81/929481d2c482611e87bcfafaf1020ef6.jpg",
          "https://images5.alphacoders.com/372/thumb-1920-372649.jpg",
          "https://www.izoa.fr/img/p/1/3/2/7/2/13272-large.jpg",
        ],
      },
    };
  },
  props: {
    text: {
      type: String,
    },
    size: {
      type: String,
      default: "",
    },
    isSwiper: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.album {
  @apply relative bg-cover rounded-xl;
  background-image: url("https://www.fond-ecran-hd.net/Public/uploads/2019-01-14/thumbs-1/703.jpg");
  box-shadow: inset 0px 30px 15px -10px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s;
  height: 400px;

  &.small {
    height: 200px;
  }

  &:hover {
    transform: scale(0.97);
  }

  h2 {
    @apply font-bold text-2xl p-4;
    color: white;

  }
}
</style>

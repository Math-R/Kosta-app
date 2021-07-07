<template>
  <div :class="['px-2 w-full', isSwiper ? 'swiper-slide ' : '']">
    <div
      :class="['album cursor-pointer', size]"
      @click="$router.push('albums/test')"
      :style="{ backgroundImage: `url('${cover}')` }"
    >
      <h2>{{ title }}</h2>
      <div class="absolute w-full bottom-0 flex p-2">
        <div
          v-for="img in preview"
          :key="img.id"
          class="bg-cover w-1/4 h-10 mr-2 rounded-xl"
          :style="{ backgroundImage: `url('${img}')` }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  data() {
    return {};
  },
  props: {
    title: {
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
    preview: {
      type: Object,
      default: {},
    },
    cover: {
      type: String,
      default: "",
    },
  },
  mounted() {
    console.log(this.preview);
  },
};
</script>

<style lang="scss" scoped>
.album {
  @apply relative bg-cover rounded-xl;
  // background-image: url("~@/assets/images/1.jpg");
  box-shadow: inset 0px 60px 15px -10px rgba(0, 0, 0, 0.4);
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

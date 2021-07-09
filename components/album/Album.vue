<template>
  <div :class="['px-2 w-full', isSwiper ? 'swiper-slide ' : '']">
    <div class="relative">
      <div v-on:click="deleteAlbum" class="deleteAlbum">
        <font-awesome-icon :icon="['fas', 'trash']" />
      </div>
      <div
        :class="['album cursor-pointer', size]"
        @click="$router.push(`albums/${album.slug}`)"
        :style="{ backgroundImage: `url('${album.cover}')` }"
      >
        <h2>{{ album.name }}</h2>
        <div class="absolute w-full bottom-0 flex p-2">
          <div
            v-for="img in album.preview"
            :key="img.id"
            class="bg-cover w-1/4 h-10 mr-2 rounded-xl"
            :style="{ backgroundImage: `url('${img}')` }"
          />
        </div>
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
    album: {
      type: Object,
      default: "",
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
  methods: {
    deleteAlbum() {
      this.$axios.delete(
        process.env.BASE_URL + "/api/album/delete/" + this.album.id
      );

      this.$store.commit("albums/removeAlbum", this.album.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.deleteAlbum {
  @apply z-10 absolute right-0 h-6 w-6 bg-red rounded-full flex items-center justify-center text-white transform -translate-y-2 translate-x-1 cursor-pointer;
}

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

    .deleteAlbum {
      display: block;
    }
  }

  h2 {
    @apply font-bold text-2xl p-4;
    color: white;
  }
}
</style>

<template>
  <div :class="['px-2 w-full', isSwiper ? 'swiper-slide ' : '']">
      <div class="deleteAlbum" v-on:click="deleteAlbum">Supprimer</div>
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
    }
  },
  methods: {
    deleteAlbum() {
      this.$axios.delete(
        "http://localhost:8000/api/album/delete/" + this.album.slug,
      );

    this.$store.commit("albums/removeAlbum", this.album.id);
    },
  }
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
  .deleteAlbum {
    @apply hidden absolute right-0;
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

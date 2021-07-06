<template>
  <section class="albums relative h-full">
    <div class="container mt-8">
      <h1>Vos albums</h1>
      <div class="filter">
        <div class="sliderFilter mr-4" v-on:click="display = 'slider'">
          <font-awesome-icon :icon="['fa', 'bars']" size="2x" class="rotateSvg"/>
        </div>
        <div v-on:click="display = 'grid'">
          <font-awesome-icon :icon="['fa', 'th']" size="2x" />
        </div>
      </div>

      <AlbumsSlider v-if="display == 'slider'" :albums="albums" />
      <AlbumsGrid v-if="display == 'grid'" :albums="albums" />



    </div>
    <router-link to="albums/create" tag="div" class="createAlbum bottom-10 right-10 cursor-pointer">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </router-link>
  </section>

</template>

<script>
import Album from "@/components/album/Album";
import AlbumsSlider from "@/components/album/AlbumsSlider";
import AlbumsGrid from "@/components/album/AlbumsGrid";

export default {
  name: "albums",
  components: {
    Album,
    AlbumsSlider,
    AlbumsGrid,
  },
  data() {
    return {
      albums: [],
      display: "slider",
    };
  },
  async fetch() {
    const { data } = await this.$axios.get("http://localhost:8000/api/albums");
    this.albums = data.data;
  },
};
</script>

<style lang="scss" scoped>

// .albums {
//     background: url("~assets/images/album_screen.svg");
//     min-height: calc(100vh - 76px);
// }
.filter {
  @apply flex -mt-8 float-right;
  color: #c85353;

  .rotateSvg {
    transform: rotate(90deg);
  }
}

.createAlbum {
    @apply flex justify-center items-center fixed  bg-red text-white rounded-full;
    height: 50px;
    width: 50px;
    transition: .2s;

    &:hover {
        @apply cursor-pointer;
    }
}
</style>


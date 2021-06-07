<template>
  <div class="container mt-8">
    <h1>Vos albums</h1>
    <div class="filter">
      <div class="sliderFilter" v-on:click="display = 'slider'">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span></span>
      <div v-on:click="display = 'grid'">
        <font-awesome-icon :icon="['fas', 'grip-horizontal']" size="2x" />
      </div>
    </div>

    <AlbumsSlider v-if="display == 'slider'" :albums="albums" />
    <AlbumsGrid v-if="display == 'grid'" :albums="albums" />

    <router-link to="albums/create" tag="div" class="createAlbum">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </router-link>

  </div>
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
  middleware: "auth",
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
.filter {
  @apply flex -mt-8 float-right;
  color: #c85353;

  p {
    @apply mx-2;
  }
  .sliderFilter {
    padding: 4px;

    span {
      border-left: 4px solid #c85353;
      padding: 2px;
      height: 20px;
    }
  }
}

.createAlbum {
    @apply flex justify-center items-center float-right bg-red text-white rounded-full;
    height: 50px;
    width: 50px;
    transition: .2s;

    &:hover {
        @apply cursor-pointer;
    }
}
</style>


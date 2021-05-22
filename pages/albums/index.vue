<template>
  <div class="container">
    <h1 class="title">Vos albums</h1>
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
  </div>
</template>

<script>
import Album from "@/components/common/Album";
import AlbumsSlider from "@/components/common/AlbumsSlider";
import AlbumsGrid from "@/components/common/AlbumsGrid";

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
.title {
  @apply text-2xl font-bold mt-8 mb-4;
}

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
</style>


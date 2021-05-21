<template>
  <div class="container">
    <h1 class="title">
      Vos albums
    </h1>
    <div class="albumContainer flex-wrap">
      <Album
        v-for="album in albums"
        :key="album.id"
        v-bind:text="album.name"
      ></Album>
      <router-link to="albums/create" tag="div" class="createAlbum rounded-2xl px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4" >
          <p>Créer un album</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Album from "@/components/common/Album";

export default {
  name: "albums",
  components: {Album},
  middleware: 'auth',
    data() {
      return {
        albums: []
      }
    },
    async fetch() {
      const { data } = await this.$axios.get(
        'http://localhost:8000/api/albums'
      );

      this.albums = data.data;
    }
}
</script>

<style lang="scss" scoped>

  .title {
    @apply text-2xl font-bold mt-8 mb-4;
  }

  .albumContainer {
    @apply flex -mx-2;

    .createAlbum {
      border: 3px gray dashed;
    }
  }

</style>


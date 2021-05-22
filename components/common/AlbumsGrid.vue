<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    <Album
      v-for="album in albums"
      :key="album.id"
      v-bind:text="album.name"
      :size="sm"
    ></Album>
    <router-link to="albums/create" tag="div" class="px-2 w-full">
      <div class="createAlbum"><h2>Créer un album</h2></div>
    </router-link>
  </div>
</template>

<script>
import Album from "@/components/common/Album";

export default {
  name: "albumsGrid",
  props: {
    albums: {
      type: Array,
      default: [],
    },
  },
  components: {
    Album,
  },
  middleware: "auth",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

.createAlbum {
  @apply flex justify-center items-center rounded-2xl;
  border: 2px rgb(200, 200, 200) dashed;
  height: 200px;
  transition: transform 0.2s;

  h2 {
    @apply font-bold;
    color: rgb(200, 200, 200);
  }

  &:hover {
    border-color: #c85353;
    transform: scale(0.97);

    h2 {
      color: #c85353;
    }
  }
}
</style>


<template>
  <div class="w-3/4 m-auto">
    <!-- <p>{{albumId}}</p> -->
    <input placeholder="Email" type="text" v-model="collaborators" />

    <Button
      text="Valider"
      @click.native="submit"
    ></Button>
  </div>
</template>

<script>
export default {
  props: ["albumId"],
  data() {
    return {
      stepTitle: "Invitez des ami.e.s",
      collaborators: "",
    };
  },
  mounted() {
    this.$emit("set-title", this.stepTitle);
  },
  methods: {
    async submit() {
      const { data } = await this.$axios.post(
        "http://localhost:8000/api/album/" + this.albumId + "/collaborator",
        {email : this.collaborators}
      );

      // this.$emit("set-album-id", data.data.id);
      this.$emit("next-step", data);
    },
  },
};
</script>

<style scoped>
input {
  @apply w-full mb-4 pl-4 rounded-xl;
  height: 50px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
}
</style>

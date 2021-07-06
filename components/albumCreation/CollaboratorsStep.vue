<template>
  <div class="w-3/4 m-auto">

    <div class="flex items-center" v-for="(collaborateur,index) in collab">
      <input placeholder="Email" type="email" v-model="collab[index].email" />
      <Button
        text="+"
        class="customBtnPlus"
        @click.native="addCollba"
        v-if="index === 0"
      ></Button>
    </div>

    <Button
      text="Valider"
      @click.native="submit"
    ></Button>
  </div>
</template>

<script>
export default {
  props: ["albumSlug"],
  data() {
    return {
      stepTitle: "Invitez des ami.e.s",
      collaborators: "",
      collab : [
        {email: ''}
      ],
    };
  },
  mounted() {
    this.$emit("set-title", this.stepTitle);
  },
  methods: {
    async addCollba(){
      this.collab.push({email: ''});
      // const { data } = await this.$axios.post(
      //   "http://localhost:8000/api/album/" + this.albumId + "/collaborator",
      //   {email : this.collaborators}
      // );
      //
      // // this.$emit("set-album-id", data.data.id);
      // this.$emit("next-step", data);
    },
    async submit() {
      const { data } = await this.$axios.post(
        "http://localhost:8000/api/album/" + this.albumSlug + "/invite",
        { email : this.collab }
      );

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
.customBtnPlus{
  margin-left: 10px;
  margin-bottom: 1rem !important;
}
</style>

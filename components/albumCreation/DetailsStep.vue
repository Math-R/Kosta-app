<template>
  <div class="w-3/4 m-auto">
    <input placeholder="Nom" type="text" v-model="title" />
    <textarea
      placeholder="Description"
      v-model="description"
      type="textarea"
      rows="5"
      class="pt-2"
    />

    <!-- <h3 class="text-left mb-4">Participants</h3>
    <div class="addParticipant">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </div> -->
    <Button
      text="Valider"
      @click.native="submit"
      :disabled="isDisabled"
    ></Button>
  </div>
</template>

<script>

import Button from "~/components/common/Button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      stepTitle: "Créez votre album",
      title: "",
      description: "",
    };
  },
  computed: {
    isDisabled() {
      return this.title.length === 0;
    },
  },
  methods: {
    async submit() {
      var formData = {
        name: this.title,
        description: this.description,
      };
      const { data } = await this.$axios.post(
        process.env.BASE_URL + "/api/album",
        formData
      );

      this.$emit("set-album-slug", data.data.slug);
      this.$emit("next-step", data);
    },
  },
  mounted() {
    this.$emit("set-title", this.stepTitle);
  },
};
</script>

<style lang="scss" scoped>

input {
  height: 50px;
}

input,
textarea {
  @apply w-full mb-4 pl-4 rounded-xl;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
}

</style>


<template>
  <div class="firstStep">
    <input placeholder="Nom" type="text" v-model="title" />
    <textarea
      placeholder="Description"
      v-model="description"
      type="textarea"
      rows="5"
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
import Button from "@/components/common/Button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      stepTitle: "Créez votre album",
      title:"",
      description: "",
    };
  },
  computed: {
    isDisabled() {
      return this.title.length === 0;
    },
  },
  methods: {
    submit() {
      var data = {
        title: this.title,
        description: this.description
      };
      this.$emit("next-step", data);
    },
  },
  mounted(){
    this.$emit('set-title', this.stepTitle)
  }
};
</script>

<style lang="scss" scoped>
.albumCreator {
  @apply m-auto mt-8 p-4 w-3/4 rounded-xl text-center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
}

.firstStep {
  @apply w-3/4 m-auto;

  input {
    height: 50px;
  }

  textarea {
    @apply pt-2;
  }

  input,
  textarea {
    @apply w-full mb-4 pl-4 rounded-xl;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
  }

  .addParticipant {
    @apply flex justify-center items-center rounded-full;
    border: 1px rgb(200, 200, 200) dashed;
    height: 50px;
    width: 50px;
    color: rgb(200, 200, 200);
    transition: .2s;

    &:hover {
        @apply cursor-pointer text-red border-red;
    }
  }
}
</style>


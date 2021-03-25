<template>
  <button :type="type" :disabled="disabled" class="button" :title="text"
          :class="[!secondary ? 'button-primary' : 'button-secondary']">
    {{ text }}
  </button>
</template>

<script>
// UTILISER @CLICK.NATIVE
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  outline: 0 !important;
  @apply border-2 border-transparent text-base font-bold py-2 px-9 leading-5 rounded-lg transition-colors duration-300;
  &:hover:enabled {
    @apply transition-colors duration-300;
  }

  &:disabled {
    opacity: .4;
  }
}

.button.button-secondary {
  @apply border-red text-red bg-white;
  &:hover:enabled {
    @apply bg-red text-white;
  }
}

.button.button-primary{
  @apply bg-red text-white border-red;
  &:hover:enabled {
    // prévoir une couleur secondaire pour les hovers
    @apply bg-red-dark border-red-dark;
  }
}

</style>

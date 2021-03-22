<template>
  <div class="nav-link">
    <nuxt-link :to="link" >
      <div class="relative">
        <div class="icon absolute">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="10.881" viewBox="0 0 104.491 10.881">
            <path id="Tracé_4" data-name="Tracé 4" d="M5568.533,0s-.5,9.029,1.959,9.029c11.293,1.242,37.678,1.927,49.567,1.846,9.221-.063,40.066-.641,51.4-1.846,2.165-.274,1.392-9.029,1.392-9.029Z" transform="translate(-5568.491)" fill="#c85353"/>
          </svg>
        </div>
        <div class="label">{{ text }}</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Navlink",
  props: {
    text: {
      type: String,
      required: true,
      default: 'Button'
    },
    link: {
      type: String,
      required: true,
      default: '/'
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
.nav-link {
  min-width: 100px;
  @apply flex items-center justify-center  px-6 leading-5 font-bold text-base transition-all duration-300;
  .icon {
    left: 50%;
    top: -16px;
    opacity: 0;
    transition: .2s ease-in-out all;
    transform : translateX(-50%);
  }
  .nuxt-link-active {
    .icon {
      opacity: 1;
    }
  }
  &:hover {
    transition: .2s ease-in-out all;
    .icon {
      opacity: 1;
    }
  }
}
</style>

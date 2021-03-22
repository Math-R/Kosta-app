<template>
  <section
    :class="['navbar w-full py-3 px-6 md:px-12 transition-all duration-300 relative']">
    <div class="w-full flex items-center justify-between">
      <nuxt-link to="/" title="Kosta">
        <img width="150" src="" alt="kosta" class="hidden md:block">
      </nuxt-link>
      <div class="flex items-center">
        <div class="hidden md:flex">
          <Navlink  text="Albums" link="/albums"/>
          <Navlink  text="Profile" link="/profile"/>
        </div>
        <div class="md:hidden" @click="toggleMenu">
          <!-- Menu mobile -->
        </div>
      </div>
    </div>
<!--    <div class="sticky flex flex-col  items-center mobile__submenu w-full" :class="subMenuOpen ? 'open py-4': ''">-->
<!--      <nuxt-link class="mb-4" to="/albums">Albums</nuxt-link>-->
<!--      <nuxt-link class="" to="/profile">Profile</nuxt-link>-->
<!--    </div>-->
  </section>
</template>
<script>
import Navlink from "~/components/Navlink";
export default {
  components: {Navlink},
  mixins: [],
  computed: {
    theme() {
    },
  },
  data(){
    return {
      subMenuOpen : false,
    }
  },
  mounted() {

  },
  methods: {
    toggleMenu(){
      this.subMenuOpen = !this.subMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply transition-all duration-300;
  &.has-scrolled {
    -webkit-box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.04);
    -moz-box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.04);
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.04);
  }
}
.mobile__submenu{
  bottom:0;
  left: 0;
  height: 0px;
  transition: all 0.3s;
  overflow: hidden;
  &.open {
    height: auto;
    transition: all 0.3s;
  }
}
</style>

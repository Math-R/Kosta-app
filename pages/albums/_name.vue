<template>
  <section class="album py-10">
    <div class="container">
      <div class="text-7xl text-center font-bold mb-10">
        {{ album.title }}
      </div>
      <div class="masonry mx-auto ">
        <div class="bg-center bg-no-repeat bg-cover rounded-xl" v-for="(photo, index) in album.days[0].photos"
             :style="{backgroundImage: `url(${photo.url})`}" :key="index"></div>
      </div>

    </div>
  </section>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";

export default {
  components: {VueMasonryWall},
  data() {
    return {
      album: {
        title: 'test',
        description: '',
        start_date:'11-06-2011',
        end_date:'14-06-2011',
        days: [
          {
            date: '11-06-2021',
            photos: [
              {
                date: '11-06-2021',
                url: require('~/assets/images/1.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/2.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/3.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/4.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/5.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/6.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/8.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/9.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/10.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/6.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/8.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/9.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/10.jpg')
              },
            ]
          },
          {
            date: '12-06-2021',
            photos: [
              {
                date: '11-06-2021',
                url: require('~/assets/images/1.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/2.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/3.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/4.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/5.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/6.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/8.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/9.jpg')
              },
              {
                date: '11-06-2021',
                url: require('~/assets/images/10.jpg')
              },
            ]
          },
        ]
      }
    }
  },
  methods: {
    width() {
      return Math.floor(Math.random() * 4) + 1
    }
  }
}
</script>
<style lang="scss">
.masonry {
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-auto-rows: minmax(15em, auto);
  grid-auto-flow: dense;


  div:nth-child(4n) {
    grid-column: span 2;
    grid-row: span 2;
  }

  div:nth-child(7n) {
    grid-column: span 2;
  }

  div:nth-child(3n) {
    grid-row: span 2;
  }

}
</style>

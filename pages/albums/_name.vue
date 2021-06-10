<template>
  <section class="album py-10">
    <div class="container">
      <div class="text-7xl text-center font-bold mb-10">
        {{ album.title }}
      </div>
      <div class="album-short flex mb-14 items-center">
        <div class="w-6/12">
          <img :src="album.days[0].photos[0].url" alt="" class="rounded-xl">
        </div>
        <div class="w-6/12 pl-8">
          <div class="text-5xl">
Du {{startDate}} au {{endDate}}
          </div>
        </div>
      </div>
      <div class="masonry mx-auto w-10/12">
        <div class="bg-center bg-no-repeat bg-cover rounded-xl" v-for="(photo, index) in album.days[0].photos"
             :style="{backgroundImage: `url(${photo.url})`}" :key="index"></div>
      </div>

    </div>
  </section>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import moment from "moment";

export default {
  components: {VueMasonryWall},
  data() {
    return {
      album: {
        title: 'Vacances entre potes',
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
                url: require('~/assets/images/9.jpg')
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
  },
   computed :{
    startDate(){
      return moment("2021-06-11T00:00:00+0100").format("D")
    },
     endDate(){
      moment.locale('fr')
      return moment("2021-06-14T00:00:00+0100").format("D MMMM")
    }
   }
}
</script>
<style lang="scss">
.masonry {
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  grid-auto-rows: minmax(20em, auto);
  grid-auto-flow: dense;


  div:nth-child(3n +1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  div:nth-child(5n) {
    grid-column: span 2;
  }

  div:nth-child(6n) {
    grid-row: span 2;
    grid-column: span 1;

  }

}
</style>

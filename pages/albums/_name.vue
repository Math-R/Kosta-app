<template>
  <section class="album">
    {{album.title}}
    <div class="">
      <VueMasonryWall :items="album.days[0].photos" :options="{width: 300, padding: 12}">
        <template v-slot:default="{item}">
          <img :src="item.url" alt="">
          <div class="item">

          </div>
        </template>
      </VueMasonryWall>
    </div>
  </section>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";

export default {
  components:{VueMasonryWall},
  data() {
    return {
      album: {
        title: 'test',
        description: '',
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
                url: require('~/assets/images/7.jpg')
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
            date: '11-07-2021',
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
                url: require('~/assets/images/7.jpg')
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
  methods:{
    append() {
      for (let i = 0; i < 20; i++) {
        const id = Math.floor(Math.random() * 1000)
        const height = Math.floor(Math.random() * 200) + 600
        this.items.push({
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
          image: `https://picsum.photos/id/${id}/600/${height}`
        })
      }
    }
  }
}
</script>

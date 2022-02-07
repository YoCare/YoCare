<template>
  <div>
    <h1 class="dataContainerTitle">{{ destination.title }}</h1>
    <div class="dataContainerBacktrack">
      <Backtrack/>
    </div>
    <div class="dataContainer scroll">
      <img :src="getImgUrl(destination.image)"  v-if="destination.image"/>
      <p v-html="destination.description" />
    </div>
    <div v-if="destination.link" class="link" @click="goTo(destination.link.destination)">
      {{ destination.link.title }}
    </div>
    <div v-else-if="link !== null" class="link" @click="goTo(link)">
      {{ chapter === "consigli" ? "Vai alla teoria" : "Vai ai consigli" }}
    </div>
  </div>
</template>
<script>
import store from '@/data/store'

import Backtrack from '@/components/Backtrack'

export default {
  components: {
    Backtrack
  },
  props: {
    chapter: {
      type: String,
      required: true
    },
    topic: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      link: null
    }
  },
  mounted() {
    localStorage.setItem(this.chapter+'/'+this.topic, true)

    if (this.chapter === 'consigli') {
      //for each in object store.destination
      for (let key in store.destination) {
        //if key is not 'consigli'
        if (key !== 'consigli') {
          //for each in object store.destination[key].topics
          for (let topic in store.destination[key].topics) {
            //if topic is equal with this.topic
            if (topic === this.topic) {
              this.link = `/chapter/${key}/${topic}`
              break
            }
          }
        }
      }

    } else {
      if (store.destination['consigli'].topics[this.topic]) {
        this.link = `/chapter/consigli/${this.topic}`
      }
    }

    //add event listener on key down
    document.addEventListener('keydown', this.listener)

  },
  beforeDestroy() {
    //remove event listener on key down
    document.removeEventListener('keydown', this.listener)
  },
  computed: {
    destination() {
      return store.destination[this.chapter].topics[this.topic]
    }
  },
  methods: {
    getImgUrl(name) {
      var images = require.context('../assets/images/', false, /\.png$/)
      return images('./' + name + ".png")
    },
    goTo(link) {
      this.$router.push(link)
    },
    listener(e) {
      //if space
      if (e.keyCode === 32) {
        //if this.destination.link
        if (this.destination.link) {
          this.goTo(this.destination.link.destination)
        }
        //else if this.link
        else if (this.link) {
          this.goTo(this.link)
        }
      }
    }
  }
}
</script>

<style scoped>
  @import '../styles/container.css';

  img {
    margin: 1em;
  }
  .link {
    position: absolute;
    bottom: 4%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 20vw;
    text-align: center;
    border-radius: 0.5vw;
    color: black;
    cursor: pointer;
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
    font-family: 'League Gothic'; font-weight: normal; font-style: normal;
    font-size: 4vh;
    user-select: none;
    background-color: #9FC0DF;
    
  -webkit-box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7); 
  box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7);
  }
</style>

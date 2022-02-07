<template>
  <div>
    <h1 class="dataContainerTitle">{{ destination.title }}</h1>
    <div class="dataContainerBacktrack">
      <Backtrack/>
    </div>
    <div class="dataContainer scroll" v-if="chapter !== 'consigli'">
      <img :src="getImgUrl(destination.image)"  v-if="destination.image"/>
      <p v-html="destination.description" />
      <br><h2>Topics:</h2>
      <div v-for="(topic, index, value) in destination.topics" v-bind:key="index" class="link">
        <router-link :to="$route.path + '/' + index" v-bind:class="{ selected: selectedIndex === value }">{{ topic.title }}</router-link>
        <i class="mdi mdi-check-bold" v-if="showCheck(index)"/>
      </div>
    </div>
    <div class="dataContainer jeffContainer scroll" v-else>
      <div class="sezioniContainer">
        <div>
          <div class="content"><p v-html="destination.description" /><br>
              <div v-for="(el, index) in consigliZonaSelezionata" v-bind:key="el[0]" class="links">
                <router-link :to="'/chapter/consigli/'+el[0]" v-bind:class="{ selected: selectedIndex === index }">{{el[1]}}</router-link> <i class="mdi mdi-check-bold" v-if="showCheck(el[0])"/><br>
              </div>
          </div>
        </div>
        
        <div class="jeff">
          <Jeff :jeffClick="onClick" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/data/store'

import Backtrack from '@/components/Backtrack'
import Jeff from '@/components/Jeff'

export default {
  components: {
    Backtrack,
    Jeff,
  },
  data() {
    return {
      consigliZonaSelezionata: [],
      selectedIndex: -1,
    }
  },
  props: {
    chapter: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destination[this.chapter]
    }
  },
  methods: {
    showCheck(index) {
      return localStorage.getItem(this.chapter+'/'+index) !== null
    },
    getImgUrl(name) {
      var images = require.context('../assets/images/', false, /\.png$/)
      return images('./' + name + ".png")
    },
    onClick(zona) {
      this.consigliZonaSelezionata = []
      var topics = this.destination.topics
      var zonaTopics = Object.entries(store.destination[zona].topics)
      //for each element in array zonaTopics
      for (var i = 0; i < zonaTopics.length; i++) {
        if (topics[zonaTopics[i][0]]) {
          this.consigliZonaSelezionata.push( [zonaTopics[i][0], zonaTopics[i][1].title] )
        }
      }
    },
    listener(e) {
      var entries = null
      if(this.chapter === 'consigli') {
        entries = Object.entries(this.consigliZonaSelezionata)
      } else {
        entries = Object.entries(this.destination.topics)
      }
      //if key down
      if (e.keyCode === 40) {
        this.selectedIndex++
        if (entries.length === this.selectedIndex) {
          this.selectedIndex = 0
        }
      }
      //else if key up
      else if (e.keyCode === 38) {
        this.selectedIndex--
        if (this.selectedIndex < 0) {
          this.selectedIndex = entries.length - 1
        }
      }
      //else if enter
      else if (e.keyCode === 13 && this.selectedIndex !== -1) {
        if (this.chapter === "consigli") {
          this.$router.push("/chapter/" + this.chapter + "/" + entries[this.selectedIndex][1][0])
        } else {
          this.$router.push("/chapter/" + this.chapter + "/" + entries[this.selectedIndex][0])
        }
      }
      //else if key right and chapter is consigli
      else if (e.keyCode === 39 && this.chapter === 'consigli') {
        if (this.selectedIndex !== -1) {
          this.selectedIndex = 0
        }
      }
      //else if key left and chapter is consigli
      else if (e.keyCode === 37 && this.chapter === 'consigli') {
        if (this.selectedIndex !== -1) {
          this.selectedIndex = 0
        }
      }
    }
  },
  mounted() {
    //on keydown this.listener
    document.addEventListener('keydown', this.listener)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.listener)
  }
}
</script>

<style scoped>
  @import '../styles/container.css';

  @import '../styles/jeff.css';

  h2 {
    margin-left: 1.5vw;
  }
  
  .sezioniContainer div .content .links{
    margin-left: 1.5vw;
  }

  .selected {
    font-weight: bolder;
  }
</style>

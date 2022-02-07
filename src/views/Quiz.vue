<template>
  <div>
    <h1 class="dataContainerTitle">Quiz</h1>
    <div class="dataContainerBacktrack">
      <Backtrack/>
    </div>
    <div class="dataContainer">
      <p>
        Benvenuti nella sezione di autovalutazione di <b>YoCare</b>, qui potrete mettere alla prova le conoscenze che avete appreso dopo l’utilizzo dell’applicazione.<br><br class="mini">
        Di seguito verranno elencati i vari quiz per ogni argomento trattato dall’applicazione, dove verrete sottoposti a diversi quesiti riguardanti le informazioni contenute nelle sezioni relative. <br><br class="mini">
      </p>
      <br><h2>Quiz:</h2>
      <div class="quizCentre">
        <div v-for="(quiz, index, value) in quizList" v-bind:key="index" class="link">
          <router-link :to="'/quiz/' + index" v-bind:class="{ selected: selectedIndex === value }">{{ quiz.title }}</router-link>
          <i class="mdi mdi-check-bold" v-if="showCheck(index)"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Backtrack from '@/components/Backtrack.vue'

import quizzes from '@/data/quiz'

export default {
  components: {
    Backtrack
  },
  data() {
    return {
      selectedIndex: -1
    }
  },
  computed: {
    quizList() {
      return quizzes
    }
  },
  methods: {
    showCheck(index) {
      return localStorage.getItem('quiz/'+index) !== null
    },
    listener(e) {
      //if key down
      if (e.keyCode === 40) {
        this.selectedIndex++
        if (this.selectedIndex >= Object.entries(this.quizList).length) {
          this.selectedIndex = 0
        }
      }
      //if key up
      if (e.keyCode === 38) {
        this.selectedIndex--
        if (this.selectedIndex < 0) {
          this.selectedIndex = Object.entries(this.quizList).length - 1
        }
      }
      //if enter
      if (e.keyCode === 13) {
        if (this.selectedIndex !== -1) {
          this.$router.push('/quiz/' + Object.entries(this.quizList)[this.selectedIndex][0])
        }
      }
    }
  },
  mounted() {
    //add event listener on keydown do this.listener
    document.addEventListener('keydown', this.listener)
  },
  beforeDestroy() {
    //remove event listener on keydown do this.listener
    document.removeEventListener('keydown', this.listener)
  }
}
</script>

<style scoped>
  @import '../styles/container.css';

  .quizCentre {
    margin-left: 1vw;
  }

  .selected {
    font-weight: bolder;
  }
</style>

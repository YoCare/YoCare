<template>
  <div>
    <h1 class="dataContainerTitle">Quiz: {{ selectedQuiz.title }} </h1>
    <div class="dataContainerBacktrack">
      <Backtrack/>
    </div>
    <div class="dataContainer" v-bind:class="{ hide: !initQuiz }">
      <p v-html="selectedQuiz.description"/>
    </div>
    <button id="quizStart" @click="startQuiz" v-bind:class="{ hide: !initQuiz }">INIZIA</button>
    <div>
      <div class="dataContainer" v-for="(question, index) in shuffledQuestions.quiz" v-bind:key="index" v-bind:class="{ hide: !quizIsActive || currentQuestion != index }">
        <h1 class="titleDomanda">Domanda {{index + 1}}:<br>
        {{ question.question }}</h1>
        <div v-for="(answer, answerIndex) in question.answers" v-bind:key="answerIndex" class="radio">
          <input type="radio" :id="index + '-' + answerIndex" :name="index" :value="answer"><label :for="index + '-' + answerIndex" v-bind:class="{ selected: selectedAnswer === answerIndex }">{{answer}}</label><br>
        </div>
        
        <div class="quizLeftButton" v-if="index !== 0" @click="prevQuestion">
          <LeftButton />
        </div>
        
        <div class="quizRightButton" v-if="index !== selectedQuiz.quiz.length - 1" @click="nextQuestion">
          <RightButton />
        </div>
      </div>
      
      <button id="quizEnd" @click="endQuiz" v-bind:class="{ hide: !quizIsActive || currentQuestion !== selectedQuiz.quiz.length - 1, selected: activeSendButton }">INVIA</button>
    </div>
    <div class="dataContainer scroll" v-bind:class="{ hide: !endedQuiz }">
      <h1 class="score">Punteggio: {{ getScore() }}</h1><br><br><br><br><br>
      <div v-for="(question, index) in selectedQuiz.quiz" v-bind:key="index">
        <h2>{{question.question}}</h2>
        <div class="answer">
          <div class="result" v-if="checkAnswer(index)"><i class="mdi mdi-check" /></div>
          <div class="result" v-else><i class="mdi mdi-close" /></div>
          <div class="left">
            <div >La tua risposta: {{ getUserAnswer(index) }}</div>
            <div >Risposta corretta: {{ selectedQuiz.quiz[index].answers[0] }}</div>
          </div>
          <div class="right"><i class="mdi mdi-help-circle-outline" v-if="getUserAnswer(index) !== selectedQuiz.quiz[index].answers[0]" v-tooltip.right="selectedQuiz.quiz[index].explain"/></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Backtrack from '@/components/Backtrack.vue';

import Swal from 'sweetalert2'

import quizzes from '@/data/quiz'
import store from '@/data/store'
import LeftButton from '@/components/buttons/LeftButton'
import RightButton from '@/components/buttons/RightButton'

export default {
  components: {
    LeftButton,
    RightButton,
    Backtrack
  },
  data() {
    return {
      initQuiz: true,
      quizIsActive: false,
      endedQuiz: false,
      currentQuestion: 0,
      shuffledQuestions: [],
      selectedAnswer: -1,
      activeSendButton: false
    }
  },
  props: {
    quiz: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.shuffledQuestions = JSON.parse(JSON.stringify(quizzes[this.quiz]))

    //for each question, shuffle the answers
    this.shuffledQuestions.quiz.forEach(question => {
      question.answers = this.shuffle(question.answers)
    })

    //add event listener on keydown do this.listener
    document.addEventListener('keydown', this.listener)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.listener)
  },
  computed: {
    selectedQuiz() {
      return quizzes[this.quiz]
    }
  },
  methods: {
    startQuiz() {
      this.initQuiz = false
      this.quizIsActive = true
      this.currentQuestion = 0

      store.quizRunning = true

    },
    nextQuestion() {
      this.currentQuestion++
    },
    prevQuestion() {
      this.currentQuestion--
    },
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    },
    endQuiz() {
      Swal.fire({
        title: 'Sicuro di voler inviare le risposte?',
        text: 'Non potrai più modificarle!',
        icon: 'warning',
        confirmButtonText: 'Sì',
        showCancelButton: true,
        cancelButtonText: 'Annulla',
        didOpen: (toast) => {
          //on key down
          toast.addEventListener('keydown', (e) => {
            //on arrow left
            if (e.keyCode === 37) {
              toast.querySelector("div.swal2-actions > button.swal2-confirm.swal2-styled").focus()
            } else if (e.keyCode === 39) {
              toast.querySelector("div.swal2-actions > button.swal2-cancel.swal2-styled").focus()
            }
          });
        }
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.setItem('quiz/'+this.quiz, "true")
          store.quizRunning = false
          this.quizIsActive = false
          this.endedQuiz = true
        }
      })
    },
    getScore() {
      //for each question
      let score = 0
      for (let i = 0; i < this.selectedQuiz.quiz.length; i++) {
        if (this.checkAnswer(i)) {
          score++
        }
      }
      return `${score}/${this.selectedQuiz.quiz.length}`
    },
    getUserAnswer(index) {
      var check = document.querySelector(`input[name="${index}"]:checked`)
      return check ? check.value : "Nessuna risposta"
    },
    checkAnswer(index) {
      return this.selectedQuiz.quiz[index].answers[0] === this.getUserAnswer(index)
    },
    listener(e) {
      //on enter down
      if (e.keyCode === 13) {
        if (this.initQuiz) {
          this.startQuiz()
        }
        else if (this.activeSendButton) {
          e.preventDefault()
          this.endQuiz()
        }
        else if (this.quizIsActive) {
          document.getElementById(this.currentQuestion +"-"+ this.selectedAnswer).checked = true
        }
      }
      //else if key left
      else if (e.keyCode === 37) {
        if (this.quizIsActive && this.currentQuestion > 0) {
          this.prevQuestion()
          this.selectedAnswer = -1
        }
      }
      //else if key right
      else if (e.keyCode === 39) {
        if (this.quizIsActive && this.currentQuestion < this.selectedQuiz.quiz.length - 1) {
          this.nextQuestion()
          this.selectedAnswer = -1
        }
      }
      //else if key down
      else if (e.keyCode === 40) {
        if (this.quizIsActive) {
          this.selectedAnswer++
          if (this.selectedAnswer >= this.shuffledQuestions.quiz[this.currentQuestion].answers.length + (this.shuffledQuestions.quiz.length - 1 === this.currentQuestion ? 1 : 0)) {
            this.selectedAnswer = this.shuffledQuestions.quiz[this.currentQuestion].answers.length + (this.shuffledQuestions.quiz.length - 1 === this.currentQuestion ? 1 : 0) - 1
          }
          if (this.selectedAnswer === this.shuffledQuestions.quiz[this.currentQuestion].answers.length) {
            this.activeSendButton = true
          } else {
            this.activeSendButton = false
          }
        }
      }
      //else if key up
      else if (e.keyCode === 38) {
        if (this.quizIsActive) {
          this.selectedAnswer--
          this.activeSendButton = false
          if (this.selectedAnswer < 0) {
            this.selectedAnswer = 0
          }
        }
      }
    }
  }
}
</script>

<style scoped>
  @import '../styles/container.css';
  @import '../styles/tooltip.css';

  button {
    font-size: 6vh;
    text-transform: uppercase;
    padding: 0.5em;
    border-radius: 12em;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 5px 5px 15px 5px #0000006b;
    border: 0;
    font-family: 'League Gothic'; font-weight: normal; font-style: normal;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.1em;
    padding-left: 0.75em;
    width: 30vh;
    cursor: pointer;
  }
  button#quizStart {
    position: absolute;
    bottom: 40vh;
    right: 50%;
    transform: translate(50%, 0);
  }
  button#quizStart.hide {
    opacity: 0;
  }
  button#quizEnd {
    position: absolute;
    bottom: 10vh;
    right: 50%;
    transform: translate(50%, 0);
    opacity: 1;
    transition: opacity 0.5;
  }
  button#quizEnd.hide {
    opacity: 0;
  }
  .dataContainer {
    transition: opacity 0.5s;
  }
  .dataContainer.hide {
    opacity: 0;
    pointer-events: none;
  }

  label {
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
  }

  .radio {
    margin: 0.5rem;
    margin-left: 2.5vw;
  }
  .radio input[type=radio] {
    position: absolute;
    opacity: 0;
  }
  .radio input[type=radio] + label:before {
    content: "";
    background: #f4f4f4;
    border-radius: 100%;
    border: 1px solid #b4b4b4;
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
    position: relative;
    top: -0.2em;
    margin-right: 1em;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease;
  }
  .radio input[type=radio]:checked + label:before {
    background-color: #5751FF;
    box-shadow: inset 0 0 0 4px #f4f4f4;
  }
  .radio input[type=radio]:focus + label:before {
    outline: none;
    border-color: #5751FF;
  }
  .radio input[type=radio]:disabled + label:before {
    box-shadow: inset 0 0 0 4px #f4f4f4;
    border-color: #b4b4b4;
    background: #b4b4b4;
  }
  .radio input[type=radio] + label:empty:before {
    margin-right: 0;
  }

  .quizLeftButton {
    float: left;
    margin-left: 1vw;
  }
  .quizRightButton {
    float:right;
    margin-right: 1vw;
  }

.answer {
  margin-left: 1vw;
  margin-bottom: 2vh;
  display: grid;
  grid-template-columns: max-content 0.55fr 0.3fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . .";
}

.answer .result {
  font-size: 4vh;
}

.answer .result .mdi-close {
  color: red;
}

.answer .result .mdi-check {
  color: green;
}

.left {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "."
    ".";
}
.left div {
  margin-left: 0.5em;
  font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
  margin-top: 0.5vh;
}

.mdi.mdi-help-circle-outline {
  font-size: 3vh;
}

.titleDomanda {
  margin-bottom: 1vh;
}

.score {
  position: absolute;
  left: 50%;
  transform: translate(-75%, 0);
}
.right i {
  position: relative;
  top: -50%;
}

label.selected {
  font-weight: bolder;
}
button.selected {
  background-color: #5c52c7;
}
</style>

<style>
  .entry-content {
    overflow: visible;
  }
</style>
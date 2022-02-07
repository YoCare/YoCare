<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
    <vue-navigation-bar :options="navbarOptions" v-bind:class="{ hide: hideNavBar() }" />
    <div class="titleContainer" v-bind:class="{ hide: hideNavBar() }" @click="onTitleClicked()">
      <YoCareTitle class="navbarTitle"/>
    </div>
    <i class="mdi mdi-close" v-bind:class="{ white: hideNavBar() }" />
    <div class="copyright" v-bind:class="{ hide: !needCopyright() }">
      <div ></div>
      <div >&copy; 2021 - {{ year }} <router-link to="/about">Credits</router-link></div>
      <div ></div>
    </div>
    <div class="buttons left" v-bind:class="{ single: needPageUndo(), full: needUndo() }">
      <div id="PageFirst" @click="onPageUndo">
        <page-first class="image" :size="48" />
      </div>
      <div id="Undo" @click="onUndo">
        <chevron-left class="image" :size="48"/>
      </div>
    </div>
    <div class="buttons right" v-bind:class="{ show: needNext() }">
      <div id="Next" @click="onNext">
        <chevron-right class="image" :size="48"/>
      </div>
    </div>
    <background class="background"/>
  </div>
</template>

<script>

  import Swal from 'sweetalert2'

  import PageFirst from 'vue-material-design-icons/PageFirst.vue'
  import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
  import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

  import Background from '@/components/Background.vue'

  import "vue-navigation-bar/dist/vue-navigation-bar.css";
  import VueNavigationBar from "vue-navigation-bar";
  import YoCareTitle from '@/components/YoCareTitle.vue'

  import NavbarOptions from '@/data/navbarOptions'
  import store from '@/data/store'

  import "@mdi/font/css/materialdesignicons.min.css";

  export default {
    components: {
      PageFirst,
      ChevronLeft,
      ChevronRight,
      Background,
      VueNavigationBar,
      YoCareTitle
      //Navbar
    },
    data() {
      return {
        year: new Date().getFullYear(),
        navbarOptions: NavbarOptions,
        denylist: [
          "consigli", "covid", "fakenews"
        ],
      }
    },
    mounted() {
      document.getElementsByClassName("mdi mdi-close")[0].addEventListener("click", () => {
        this.close()
      })
      //on keydown
      document.addEventListener("keydown", (e) => {
        //if right arrow and needNext() then onNext()
        if (e.keyCode === 39 && this.needNext()) {
          this.onNext()
        }
        //else if left arrow and needUndo() then onUndo()
        else if (e.keyCode === 37 && this.needUndo()) {
          this.onUndo()
        }
        //else if backspace and needPageUndo() then onPageUndo()
        else if (e.keyCode === 8 && this.needPageUndo()) {
          this.onPageUndo()
        }
        //else if H then onTitleClicked()
        else if (e.keyCode === 72) {
          this.onTitleClicked()
        }
        //else if A then route push /help
        else if (e.keyCode === 65) {
          this.$router.push("/help")
        }
        //else if C then route push /about
        else if (e.keyCode === 67) {
          this.$router.push("/about")
        }
        //else if ESC
        else if (e.keyCode === 27) {
          this.close()
        }
      })
    },
    methods: {
      close() {
        Swal.fire({
          title: 'Uscire dall\'applicazione?',
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
            this.exit()
          }
        })
      },
      exit() {
        //go to www.google.com
        window.location.href = "https://www.google.com"
        /*this.$router.go(-1)
        if (this.$route.path === "/") {
          this.$router.go(-1)
        } else {
          setTimeout(() => {
            this.exit()
          }, 1)
        }*/
      },
      hideNavBar() {
        return window.location.pathname === "/" || window.location.pathname === "/about" || ( window.location.pathname === "/404" && localStorage.getItem("logged") === 'false' )
      },
      needCopyright() {
        return window.location.pathname === '/'
      },
      needPageUndo() {
        return window.location.pathname !== '/' && window.location.pathname !== '/home'
      },
      needUndo() {
        var undo = false
        if (this.$route.name === "Chapter") {
          if (store.destination[this.$route.params.chapter].prev) {
            undo = true
          }
        } else if (this.$route.name === "Topic") {
          if (store.destination[this.$route.params.chapter].move) {
            undo = true
          }
        }
        return undo
      },
      needNext() {
        var next = false
        if (this.$route.name === "Chapter") {
          if (store.destination[this.$route.params.chapter].next) {
            next = true
          }
        } else if (this.$route.name === "Topic") {
          if (store.destination[this.$route.params.chapter].move) {
            next = true
          }
        }
        return next
      },
      onPageUndo() {
        if (this.$route.name === "Chapter" && !this.denylist.includes(this.$route.params.chapter)) {
          this.$router.push({
            name: "Sezioni"
          })
        } else if (this.$route.name === "Topic") {
          this.$router.push({
            name: "Chapter",
            params: {
              chapter: this.$route.params.chapter
            }
          })
        } else if (this.$route.name === "Help" || this.$route.name === "About") {
          this.$router.go(-1)
        } else if (this.$route.name === "QuizActive") {
          this.$router.push({
            name: "Quiz"
          })
        } else {
          this.$router.push({
            name: "Home"
          })
        }
      },
      onUndo() {
        if (this.$route.name === "Chapter") {
          if (store.destination[this.$route.params.chapter].prev) {
            this.$router.push({ name: "Chapter", params: { chapter: store.destination[this.$route.params.chapter].prev } })
          }
        } else if (this.$route.name === "Topic") {
          if (store.destination[this.$route.params.chapter].move) {
            var topics = Object.entries(store.destination[this.$route.params.chapter].topics)
            var index = topics.findIndex(x => x[0] === this.$route.params.topic)
            index--
            if (index < 0) {
              index = topics.length - 1
            }
            this.$router.push({ name: "Topic", params: { chapter: this.$route.params.chapter, topic: topics[index][0] } })
            this.checkComplete(this.$route.params.chapter)
          }
        }
      },
      onNext() {
        if (this.$route.name === "Chapter") {
          if (store.destination[this.$route.params.chapter].next) {
            this.$router.push({ name: "Chapter", params: { chapter: store.destination[this.$route.params.chapter].next } })
          }
        } else if (this.$route.name === "Topic") {
          if (store.destination[this.$route.params.chapter].move) {
            var topics = Object.entries(store.destination[this.$route.params.chapter].topics)
            var index = topics.findIndex(x => x[0] === this.$route.params.topic)
            index++
            if (index == topics.length) {
              index = 0
            }
            this.$router.push({ name: "Topic", params: { chapter: this.$route.params.chapter, topic: topics[index][0] } })
            this.checkComplete(this.$route.params.chapter)
          }
        }
      },
      checkComplete(chapter) {
        if (localStorage.getItem(chapter) !== "true") {
          var topics = Object.entries(store.destination[chapter].topics)
          var complete = true
          for (var i = 0; i < topics.length; i++) {
            if (localStorage.getItem(chapter + "/" + topics[i][0]) !== "true")
              complete = false
          }
          if (complete) {
            localStorage.setItem(chapter, "true")
            Swal.fire({
              title: 'Hai completato il capitolo!',
              text: 'Vuoi prendere parte al quiz del capitolo?',
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
                this.$router.push({ name: "QuizActive", params: { quiz: chapter } })
                //this.$router.push({ name: "Chapter", params: { chapter: chapter } })
              }
            })
          }
        }
      },
      onTitleClicked() {
        if (this.$route.path !== '/home')
          this.$router.push("/home");
      },
    }
  }
</script>

<style>
  @font-face {
      font-family: 'League Gothic';
      src:  url('./assets/fonts/LeagueGothic-Regular.woff2') format('woff2'),
            url('./assets/fonts/LeagueGothic-Regular.woff') format('woff'),
            url('./assets/fonts/LeagueGothic-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'OpenSans-Regular';
      src:  url('./assets/fonts/OpenSans-Regular.woff2') format('woff2'),
            url('./assets/fonts/OpenSans-Regular.woff') format('woff'),
            url('./assets/fonts/OpenSans-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  html, body {
    height: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: white;
  }
  button {
    color: white;
  }
  * {
    margin: 0;
    padding: 0;
  }
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
</style>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .copyright {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    color: black;
    padding: 0px;
    display: grid;
    grid-template-columns: 3fr max-content 3fr;
    grid-template-rows: min-content;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . .";
    transition: transform 0.5s;
    height: 2.2vh;
    font-size: 1.8vh;
    
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
  }
  .copyright div:first-child {    
    background-color: rgba(255, 255, 255, 0.8);
    mask-image: url('./assets/Left.svg');
    mask-position: right;
    mask-repeat: no-repeat;
    mask-size: contain;
    width: 3em;
  }
  .copyright div:last-child {    
    background-color: rgba(255, 255, 255, 0.8);
    mask-image: url('./assets/Right.svg');
    mask-position: left;
    mask-repeat: no-repeat;
    mask-size: contain;
    width: 3em;
  }
  .copyright div:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .copyright.hide {
    transform: translate(-50%, 100%);
  }

  .mdi.mdi-close {
    font-size: 4.5vh;
    position: absolute;
    top: 0.19em;
    right: 0em;
    color: black;
    z-index: 1000;
    transition: color 1s;
  }
  .mdi.mdi-close.white {
    color: white;
  }

  div.buttons {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    position: absolute;
    bottom: 1em;

    cursor: pointer;
  }

  div.buttons.left {
    left: 1em;
  }
  div.buttons.right {
    right: 1em;
  }

  div.buttons.left div {
    left: -200%;
  }
  div.buttons.right div {
    right: -200%;
  }

  div.buttons.left #Undo {
    height: 0;
  }

  div.buttons div {
    /*border: 1px solid black;*/
    width:  5em;
    height: 5em;
    border-radius: 100%;
    position: relative;
    margin-top: 0.5em;
    
    transition: all 0.5s;
    
    background-color: #9FC0DF;
    color:black;
    
  -webkit-box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7); 
  box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7);
  }

  div.buttons.left.single #PageFirst{
    left: 0;
  }

  div.buttons.left.full #PageFirst{
    height: 3em;
    width: 3em;
    left: 50%;
    transform: translate(-50%, 0);
  }
  div.buttons.left.full #Undo{
    width:  5em;
    height: 5em;
    left: 0;
  }

  div.buttons.right.show #Next {
    right: 0;
  }

  div.buttons div .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .background {
    z-index: -999;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }

</style>

<!-- animation routes -->
<style>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }
  .moveUp-enter-active {
    animation: fadeIn 1s ease-in;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  .moveUp-leave-active {
    animation: moveUp 0.3s ease-in;
  }
  @keyframes moveUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-400px);
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<!-- animation navbar -->
<style>
  .vnb {
    transition: transform 0.5s;
    transform: translateY(0);
    height: 3vh;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    position: absolute;
    top: 0;
    width: 100%;
    
    background-color: #f3f3f3;
    
    -webkit-box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7); 
    box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7);
  
  }
  .vnb.hide {
    transform: translateY(-100%);
  }
  .titleContainer {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 999;
    font-size: 5vh;
    transition: transform 0.5s;
    cursor: pointer;
  }
  .titleContainer.hide {
    transform: translate(-50%, -100%);
  }
  .vnb .vnb__menu-options__option__link {
    font-size: 2vh;
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
  }
  .vnb .vnb__sub-menu-options__option__link__text-wrapper__text {
    font-size: 2vh;
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
  }
  .vnb .vnb__sub-menu-options__option__link:hover {
    border-left: 5px solid #7964fe;
}
</style>
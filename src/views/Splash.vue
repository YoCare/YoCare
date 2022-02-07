<template>
  <div ref="splash">
    <img src="../assets/logo.svg" />
    <YoCareTitle class="title"/>
    <p class="subtitle">You&Other Care</p>
    <button v-on:click="pressButton()">Entra</button>
  </div>
</template>

<script>

  import Swal from 'sweetalert2';

  import YoCareTitle from '../components/YoCareTitle.vue'

  export default {
    components: {
      YoCareTitle
    },
    methods: { 
      pressButton() {
        if (localStorage.getItem('sessionStarted') === 'true') {
          Swal.fire({
            title: 'Continuare la sessione precedente?',
            text: 'È stata rilevata una sessione precedente. Continuare o resettare i progressi?',
            icon: 'question',
            confirmButtonText: 'Continua',
            showCancelButton: true,
            cancelButtonText: 'Resetta',
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
              this.$router.push("/home")
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              localStorage.clear()
              localStorage.setItem('sessionStarted', 'true')
              this.$router.push("/home")
            }
          })
        } else {
          localStorage.setItem('sessionStarted', 'true')
          this.$router.push("/home")
        }
        
      },
      listener(e) {
        if (e.keyCode === 13) {
          this.pressButton()
          e.preventDefault()
        }
      }
    },
    mounted() {
      localStorage.setItem("logged", false)

      //on pressed key
      window.addEventListener("keydown", this.listener)
    },
    beforeDestroy() {
      //remove event listener
      window.removeEventListener("keydown", this.listener)
    }
  }
</script>

<style scoped>

  * {
    user-select: none;
  }

  img {
    position: absolute;
    left: 16.4vw;
    top: 23.1vh;
    height: 39.5vh;
  }

  button {
    position: absolute;
    top: 60vh;
    right: 14vw;
    font-size: 6vh;
    transform: translate(0, -50%);
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

  .title {
    font-size: 17vh;
    position: absolute;
    top: 15vh;
    right: 8.5vw;
  }

  .subtitle {
    position: absolute;
    top: 34vh;
    right: 11.8vw;
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
    font-size: 5vh;
    text-shadow: 8px 8px 4px rgba(0, 0, 0, 0.45);
  }

</style>

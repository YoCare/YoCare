<template>
  <div class="notFoundContainer">
    <h1>404</h1>
    <p class="subtitle">Pagina non trovata</p><br>
    <p class="description">Non siamo certi di quello che è successo, assicurati di aver digitato l'indirizzo corretto,<br>torna alla home o alla pagina precedente</p><br>
    <button @click="goHome">Torna alla home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
}
</script>


<style scoped>
  .notFoundContainer h1 {
    font-size: 45vh;
    font-family: 'League Gothic'; font-weight: normal; font-style: normal;
    color: #ff5751;
    margin: 0 auto;
    line-height: 35vh;
    padding-top: 7vh;
    text-align: center;
  }
  .notFoundContainer p.subtitle {
    font-size: 5vh;
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
    color: white;
    margin: 0 auto;
    text-align: center;
  }
  .notFoundContainer p.description {
    font-size: 3vh;
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
    color: white;
    margin: 0 auto;
    text-align: center;
  }
  .notFoundContainer button {
    position: absolute;
    right: 50%;
    font-size: 6vh;
    transform: translate(50%, 0);
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
    width: 60vh;
    cursor: pointer;
  }
</style>
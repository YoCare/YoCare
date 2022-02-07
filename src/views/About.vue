<template>
  <div>
    <YoCareTitle class="title" />
    <p class="subtitle">You&Other Care</p>
    <div class="aboutContainer">
      <div><div class="image marilli" />Loris Raffaele Marilli<br>Project Manager<br><a href="https://www.instagram.com/loris_marilli/"><i class="mdi mdi-instagram" /></a><a href="https://www.facebook.com/loris.marilli"><i class="mdi mdi-facebook" /></a><a href="https://www.linkedin.com/in/loris-raffaele-marilli-4227011b7/"><i class="mdi mdi-linkedin" /></a><i class="mdi mdi-discord" v-tooltip.bottom="'Loris#1501'"/></div>
      <div><div class="image amendola" />Daniela Amendola<br>Technical Writer<br><a href="https://www.instagram.com/dany_el92/"><i class="mdi mdi-instagram" /></a><a href="https://www.facebook.com/daniela.amendola.35"><i class="mdi mdi-facebook" /></a><i class="mdi mdi-discord" v-tooltip.bottom="'Dan9#8384'"/></div>
      <div><div class="image spagnoletti" />Dario Spagnoletti<br>Consulente grafico/multimediale<br><a href="https://www.facebook.com/dario.spagnoletti.9/"><i class="mdi mdi-facebook" /></a><a href="https://github.com/Fleshwood"><i class="mdi mdi-github" /></a><i class="mdi mdi-discord" v-tooltip.bottom="'Fleshwood#1373'"/></div>
      <div><div class="image ingusci" />Matteo Ingusci<br>Programmatore<br><a href="https://www.instagram.com/matteo.ingusci/"><i class="mdi mdi-instagram" /></a><a href="https://www.facebook.com/matteo.ingusci.1/"><i class="mdi mdi-facebook" /></a><a href="https://www.linkedin.com/in/matteo-ingusci-533658144/"><i class="mdi mdi-linkedin" /></a><a href="https://github.com/CrazyBitDev"><i class="mdi mdi-github" /></a><i class="mdi mdi-discord" v-tooltip.bottom="'CrazyBit#1669'"/></div>
      <div><div class="image palumbo" />Giordano Palumbo<br>Technical Writer<br></div>
    </div>
    <div class="license">
      <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">YoCare</span> by <span property="cc:attributionName">Marilli Loris, Amendola Daniela, Spagnoletti Dario, Ingusci Matteo, Palumbo Giordano</span><br>is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution-NonCommercial-NoDerivatives 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></a></p>
    </div>
  </div>
</template>
<script>
import YoCareTitle from '@/components/YoCareTitle.vue'
export default {
  components: {
    YoCareTitle
  },
}
</script>

<style scoped>
  .title {
    font-size: 17vh;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .subtitle {
    font-size: 4vh;
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  .aboutContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: min-content;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . . . .";
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .aboutContainer div {
    text-align: center;
    padding: 0.2vw;
    font-size: 3vh;
    font-family: 'League Gothic'; font-weight: normal; font-style: normal;
    color: #FFFFFF;
  }
  .aboutContainer div .image {
    width: 10vw;
    height: 10vw;
    border-radius: 100%;
    margin: 0 auto;
    margin-bottom:3vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
  -webkit-box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7); 
  box-shadow: 0px 0px 50px -9px rgba(0,0,0,0.7);
  
  }

  .aboutContainer div .image.marilli {
    background-image: url('../assets/group/marilli.png');
  }
  .aboutContainer div .image.amendola {
    background-image: url('../assets/group/amendola.png');
  }
  .aboutContainer div .image.spagnoletti {
    background-image: url('../assets/group/spagnoletti.png');
  }
  .aboutContainer div .image.ingusci {
    background-image: url('../assets/group/ingusci.png');
  }
  .aboutContainer div .image.palumbo {
    background-image: url('../assets/group/palumbo.png');
  }

  .license {
    font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
    color: white;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
  }
  a {
    color: white;
  }
</style>

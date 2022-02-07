<template>
  <div>
    <div class="dataContainerBacktrack">
      <Backtrack/>
    </div>
    <div class="dataContainer help scroll">
      <p>Qui troverai spiegato come utilizzare le frecce di navigazione che ti serviranno per muoverti all'interno dell'applicazione o per chiuderla. <br> Ecco qui illustrate le componenti: <br></p>
      <div class="helpContainer">
        <div class="leftRightContainer">
          <div ><LeftButton class="buttonExample" /></div>
          <div ><RightButton class="buttonExample" /></div>
        </div>
        <div><p>Queste frecce ti permettono di spostarti tra una pagina e l'altra. </p></div>
        <div ><PageFirstButton class="buttonExample" /></div>
        <div><p>Questa freccia ti permette di tornare al menu' precedente. </p></div>
        <div ><CloseButton class="closeButtonExample" /></div>
        <div><p>Questa X ti da la possibilità di uscire dall'applicazione in qualsiasi momento o per uscire da un determinato contenuto.</p></div>
      </div>
      <p>Le combinazioni disponibili:</p>
      <ul>
        <li>Premi <kbd>H</kbd> per tornare alla Home</li>
        <li>Premi <kbd>A</kbd> per visualizzare la pagina Aiuti</li>
        <li>Premi <kbd>C</kbd> per visualizzare la pagina Crediti</li>
        <li>Premi <kbd>←</kbd> e <kbd>→</kbd> per sfogliare i contenuti</li>
        <li>Premi <kbd>⌫</kbd> per tornare al menu' precedente</li>
        <li>Premi <kbd>ESC</kbd> per chiudere le finestre di dialogo e chiudere l'applicazione</li>
        <li>Premi <kbd>SPACE</kbd> in un topic con consiglio o teoria collegato per seguire il link</li>
      </ul>
    </div>
  </div>
</template>
<script>

import Backtrack from '@/components/Backtrack.vue'

import LeftButton from '@/components/buttons/LeftButton'
import RightButton from '@/components/buttons/RightButton'
import PageFirstButton from '@/components/buttons/PageFirstButton'
import CloseButton from '@/components/buttons/CloseButton'
export default {
  components: {
    LeftButton,
    RightButton,
    PageFirstButton,
    CloseButton,
    Backtrack
  },
}
</script>

<style scoped>
  @import '../styles/container.css';

  .dataContainer.help {
    padding-top: 1em;
  }

  .helpContainer {
    width: 80%;
    text-align: center;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". ."
      ". ."
      ". .";
  }

  .helpContainer div {
    position: relative;
    margin-top: 2vh;
  }

  .helpContainer div p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  .leftRightContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". .";
  }

  .helpContainer div .buttonExample {
      margin: 0 auto;
  }

  .helpContainer div .closeButtonExample {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%)
  }

  li {
   font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
  }

  kbd {
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #b4b4b4;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;
    color: #333;
    display: inline-block;
    font-size: .85em;
    font-weight: 700;
    line-height: 1;
    padding: 2px 4px;
    white-space: nowrap;
   }

</style>

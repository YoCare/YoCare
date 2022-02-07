<template>
<div>
    <h1 class="dataContainerTitle">Introduzione</h1>
    <div class="dataContainer home">
        <div class="HomeContent">
            <p>
                Benvenuti in <b>YoCare</b>. Utilizzare la nostra applicazione vi guiderà a seguire le corrette norme e indicazioni per mantenere una corretta igiene personale e, di conseguenza, a rimanere in salute.<br><br class="mini">
                Ma cos’è l’<b>igiene</b>? L’igiene è una disciplina medica che si occupa delle interazioni tra la salute dell’uomo e l’ambiente, in maniera tale da creare regole, consigli e misure da seguire, in qualsiasi momento della nostra vita, ai fini di aumentare il benessere e di prevenire il più possibile le malattie.<br><br class="mini">
                Dobbiamo, quindi, riflettere attentamente sulle azioni e comportamenti che teniamo nel corso della giornata e adattare le nostre abitudini a dei sani gesti che preservano l’igiene e che ogni giorno ci aiutano a ridurre i rischi di contrarre malattie infettive e a mantenere il nostro stato di benessere fisico<br><br class="mini">
                Qui di seguito verranno indicate le sezioni che potrete seguire nel vostro percorso di apprendimento.
            </p>
        </div>
        <div class="image">
            <img src="@/assets/logo.svg" />
        </div>
        <div class="buttonGrid">
            <div>
                <div class="button" @click="teoryClick" v-bind:class="{ selected: buttonSelected === 0, animate: hideButton }">
                    <span>Teoria</span>
                </div>
                <div class="hiddenButtonContainer" v-bind:class="{ show: showButtons }">
                    <div class="halfbutton" @click="sezioniClick" v-bind:class="{ selected: buttonVerticalSelected === 0 && buttonSelected === 0 }">
                        <span>Sezioni</span>
                    </div>
                    <div class="halfbutton" @click="covidClick" v-bind:class="{ selected: buttonVerticalSelected === 1 && buttonSelected === 0 }">
                        <span>Covid-19</span>
                    </div>
                    <div class="halfbutton" @click="fakenewsClick" v-bind:class="{ selected: buttonVerticalSelected === 2 && buttonSelected === 0 }">
                        <span>Fake News</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="button" @click="consigliClick" v-bind:class="{ selected: buttonSelected === 1 }">
                    <span>Consigli</span>
                </div>
            </div>
            <div>
                <div class="button" @click="quizClick" v-bind:class="{ selected: buttonSelected === 2 }">
                    <span>Quiz</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            buttonSelected: -1,
            buttonVerticalSelected: -1,
            hideButton: false,
            showButtons: false
        }
    },
    methods: {
        teoryClick() {
            this.hideButton = true
            this.buttonVerticalSelected = 0
            setTimeout(() => {
                this.showButtons = true
            }, 200)
        },
        sezioniClick() {
            this.$router.push("/sezioni");
        },
        consigliClick() {
            this.$router.push("/chapter/consigli");
        },
        quizClick() {
            this.$router.push("/quiz");
        },
        covidClick() {
            this.$router.push("/chapter/covid");
        },
        fakenewsClick() {
            this.$router.push("/chapter/fakenews");
        },
        listener(e) {
            //if right arrow
            if (e.keyCode === 39) {
                this.buttonSelected++
                if (this.buttonSelected === 3) {
                    this.buttonSelected = 0
                }
            }
            //else if left arrow
            else if (e.keyCode === 37) {
                this.buttonSelected--
                if (this.buttonSelected === -1) {
                    this.buttonSelected = 2
                }
            }
            //else if up arrow
            else if (e.keyCode === 38) {
                this.buttonVerticalSelected--
                if (this.buttonVerticalSelected === -1) {
                    this.buttonVerticalSelected = 2
                }
            }
            //else if down arrow
            else if (e.keyCode === 40) {
                this.buttonVerticalSelected++
                if (this.buttonVerticalSelected === 3) {
                    this.buttonVerticalSelected = 0
                }
            }
            //else if enter
            else if (e.keyCode === 13) {
                if (this.buttonSelected === 0 && !this.hideButton) {
                    this.teoryClick()
                } else if (this.buttonSelected === 0 && this.showButtons && this.buttonVerticalSelected === 0) {
                    this.sezioniClick()
                } else if (this.buttonSelected === 0 && this.showButtons && this.buttonVerticalSelected === 1) {
                    this.covidClick()
                } else if (this.buttonSelected === 0 && this.showButtons && this.buttonVerticalSelected === 2) {
                    this.fakenewsClick()
                } else if (this.buttonSelected === 1) {
                    this.consigliClick()
                } else if (this.buttonSelected === 2) {
                    this.quizClick()
                }
            }
        }
    },
    mounted() {
        document.activeElement.blur()

        localStorage.setItem("logged", true);

        //event listener keydown
        document.addEventListener("keydown", this.listener);
    },
    beforeDestroy() {
        //event listener keydown
        document.removeEventListener("keydown", this.listener);
    }
}
</script>

<style scoped>
@import '../styles/container.css';

.dataContainer.home {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 2fr 0.5fr;
    grid-template-rows: 1fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
        ". ."
        "buttonGrid buttonGrid";
}

.dataContainer.home .image {
    height: 100%;
    position: relative;
}

.dataContainer.home .image img {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}

.buttonGrid {
	grid-area: buttonGrid; 
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: min-content;
    gap: 0px 0px;
    grid-template-areas:
        ". . .";
    margin-top: 2vh;
}

.buttonGrid div {
    position: relative;
}

.buttonGrid div .button {
    background-color: #f9f9f9;
    border-radius: 3vw;
    height: 8vh;
    width: 37vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 1s, background-color 0.2s, color 0.2s, transform 1s;
    cursor: pointer;
    color: black;
    color: white;
    background-color: #7964fe;
    font-family: 'OpenSans-Regular';
    font-weight: normal;
    font-style: normal;

    -webkit-box-shadow: 0px 0px 50px -9px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 50px -9px rgba(0, 0, 0, 0.7);
    user-select: none;
}

.buttonGrid div .button.selected {
    background-color: #5c52c7;
}

.buttonGrid div .button span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5vh;
}

.buttonGrid div .button.animate {
    transform: translate(-50%, -50%) scale(1.2, 1.2);
    opacity: 0;
    pointer-events: none;
}

.hiddenButtonContainer {
    height: 25vh;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "."
        "."
        ".";
    margin-top: 1.5vh;
    opacity: 0;
    transform: scale(0.8, 0.8);
    transition: all 0.2s;
    pointer-events: none;
}

.hiddenButtonContainer.show {
    opacity: 1;
    transform: scale(1, 1);
    pointer-events: all;
}

.hiddenButtonContainer .halfbutton {
    background-color: white;
    width: 45%;
    height: 70%;
    margin: 0 auto;
    border-radius: 0.5vh;
    transition: opacity 1s, background-color 0.2s, color 0.2s;
    position: relative;
    cursor: pointer;
    color: black;
    color: white;
    background-color: transparent;
    font-family: 'OpenSans-Regular';
    font-weight: normal;
    font-style: normal;
    color: white;
    background-color: #6a5fde;

    -webkit-box-shadow: 0px 0px 50px -9px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 50px -9px rgba(0, 0, 0, 0.7);
    user-select: none;
}

.hiddenButtonContainer .halfbutton.selected {
    background-color: #5c52c7;
}

.hiddenButtonContainer .halfbutton span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 4vh;
    text-align: center;
}

br.mini {
    content: "";
    margin: 2em;
    font-size: 24%;
    line-height: 0.8vh;
    display: block;
}
</style>

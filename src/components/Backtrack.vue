<template>
<div><router-link to="/home" class="linkWhite">Home</router-link><span v-for="el in backtrack" v-bind:key="el[1]"><i class="mdi mdi-chevron-right" /><router-link :to="el[1]" class="linkWhite">{{el[0]}}</router-link></span></div>
</template>

<script>
import store from '@/data/store'
import quiz from '@/data/quiz'

export default {

    data() {
        return {
            backtrack: [],
            denylist: [
                "quiz", "covid", "fakenews", "consigli"
            ]
        }
    },
    mounted() {
        if (this.$route.name === "Chapter" || this.$route.name === "Topic") {
            if (!this.denylist.includes(this.$route.params.chapter)) {
                this.backtrack.push(['Sezioni', "/sezioni"])
            }
            this.backtrack.push([store.destination[this.$route.params.chapter].title, `/chapter/${this.$route.params.chapter}`])
            if (this.$route.name === "Topic") {
                this.backtrack.push([store.destination[this.$route.params.chapter].topics[this.$route.params.topic].title, `/chapter/${this.$route.params.chapter}/${this.$route.params.topic}`])
            }
        } else if (this.$route.name === "Sezioni") {
            this.backtrack.push(['Sezioni', "/sezioni"])
        } else if (this.$route.name === "Quiz" || this.$route.name === "QuizActive") {
            this.backtrack.push(['Quiz', "/quiz"])
            if (this.$route.name === "QuizActive") {
                this.backtrack.push([quiz[this.$route.params.quiz].title, `/quiz/${this.$route.params.quiz}`])
            }
        } else if (this.$route.name === "Help") {
            this.backtrack.push(['Help', "/help"])
        }
    }
}
</script>

<style scoped>
    .linkWhite {
        color: white !important;
        font-family: 'OpenSans-Regular'; font-weight: normal; font-style: normal;
    }
</style>
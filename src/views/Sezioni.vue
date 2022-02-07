<template>
<div>
    <h1 class="dataContainerTitle">Sezioni</h1>
    <div class="dataContainerBacktrack">
        <Backtrack />
    </div>
    <div class="dataContainer jeffContainer">
        <div class="sezioniContainer">
            <div>
                <div class="content"> <br> Qui troverai tutte le sezioni di teoria riguardanti le principali parti, organi ed apparati del nostro corpo.<br>
                    Per accedere all’area di teoria che più ti interessa clicca sull’elenco sottostante o sull’omino che trovi sulla destra, Jeff! <br>
                    <br>
                    <br>
                    <router-link to="/chapter/pelle">Pelle</router-link><br>
                    <router-link to="/chapter/occhi">Occhi</router-link><br>
                    <router-link to="/chapter/orecchie">Orecchie</router-link><br>
                    <router-link to="/chapter/bocca">Bocca</router-link><br>
                    <router-link to="/chapter/respiratorio">Apparato respiratorio</router-link><br>
                    <router-link to="/chapter/circolatorio">Apparato circolatorio</router-link><br>
                    <router-link to="/chapter/digerente">Apparato digerente</router-link><br>
                    <router-link to="/chapter/pelvica">Zona pelvica</router-link><br>
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
import Backtrack from '@/components/Backtrack'
import Jeff from '@/components/Jeff'

export default {
    components: {
        Backtrack,
        Jeff
    },
    data() {
        return {
            selected: ""
        }
    },
    methods: {
        onClick(zone) {
            this.$router.push(`/chapter/${zone}`)
        }
    }
}
</script>

<style scoped>
@import '../styles/container.css';

@import '../styles/jeff.css';
</style>

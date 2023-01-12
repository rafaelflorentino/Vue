<template>
  <v-container fluid>
    <v-form>
        <v-file-input 
            label="Selecione as Legendas"
            prepend-icon="mdi-message-text"
            append-outer-icon="mdi-send"
            outlined
            multiple 
            chips 
            v-model="files" 
            @click:append-outer="processSubtitles"/>     
    </v-form>
    <div class="pills">
        <PillComp v-for="word in groupedWords" :key="word.name"
            :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
//import { ipcRenderer } from 'electron'
import PillComp from './PillComp.vue'


export default {
    components: { PillComp },
    data: function (){
        return{
            files: [],
            // groupedWords:[]
            groupedWords:[
                {name: 'you', amount: 1234},
                {name: 'he', amount: 900},
                {name: 'i', amount: 853},                                         
            ]
        }
    },
    methods: {
        processSubtitles(){
            console.log(this.files)
            //const paths = this.files.map(f => f.path)
           // ipcRenderer.send('process-subtitles', paths)
           // ipcRenderer.on('process-subtitles', (event, resp) =>{
            // this.groupedWords = resp
            //    console.log(resp)
           // })
        }
    }
}
</script>

<style scoped> /* com scoped, efeito só vai ser aplicado a este componente pills */
    .pills{
        display: flex; /* Por um do lado do outro */
        flex-wrap: wrap;/* Ter quebra de linha */
        justify-content: space-between; /* Distribuir o espaço */
    }
</style>
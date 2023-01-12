const { ipcMain } = require('electron')

const pathsToRows = Require('./psthsToRows')
const prepareData = Require('./prepareData')
const groupWords = Require('./groupWords')

ipcMain.on('preocess-subtitles', (event, paths) => {
    console.log(paths)

    pathsToRows(paths)
        //.then(rows => console.log(row))
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
        .then(groupedWords => event.reply('process-subtitles', groupedWords))
        /*.then(() => {
            event.reply('preocess-subtitles', [
                {name: 'you', amount: 900},
                {name: 'i', amount: 1234}, 
                {name: 'he', amount: 853},
                {name: 'she', amount: 853},
                {name: 'our', amount: 133},   
                {name: 'house', amount: 23},   
            ])
        })*/
})


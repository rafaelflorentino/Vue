const fs = require('fs')

module.exports = paths =>{
    return new Promise((resolver, reject) =>{
        try{
            /*const rows = paths
            .map(path => fs.readFileSync(path).toString('utf-8'))
            .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
            .split('\n')*/
            const words= rows
            .filter(filterValidRow)
            .map(removePunctuation)
            .map(removeTags)
            .reduce(mergeRows)
            .split(' ')
            .map(word => word.toLowerCase())

            resolver(words)
        }catch(e){
            reject(e)
        }
    })
}

function filterValidRow(){
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}

const removePunctuation = row => row.replace(/[,?!.-]/g, '')
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()
const mergeRows = (fullText, row) => `${fullText} ${row}`
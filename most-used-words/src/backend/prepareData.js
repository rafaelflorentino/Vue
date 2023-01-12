
module.exports = rows =>{
    return new Promise((resolver, reject) =>{
        try{
            const words= rows
            .filter(filterValidRow)
            .map(removePunctuation)// tirar linhas com pontos !?.,-
            .map(removeTags) // tirar linhas com <><>
            .reduce(mergeRows)
            .split(' ')
            .map(word => word.toLowerCase())//deixar tudo em minusculo
            .map(word => word.replace('"', ''))//tirar aspas duplas

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
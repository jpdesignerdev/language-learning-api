const express = require('express')
const app = express()
const PORT = 8000

const languages = {
    'spanish': {
        'hours': 500,
        'yt channels': ['Dreaming Spanish', 'Mexicanos en China'],
        'anki recs': 'https://refold.la/spanish/deck/buy/'
    },
    'unknown': {
        'hours': 'N/A',
        'yt channels': 'N/A',
        'anki recs': 'N/A'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:language', (req, res)=>{
    const language = req.params.language.toLowerCase()
    if (languages[language]){
        res.json(languages[language])
    }else{
        res.json(languages['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
console.log(`Running on port ${PORT}.`)
})
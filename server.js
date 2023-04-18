const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const languages = {
    'unknown': {
        'hours': 'unknown',
        'yt channels': 'unknown',
        'anki recs': 'unknown',
    },
    'spanish': {
        'hours': 800,
        'yt channels': ['Dreaming Spanish', 'Mexicanos en China'],
        'anki recs': 'https://refold.la/spanish/deck/buy/'
    },
    'japanese': {
        'hours': 2500,
        'yt channels': ['ヒカル（Hikaru）'],
        'anki recs': 'https://refold.la/japanese/deck'
    },
    'mandarin': {
        'hours': 2200,
        'yt channels': ['Learn Chinese with Yi Zhao'],
        'anki recs': 'https://ankiweb.net/shared/info/722819818'
    },
    'french': {
        'hours': 900,
        'yt channels': ['InnerFrench', 'Français avec Pierre'],
        'anki recs': 'https://ankiweb.net/shared/info/893324022'
    },
    'german': {
        'hours': 1000,
        'yt channels': ['Easy German', 'Learn German with Anja'],
        'anki recs': 'https://ankiweb.net/shared/info/1586166030'
    },
    'italian': {
        'hours': 800,
        'yt channels': ['LearnAmo', 'Lucrezia Oddone'],
        'anki recs': 'https://ankiweb.net/shared/info/1713927804'
    },
    'portuguese': {
        'hours': 600,
        'yt channels': ['Street Smart Brazil', 'Portuguese Lab'],
        'anki recs': 'https://ankiweb.net/shared/info/952826225'
    },
    'russian': {
        'hours': 1100,
        'yt channels': ['BeFluentInRussian', 'Real Russian Club'],
        'anki recs': 'https://ankiweb.net/shared/info/822208674'
    },
    'korean': {
        'hours': 2200,
        'yt channels': ['Talk To Me In Korean', 'Sweet and Tasty TV'],
        'anki recs': 'https://ankiweb.net/shared/info/4066961604'
    },
    'arabic': {
        'hours': 2200,
        'yt channels': ['Learn Arabic with Maha', 'ArabicPod101'],
        'anki recs': 'https://ankiweb.net/shared/info/1429416700'
    },
    'turkish': {
        'hours': 1100,
        'yt channels': ['Turkish Tea Time', 'Turkish Lessons with Aynur'],
        'anki recs': 'https://ankiweb.net/shared/info/1091622457'
    },
    'polish': {
        'hours': 1100,
        'yt channels': ['Learn Polish with Ania', 'Polski Daily'],
        'anki recs': 'https://ankiweb.net/shared/info/1716597667'
    },
    'swedish': {
        'hours': 800,
        'yt channels': ['Swedish Made Easy', 'Learn Swedish with SwedishPod101'],
        'anki recs': 'https://ankiweb.net/shared/info/1883646481'
    },
    'dutch': {
        'hours': 600,
        'yt channels': ['Learn Dutch with DutchPod101', 'Dutch for Beginners'],
        'anki recs': 'https://ankiweb.net/shared/info/1880481633'
    },
    'norwegian': {
        'hours': 600,
        'yt channels': ['Learn Norwegian Naturally', 'Norwegian Teacher Karin'],
        'anki recs': 'https://ankiweb.net/shared/info/1529958967'
    },
    'danish': {
        'hours': 600,
        'yt channels': ['Learn Danish with DanishClass101', 'Speakdanish.dk'],
        'anki recs': 'https://ankiweb.net/shared/info/2018379287'
    },
    'finnish': {
        'hours': 1100,
        'yt channels': ['FinnishPod101', 'Kielenopas'],
        'anki recs': 'https://ankiweb.net/shared/info/1301955498'
    },
    'greek': {
        'hours': 1100,
        'yt channels': ['Learn Greek with GreekPod101', 'Greek Lessons OnDemand'],
        'anki recs': 'https://ankiweb.net/shared/info/176237954'
    },
    'hebrew': {
        'hours': 1100,
        'yt channels': ['HebrewPod101', 'Learn Hebrew Easily'],
        'anki recs': 'https://ankiweb.net/shared/info/1332710792'
    },
    'hindi': {
        'hours': 1100,
        'yt channels': ['Learn Hindi with HindiPod101', 'Hindi Unlocked'],
        'anki recs': 'https://ankiweb.net/shared/info/401848907'
    },
    'indonesian': {
        'hours': 900,
        'yt channels': ['Learn Indonesian with IndonesianPod101', 'Learn Bahasa Indonesia'],
        'anki recs': 'https://ankiweb.net/shared/info/781430735'
    },
    'czech': {
        'hours': 600,
        'yt channels': ['Czech with Jirka', 'Learn Czech - 3 Minute Czech'],
        'anki recs': 'https://ankiweb.net/shared/info/264187905'
    },
    'thai': {
        'hours': 1100,
        'yt channels': ['Learn Thai with ThaiPod101', 'PickupThai'],
        'anki recs': 'https://ankiweb.net/shared/info/293019843'
    },
    'vietnamese': {
        'hours': 1100,
        'yt channels': ['Learn Vietnamese with VietnamesePod101', 'Vietnamese with Annie'],
        'anki recs': 'https://ankiweb.net/shared/info/1965697482'
    },
    'tagalog': {
        'hours': 600,
        'yt channels': ['FilipinoPod101', 'Learn Tagalog with Fides'],
        'anki recs': 'https://ankiweb.net/shared/info/40587864'
    },
    'romanian': {
        'hours': 600,
        'yt channels': ['Learn Romanian with RomanianPod101', 'Study Romanian with Ruxi'],
        'anki recs': 'https://ankiweb.net/shared/info/1229540823'
    },
    'ukrainian': {
        'hours': 600,
        'yt channels': ['Learn Ukrainian with UkrainianPod101', 'Ukrainian Lessons'],
        'anki recs': 'https://ankiweb.net/shared/info/148179463'
    },
    'bengali': {
        'hours': 1100,
        'yt channels': ['Learn Bengali with BengaliPod101', 'Speak Bangla Like A Native'],
        'anki recs': 'https://ankiweb.net/shared/info/1865475594'
    },
    'croatian': {
        'hours': 600,
        'yt channels': ['Learn Croatian with CroatianPod101', 'Easy Croatian'],
        'anki recs': 'https://ankiweb.net/shared/info/190661393'
    },
    'estonian': {
        'hours': 600,
        'yt channels': ['Learn Estonian with EstonianPod101', 'Speakly'],
        'anki recs': 'https://ankiweb.net/shared/info/670052599'
    },
    'latvian': {
        'hours': 600,
        'yt channels': ['Learn Latvian with LatvianPod101', 'Speak Latvian Naturally'],
        'anki recs': 'https://ankiweb.net/shared/info/1480285389'
    },
    'lithuanian': {
        'hours': 600,
        'yt channels': ['Learn Lithuanian with LithuanianPod101', 'Lithuanian Language Club'],
        'anki recs': 'https://ankiweb.net/shared/info/875883546'
    },
    'slovak': {
        'hours': 600,
        'yt channels': ['Slovak from Scratch', 'Slovak Classes'],
        'anki recs': 'https://ankiweb.net/shared/info/1275762217'
    },
    'slovenian': {
        'hours': 600,
        'yt channels': ['Learn Slovenian with Sloveneonline', 'Slovenian Made Easy'],
        'anki recs': 'https://ankiweb.net/shared/info/1621287763'
    },
    'serbian': {
        'hours': 600,
        'yt channels': ['Learn Serbian with SerbianPod101', 'SpeakSerbian'],
        'anki recs': 'https://ankiweb.net/shared/info/163129316'
    }
}



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res)=>{
    res.json(languages)
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
    console.log(`Running on port ${process.env.PORT || PORT}.`)
  })

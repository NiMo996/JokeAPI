const express = require('express')
const path = require('path')
const app = express()
const port = 3010
const root = path.join(__dirname, 'public')

const jokes = [
    {
        "id": 1,
        "joke": "Why did the smartphone need glasses?",
        "punchline": "It lost all its contacts."
    },
    {
        "id": 2,
        "joke": "Why don't programmers like nature?",
        "punchline": "It has too many bugs."
    },
    {
        "id": 3,
        "joke": "Why did the computer go to the doctor?",
        "punchline": "It had a virus."
    },
    {
        "id": 4,
        "joke": "Why was the math book sad?",
        "punchline": "It had too many problems."
    },
    {
        "id": 5,
        "joke": "Why did the scarecrow win an award?",
        "punchline": "He was outstanding in his field."
    },
    {
        "id": 6,
        "joke": "Why don't scientists trust atoms?",
        "punchline": "Because they make up everything."
    },
    {
        "id": 7,
        "joke": "Why did the coffee file a police report?",
        "punchline": "It got mugged."
    },
    {
        "id": 8,
        "joke": "Why did the golfer bring two pairs of pants?",
        "punchline": "In case he got a hole in one."
    },
    {
        "id": 9,
        "joke": "Why don't some couples go to the gym?",
        "punchline": "Because some relationships don't work out."
    },
    {
        "id": 10,
        "joke": "Why did the bicycle fall over?",
        "punchline": "It was two-tired."
    },
    {
        "id": 11,
        "joke": "Why did the tomato turn red?",
        "punchline": "Because it saw the salad dressing."
    },
    {
        "id": 12,
        "joke": "Why did the computer keep freezing?",
        "punchline": "It left its Windows open."
    },
    {
        "id": 13,
        "joke": "Why did the music teacher need a ladder?",
        "punchline": "To reach the high notes."
    },
    {
        "id": 14,
        "joke": "Why did the student eat his homework?",
        "punchline": "Because the teacher said it was a piece of cake."
    },
    {
        "id": 15,
        "joke": "Why did the scarecrow become a successful neurosurgeon?",
        "punchline": "He was outstanding in his field."
    },
    {
        "id": 16,
        "joke": "Why did the math teacher open a window company?",
        "punchline": "Because he wanted to be a pane in the glass."
    },
    {
        "id": 17,
        "joke": "Why did the physics teacher break up with the biology teacher?",
        "punchline": "There was no chemistry."
    },
    {
        "id": 18,
        "joke": "Why did the computer keep freezing?",
        "punchline": "It left its Windows open."
    },
    {
        "id": 19,
        "joke": "Why did the calendar go to therapy?",
        "punchline": "It had too many dates."
    },
    {
        "id": 20,
        "joke": "Why did the smartphone go to school?",
        "punchline": "It wanted to improve its reception."
    }
]


//need middleware to parse json and serve static files

app.use(express.json())
app.use(express.static(root))

//get request to generate a random joke one at a time

app.get('/', (request, response) => {
    response.sendFile('index.html', {root}) //serves the index.html file
  })

  app.get('/api/v1/random-joke', (request, response) => {
    const randomIndex = Math.floor(Math.random() * jokes.length)
    response.json(jokes[randomIndex])
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`)

})
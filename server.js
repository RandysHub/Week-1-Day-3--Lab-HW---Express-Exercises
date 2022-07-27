const express = require('express')
const app = express()



app.get('/greeting/:name', (req, res) => {
    res.send(`Was good ${req.params.name}!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Your tip should be ${req.params.tipPercentage / req.params.total * 100}.`)
})

app.get('/magic/:question', (req, res) => {

    let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

    let randomResponse = Math.floor(Math.random() * responses.length)

    res.send(`The user asks: ${req.params.question} The Magic 8 Ball says: ${responses[randomResponse]}`)

})


app.listen(3000, () => {
    console.log('listening')
})
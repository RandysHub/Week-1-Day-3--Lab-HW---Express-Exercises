
const express = require('express')
const app = express()
const fs = require('fs')
app.engine('hypatia', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title >' + options.title + '</title>').replace('#link#', `<a href=${options.link}>${options.text}</a>`)
            .replace('#img#', `<img src=${options.img} + 'width="300" height="400">"`)
            .replace('#message#', '<h1 style="color: red">' + options.message + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'hypatia')

app.get('/', (req, res) => {
    res.render('template', {
        title: 'Welcome', message: `99 Bottles of beer on the wall`, link: `/98`, text: "take one down, pass it around"
    })

})

app.get('/:num', (req, res) => {
    res.render('template', {
        title: 'Welcome', message: `${req.params.num} Bottles of beer on the wall`, link: `/${req.params.num - 1}`, text: "Take one down, pass it around"
    })

})







app.listen(3000, () => {
    console.log('listening')
})
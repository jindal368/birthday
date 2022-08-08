const express = require('express')
const app = express()
app.use('/style', express.static(__dirname + '/style'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/script', express.static(__dirname + '/script'));
app.use('/customize.json', express.static(__dirname + '/customize.json'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port `)
})
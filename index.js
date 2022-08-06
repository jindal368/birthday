const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
app.use('/style', express.static(__dirname + '/style'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/script', express.static(__dirname + '/script'));
app.use('/customize.json', express.static(__dirname + '/customize.json'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
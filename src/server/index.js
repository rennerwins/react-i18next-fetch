const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())
app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'static/locales/en.json'))
})

app.listen('4000', () => console.log('server is running'))

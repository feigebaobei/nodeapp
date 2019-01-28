const express = require('express')
const app = express()
// app.use('/name', express.static('public'))
// let sendFile = (req, res, next) => {
//   res.send('hello from sendFile')
//   next()
// }
// let firstFn = () => {
//   console.log('first')
// }
// app.get('/', sendFile(req, res, next))

app.get('/', (req, res) => res.send('index page'))
let birds = require('./route/birds.js')
app.use('/birds', birds)
app.listen(3800, () => {console.log('success')})
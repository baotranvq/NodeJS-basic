const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! vs Bao ')
})

app.get('/about', (req, res) => {
    res.send('Iam Bao ')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
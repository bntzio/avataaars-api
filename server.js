const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hi there! 😄')
})

app.listen(port, () => {
  console.log(`Server started on port ${port} ✨`)
})

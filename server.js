const express = require('express')

const { generateAvatar } = require('./middleware/generateAvatar')

const app = express()
const port = process.env.PORT || 3000

app.get('/', generateAvatar, (req, res) => {
  res.send('Helloooo! 👋')
})

app.listen(port, () => {
  console.log(`Server started on port ${port} ✨`)
})

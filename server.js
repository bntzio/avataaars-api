const express = require('express')

const { generateRandomAvatar } = require('./generator/generateAvatar')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const avatar = generateRandomAvatar()
  res.json({ url: avatar })
})

app.listen(port, () => {
  console.log(`Server started on port ${port} ✨`)
})

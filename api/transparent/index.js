const { generateRandomAvatar } = require('./../../generator/generateAvatar')

module.exports = (_req, res) => {
  const avatar = generateRandomAvatar('Transparent')
  res.json({ url: avatar })
}

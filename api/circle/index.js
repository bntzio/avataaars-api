const { generateRandomAvatar } = require('./../../generator/generateAvatar')

module.exports = (_req, res) => {
  const avatar = generateRandomAvatar('Circle')
  res.json({ url: avatar })
}

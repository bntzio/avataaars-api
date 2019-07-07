const { generateRandomAvatar } = require('./../../generator/generateAvatar')

module.exports = (_req, res) => {
  const avatar = generateRandomAvatar()
  res.json({ url: avatar })
}

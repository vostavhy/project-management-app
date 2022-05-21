const {aliasWebpack, aliasJest } = require('react-app-alias')

const aliasMap = {}

const options = {
  alias: aliasMap,
}

module.exports = aliasWebpack(options)
module.exports.jest = aliasJest(options)
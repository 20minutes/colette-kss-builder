const path = require('path')

module.exports = function kssSymbolsTwigExtend(mainTwig) {
  mainTwig.extend((Twig) => {
    Twig.exports.extendFilter('relative', (value, args) => {
      if (!args) {
        return value
      }

      return path.relative(args[0], value)
    })
  })
}

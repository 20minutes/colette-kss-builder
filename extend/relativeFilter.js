const path = require('path')

module.exports = function relativeTwigFilter(mainTwig) {
  mainTwig.extend((Twig) => {
    Twig.exports.extendFilter('relative', (value, args) => {
      if (!args) {
        return value
      }

      return path.relative(args[0], value)
    })
  })
}

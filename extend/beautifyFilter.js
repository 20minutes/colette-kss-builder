const beautifyHtml = require('js-beautify').html

module.exports = function beautifyTwigFilter(mainTwig) {
  mainTwig.extend((Twig) => {
    Twig.exports.extendFilter('beautify', (value) => {
      const codeClean = beautifyHtml(value, {
        indent_size: 4,
        preserve_newlines: true,
      })

      return codeClean
    })
  })
}

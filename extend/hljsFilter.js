const hljs = require('highlight.js')

module.exports = function hljsFilter(mainTwig) {
  mainTwig.extend((Twig) => {
    Twig.exports.extendFilter('hljs', (value, args) => {
      const lang = args && args[0] ? args[0] : 'html'
      let result = value
      try {
        result = hljs.highlight(lang, value, true).value
      } catch (e) {
        // console.log(e)
      }

      return result
    })
  })
}

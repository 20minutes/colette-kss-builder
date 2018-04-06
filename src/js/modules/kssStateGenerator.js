const pseudoSelectors = [
  'hover',
  'enabled',
  'disabled',
  'active',
  'visited',
  'focus',
  'target',
  'checked',
  'empty',
  'first-of-type',
  'last-of-type',
  'first-child',
  'last-child',
]

function KssStateGenerator() {
  try {
    let idx
    let rule
    let stylesheet
    let len2
    let ref2

    const pseudos = new RegExp(`(\\:${pseudoSelectors.join('|\\:')})`, 'g')
    const ref = document.styleSheets

    for (let i = 0, len = ref.length; i < len; i += 1) {
      stylesheet = ref[i]
      if (stylesheet.href && stylesheet.href.indexOf(document.domain) >= 0) {
        ref2 = stylesheet.cssRules
        for (idx = 0, len2 = ref2.length; idx < len2; idx += 1) {
          rule = ref2[idx]
          if ((rule.type === CSSRule.STYLE_RULE) && pseudos.test(rule.selectorText)) {
            this.insertRule(rule.cssText.replace(pseudos, matched => matched.replace(/:/g, '.pseudo-class-')))
          }
          pseudos.lastIndex = 0
        }
      }
    }
  } catch (_error) {
    // error
  }
}

KssStateGenerator.prototype.insertRule = function insertRule(rule) {
  const headEl = document.getElementsByTagName('head')[0]
  const styleEl = document.createElement('style')
  styleEl.type = 'text/css'
  if (styleEl.styleSheet) {
    styleEl.styleSheet.cssText = rule
  } else {
    styleEl.appendChild(document.createTextNode(rule))
  }

  return headEl.appendChild(styleEl)
}

export default function kssStateGenerator() {
  return new KssStateGenerator()
}

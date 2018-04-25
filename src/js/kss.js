import ScrollSpy from 'scrollspy-js'
import kssStateGenerator from './modules/kssStateGenerator'

const kss = {}

kss.stateGenerator = kssStateGenerator()

kss.scrollSpy = new ScrollSpy('body', {
  nav: '.co_sidebar-active .co_sidebar-children > li > a',
  className: 'co_sidebar-active',
})

import(/* webpackChunkName: "kssHighlightCode" */ './modules/kssHighlightCode').then((kssHighlightCode) => {
  kss.highlightCode = kssHighlightCode
})

export default kss

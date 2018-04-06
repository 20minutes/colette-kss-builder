import { highlightAll } from 'prismjs'
import ScrollSpy from 'scrollspy-js'
import loadLanguages from 'prismjs/components/index'
import kssStateGenerator from './modules/kssStateGenerator'

loadLanguages(['twig', 'stylus', 'json'])

const kss = {}

kss.stateGenerator = kssStateGenerator()

highlightAll()

kss.scrollSpy = new ScrollSpy('#kss-node', {
  nav: '.kss-nav__menu-child > li > a',
  className: 'is-in-viewport',
})

export default kss

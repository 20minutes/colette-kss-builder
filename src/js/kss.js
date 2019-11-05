import ScrollSpy from 'scrollspy-js'
import Headroom from 'headroom.js'
import Tablist from '@accede-web/tablist'
import kssStateGenerator from './modules/kssStateGenerator'
import KssDarkModeSwitch from './modules/kssDarkModeSwitch'
import kssNav from './modules/kssNav'
import 'details-element-polyfill' // polyfill for details elements
import '../styl/co-styles.styl' // css

const kss = {}

kss.stateGenerator = kssStateGenerator()

kss.scrollSpy = new ScrollSpy('body', {
  nav: '.co_sidebar-active .co_sidebar-children > li > a',
  className: 'co_sidebar-active',
})

kss.headroom = new Headroom(document.querySelector('.co_navbar'), {
  offset: 50,
  tolerance: 5,
  classes: {
    initial: 'co_navbar-animated',
    pinned: 'co_navbar-pinned',
    unpinned: 'co_navbar-unpinned',
  },
})

// init headroom
kss.headroom.init()

const markupTabs = []
Array.prototype.forEach.call(document.querySelectorAll('.co_tabpanel-list'), (item) => {
  const tab = new Tablist(item)
  tab.mount()
  markupTabs.push(tab)
})

kss.darkModeSwitch = new KssDarkModeSwitch({
  switchSelector: '.co_switch-darkMode[data-target=html]',
})

kss.nav = kssNav()

export { kss }

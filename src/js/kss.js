import ScrollSpy from 'scrollspy-js'
import { colette } from 'colette/dist/js/colette.min'
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

const trigger = document.getElementById('trigger')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close')
const headroom = new colette.Headroom(document.querySelector('.co_trigger-sidebar'), {
  offset: 50,
  tolerance: 5,
  classes: {
    initial: 'co_trigger-sidebar-animated',
    pinned: 'co_trigger-sidebar-pinned',
    unpinned: 'co_trigger-sidebar-unpinned',
  },
})

// init headroom
headroom.init()

// close sidebar
function close() {
  document.body.removeAttribute('style')
  sidebar.classList.remove('co_sidebar-open')
  overlay.setAttribute('aria-hidden', true)
}

// open sidebar
function open() {
  document.body.removeAttribute('style')
  sidebar.classList.remove('co_sidebar-open')
  overlay.setAttribute('aria-hidden', true)
}


// trigger sidebar
trigger.addEventListener('click', open)
closeBtn.addEventListener('click', close)
sidebar.addEventListener('click', close)
overlay.addEventListener('click', close)

const markupTabs = []
Array.prototype.forEach.call(document.querySelectorAll('.co_tabpanel-list'), (item) => {
  markupTabs.push(new colette.Tablist(item))
})

export default kss

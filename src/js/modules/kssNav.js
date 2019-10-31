const defaultConfig = {
  openBtnId: 'trigger',
  sidebarId: 'sidebar',
  overlayId: 'overlay',
  closeBtnId: 'close',
}

function KssNav(cfg) {
  this.config = { ...defaultConfig, ...cfg }

  this.sidebar = document.getElementById(this.config.sidebarId)
  this.overlay = document.getElementById(this.config.overlayId)
  this.openBtn = document.getElementById(this.config.openBtnId)
  this.closeBtn = document.getElementById(this.config.closeBtnId)

  this.bindEvents()
}

// close sidebar
KssNav.prototype.close = function close() {
  document.body.style.overflow = null
  this.sidebar.classList.remove('co_sidebar-open')
  this.overlay.setAttribute('aria-hidden', true)
}

// open sidebar
KssNav.prototype.open = function open() {
  document.body.style.overflow = 'hidden'
  this.sidebar.classList.add('co_sidebar-open')
  this.overlay.removeAttribute('aria-hidden')
}

KssNav.prototype.bindEvents = function bindEvents() {
  // trigger sidebar
  this.openBtn.addEventListener('click', this.open.bind(this))
  this.closeBtn.addEventListener('click', this.close.bind(this))
  this.overlay.addEventListener('click', this.close.bind(this))
}

export default function kssNav(cfg) {
  return new KssNav(cfg)
}

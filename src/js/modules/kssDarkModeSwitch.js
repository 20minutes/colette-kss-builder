const defaultConfig = {
  switchSelector: null,
  getTargets: (el) => Array.from(document.querySelectorAll(el.getAttribute('data-target') || 'html')),
}

/** Class representing some dropDown components */
class KssDarkModeSwitch {
  /**
   * Create a new DropDown
   * @class
   * @param {Object} cfg config object
   * @param {String} [cfg.switchSelector] selector for switch buttons
   * @param {function} [cfg.getTargets] function to get targeted elements
   */
  constructor(cfg) {
    this.config = { ...defaultConfig, ...cfg }

    if (!this.config.switchSelector) {
      return
    }

    this.bindEvents()
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const el = e.target.closest(this.config.switchSelector)

      if (!el) {
        return
      }

      const checked = el.getAttribute('aria-checked') === 'true'

      Array.from(document.querySelectorAll(this.config.switchSelector)).forEach((switcher) => {
        switcher.setAttribute('aria-checked', checked ? 'false' : 'true')
      })

      this.config.getTargets(el).forEach((target) => {
        target.setAttribute('data-theme', checked ? 'light' : 'dark')
      })
    })
  }
}

export default KssDarkModeSwitch

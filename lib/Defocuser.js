/**
 * Defocuser is a utility class that helps implementing closing nested dropdowns
 */
export default class Defocuser {
  constructor () {
    this.elements = []
    document.addEventListener('click', this.defocus('bubbling').bind(this), { capture: false })
    document.addEventListener('click', this.defocus('capture').bind(this), { capture: true })
    document.addEventListener('keydown', this.escape('bubbling').bind(this), { capture: false })
    document.addEventListener('keydown', this.escape('capture').bind(this), { capture: true })
  }

  /**
   * Adds an element to the top of the list
   *
   * @param {HTMLElement} el root element to watch
   * @param {String} phase phase to watch ('bubbling', 'capture')
   * @param {Function) callback callback to call when detecting either Escape or click outside of el
   */
  addElement (el, phase, callback) {
    this.ensureDataStoreExistsInElement(el)
    el.__defocus.event = callback || (() => {})
    el.__defocus.observer = this.createMutationObserver(el)
    el.__defocus.phase = phase
    this.elements.unshift(el)
  }

  /**
   * Adds a secondary element to consider when determining if the clicked element is inside or outside
   *
   * @param {HTMLElement} el root element being watched
   * @param {HTMLElement} secondary secondary element to consider for calculation
   */
  setSecondaryElement (el, secondary) {
    this.ensureDataStoreExistsInElement(el)
    el.__defocus.secondary = secondary
  }

  // event handlers

  defocus (phase) {
    return e => {
      if (this.elements.length === 0 || !this.elements[0].__defocus || phase !== this.elements[0].__defocus.phase) {
        return
      }

      const primary = this.elements[0]
      const secondary = primary.__defocus.secondary

      if (this.isElementOutsideElements(e.target, primary, secondary) && primary.__defocus.event) {
        primary.__defocus.event()
      }
    }
  }

  escape (phase) {
    return e => {
      if (this.elements.length === 0 || !this.elements[0].__defocus || phase !== this.elements[0].__defocus.phase) {
        return
      }
      if (e.code === 'Escape') {
        const primary = this.elements[0]
        primary.__defocus.event()
      }
    }
  }

  // private methods

  isElementOutsideElements (el, primary, secondary) {
    let element = el
    while (element) {
      if (element == primary || element == secondary) return false
      element = element.parentNode
    }
    return true
  }

  ensureDataStoreExistsInElement(el) {
    if (!el.__defocus) Object.defineProperty(el, '__defocus', { value: {} })
  }

  hasNodeRemovedEvent (el, events) {
    return events.some(event => {
      for (let i = 0; i < event.removedNodes.length; i++) {
        if (event.removedNodes[i] == el) {
          return true
        }
      }
    })
  }

  removeElementFromStack (el) {
    if (this.elements[0] != el) {
      throw new Error('Top element is not the removed one')
    }
    this.elements.shift()
  }

  createMutationObserver (el) {
    const observer = new MutationObserver(events => {
      if (this.hasNodeRemovedEvent(el, events)) {
        this.removeElementFromStack(el)
        observer.disconnect()
      }
    })
    observer.observe(el.parentNode, { childList: true })

    return observer
  }
}

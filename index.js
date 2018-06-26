/**
 * Defocuser is a utility class that helps implementing closing nested dropdowns
 */
export default function Defocuser() {
  const elements = []

  document.addEventListener('click', defocus('bubbling').bind(this), { capture: false })
  document.addEventListener('click', defocus('capture').bind(this), { capture: true })
  document.addEventListener('keydown', escape('bubbling').bind(this), { capture: false })
  document.addEventListener('keydown', escape('capture').bind(this), { capture: true })

  /**
   * Adds an element to the top of the list
   *
   * @param {HTMLElement} el root element to watch
   * @param {String} phase phase to watch ('bubbling', 'capture')
   * @param {Function) callback callback to call when detecting either Escape or click outside of el
   * @param {Boolean} stopPropagation if set to true the event's propagation will be stopped
   * @param {Boolean} preventDefault if set to true the default behavior of clicked element will be stopped
   */
  this.addElement = function(el, phase, callback, stopPropagation, preventDefault) {
    ensureDataStoreExistsInElement(el)
    el.__defocus.event = callback || (() => {})
    el.__defocus.observer = createMutationObserver(el)
    el.__defocus.phase = phase
    el.__defocus.stopPropagation = stopPropagation
    el.__defocus.preventDefault = preventDefault
    elements.unshift(el)
  }

  /**
   * Adds a secondary element to consider when determining if the clicked element is inside or outside
   *
   * @param {HTMLElement} el root element being watched
   * @param {HTMLElement} secondary secondary element to consider for calculation
   */
  this.setSecondaryElement = function(el, secondary) {
    ensureDataStoreExistsInElement(el)
    el.__defocus.secondary = secondary
  }

  // event handlers

  function defocus (phase) {
    return function(e) {
      if (elements.length === 0 || !elements[0].__defocus || phase !== elements[0].__defocus.phase) {
        return
      }

      const primary = elements[0]
      const secondary = primary.__defocus.secondary

      if (isElementOutsideElements(e.target, primary, secondary) && primary.__defocus.event) {
        primary.__defocus.event()
        if (primary.__defocus.stopPropagation) e.stopPropagation()
        if (primary.__defocus.preventDefault) e.preventDefault()
      }
    }
  }

  function escape (phase) {
    return e => {
      if (elements.length === 0 || !elements[0].__defocus || phase !== elements[0].__defocus.phase) {
        return
      }
      if (e.code === 'Escape') {
        const primary = elements[0]
        primary.__defocus.event()
        if (primary.__defocus.stopPropagation) e.stopPropagation()
        if (primary.__defocus.preventDefault) e.preventDefault()
      }
    }
  }

  // private methods

  function isElementOutsideElements (el, primary, secondary) {
    let element = el
    while (element) {
      if (element == primary || element == secondary) return false
      element = element.parentNode
    }
    return true
  }

  function ensureDataStoreExistsInElement(el) {
    if (!el.__defocus) Object.defineProperty(el, '__defocus', { value: {} })
  }

  function hasNodeRemovedEvent (el, events) {
    return events.some(event => {
      for (let i = 0; i < event.removedNodes.length; i++) {
        if (event.removedNodes[i] == el) {
          return true
        }
      }
    })
  }

  function removeElementFromStack (el) {
    if (elements[0] != el) {
      throw new Error('Top element is not the removed one')
    }
    elements.shift()
  }

  function createMutationObserver (el) {
    const observer = new MutationObserver(events => {
      if (hasNodeRemovedEvent(el, events)) {
        removeElementFromStack(el)
        observer.disconnect()
      }
    })
    observer.observe(el.parentNode, { childList: true })

    return observer
  }
}

// Svelte action: inView - observe when element enters/leaves viewport and animate
// Usage:
// <div use:inView={{ threshold: 0.2, once: true, className: 'in-view' }}>
//    ...
// </div>
// Features:
// - Add/remove a CSS class when in view
// - Dispatch custom events: 'enter' and 'exit'
// - Options: root, rootMargin, threshold, once, className, onEnter, onExit
// - SSR safe (no-ops on server)

/**
 * @typedef {Object} InViewOptions
 * @property {Element|null} [root] - The root element for the observer
 * @property {string} [rootMargin] - CSS margin to grow/shrink root bounds
 * @property {number|number[]} [threshold] - Percentage of element visibility to trigger
 * @property {boolean} [once] - If true, unobserve after first enter
 * @property {string} [className] - Class to add when element is in view
 * @property {(node: Element, entry: IntersectionObserverEntry) => void} [onEnter]
 * @property {(node: Element, entry: IntersectionObserverEntry) => void} [onExit]
 */

/**
 * Svelte action that observes when an element enters/leaves the viewport
 * and toggles a class, dispatches events, and supports cleanup.
 * @param {HTMLElement} node
 * @param {InViewOptions} [options]
 */
export function inView(node, options = {}) {
  // SSR guard
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return { destroy() {}, update() {} };
  }

  let opts = normalizeOptions(options);
  let observer = createObserver(handleIntersect, opts);
  let hasEntered = false;

  function handleIntersect(entries) {
    for (const entry of entries) {
      const isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0;
      if (isIntersecting) {
        if (!hasEntered) {
          hasEntered = true;
        }
        if (opts.className) node.classList.add(opts.className);
        node.dispatchEvent(new CustomEvent('enter', { detail: { entry } }));
        if (typeof opts.onEnter === 'function') opts.onEnter(node, entry);
        if (opts.once) {
          observer.unobserve(node);
        }
      } else {
        if (opts.className) node.classList.remove(opts.className);
        // Only emit exit after an initial enter to avoid exit on initial setup
        if (hasEntered) {
          node.dispatchEvent(new CustomEvent('exit', { detail: { entry } }));
          if (typeof opts.onExit === 'function') opts.onExit(node, entry);
        }
      }
    }
  }

  observer.observe(node);

  return {
    update(newOptions = {}) {
      const next = normalizeOptions(newOptions);
      // If options changed in a way that requires a new observer, recreate
      const reinitNeeded = observerNeedsReinit(opts, next);
      opts = next;
      if (reinitNeeded) {
        try { observer.unobserve(node); } catch {}
        observer.disconnect();
        observer = createObserver(handleIntersect, opts);
        observer.observe(node);
      }
    },
    destroy() {
      try { observer.unobserve(node); } catch {}
      observer.disconnect();
    }
  };
}

function normalizeOptions(options) {
  return {
    root: options.root ?? null,
    rootMargin: options.rootMargin ?? '0px',
    threshold: options.threshold ?? 0.1,
    once: options.once ?? false,
    className: options.className ?? '',
    onEnter: options.onEnter,
    onExit: options.onExit
  };
}

function createObserver(callback, opts) {
  return new IntersectionObserver(callback, {
    root: opts.root || null,
    rootMargin: opts.rootMargin,
    threshold: opts.threshold
  });
}

function observerNeedsReinit(prev, next) {
  return (
    prev.root !== next.root ||
    prev.rootMargin !== next.rootMargin ||
    JSON.stringify(prev.threshold) !== JSON.stringify(next.threshold)
  );
}

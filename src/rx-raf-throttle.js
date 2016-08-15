/**
 * Created by tushar.mathur on 15/08/16.
 */

'use strict'

import raf from 'raf'
import {Observable as O} from 'rx'

/**
 * Throttles a stream using {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame requestAnimationFrame}.
 * A value from the source stream is fired only once per requestAnimationFrame.
 * @param {Observable} source
 * @example
 * import {rxRAFThrottle} from 'rx-raf-throttle'
 * rxRAFThrottle(
 *   Rx.Observable.interval(1)
 * ).subscribe(x => console.log(x))
 * @returns {Observable}
 */
export function rxRAFThrottle (source) {
  return O.create(observer => {
    let frame = null

    function queueValue (value) {
      if (frame) raf.cancel(frame)
      frame = raf(() => observer.next(value))
    }

    return source.subscribe(
      queueValue,
      err => observer.error(err),
      () => observer.complete()
    )
  })
}

/**
 * @external Observable
 * @see {@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md}
 */

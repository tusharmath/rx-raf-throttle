/**
 * Created by tushar.mathur on 15/08/16.
 */

'use strict'

import raf from 'raf'
import {Observable as O} from 'rx'

/**
 * Throttles a stream using {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame requestAnimationFrame}.
 * A value from the source stream is fired only once per requestAnimationFrame, see
 * {@link https://esnextb.in/?gist=dae749a4d12d3a78a8685404ed7f3740 demo}.
 * @param {external:Observable} source
 * @example
 * import {rxRAFThrottle} from 'rx-raf-throttle'
 * rxRAFThrottle(Rx.Observable.interval(1)).subscribe(x => console.log(x))
 * @returns {external:Observable}
 */
export function rxRAFThrottle (source) {
  return O.create(observer => {
    let frame = null
    let value

    function dispatch () {
      observer.onNext(value)
      frame = null
    }

    function queueValue (_value) {
      value = _value
      if (!frame) frame = raf(dispatch)
    }

    return source.subscribe(
      queueValue,
      err => observer.onError(err),
      () => observer.onCompleted()
    )
  })
}

/**
 * @external Observable
 * @see {@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md}
 */

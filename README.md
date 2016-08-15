# rx-raf-throttle
[![npm](https://img.shields.io/npm/v/rx-raf-throttle.svg)](https://www.npmjs.com/package/rx-raf-throttle)
[![Coverage Status](https://coveralls.io/repos/github/tusharmath/rx-raf-throttle/badge.svg)](https://coveralls.io/github/tusharmath/rx-raf-throttle)
[![Donate Bitcoin](https://img.shields.io/badge/donate-bitcoin-green.svg)](https://www.coinbase.com/tusharmath)

throttles rx based streams using requestAnimationFrame

# Installation

```bash
npm install rx-raf-throttle --save
```

# Documentation
<a name="rxRAFThrottle"></a>

## rxRAFThrottle(source) ⇒ <code>Observable</code>
Throttles a stream using [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).
A value from the source stream is fired only once per requestAnimationFrame.

**Kind**: global function  

| Param | Type |
| --- | --- |
| source | <code>Observable</code> | 

**Example**  
```js
import {rxRAFThrottle} from 'rx-raf-throttle'
rxRAFThrottle(
  Rx.Observable.interval(1)
).subscribe(x => console.log(x))
```

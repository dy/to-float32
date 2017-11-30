# to-float32 [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges)

Dirty little helper to convert array to float32 array or return round remainder of converting to float32. Useful for sending data to webgl buffers.

[![npm install to-float32](https://nodei.co/npm/to-float32.png?mini=true)](https://npmjs.org/package/to-float32/)

```js
let {float, fract} = require('to-float32')

let positions = Array.from({length: 1024}, Math.random)

// create float32 data
let buffer = float(positions)

// create fract32 data
let fractBuffer = fract(positions)
```

## License

(c) 2017 Dmitry Yv. MIT License

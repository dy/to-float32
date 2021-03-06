# to-float32 [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://travis-ci.org/dy/to-uint8.svg?branch=master)](https://travis-ci.org/dy/to-uint8)

Dirty little helper to convert array to float32 array or return round remainder of converting to float32. Useful for sending data to webgl buffers.

[![npm install to-float32](https://nodei.co/npm/to-float32.png?mini=true)](https://npmjs.org/package/to-float32/)

```js
let {float32, fract32} = require('to-float32')

let data = Array.from({length: 1024}, Math.random)

// create float32 data
let buffer = float(data)

// get float32 remainders
let fractBuffer = fract32(data)

// convert number to float32
let f32 = float32(0.1) // 0.10000000149011612

// get float32 number remainder
let rem32 = fract32(0.1) //
```

Fract data is _Float32Array_ with values calculated as `origValue - float32value`

## License

(c) 2017 Dmitry Yv. MIT License

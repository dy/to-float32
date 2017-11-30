/* @module to-float32 */

'use strict'

module.exports = float32
module.exports.float32 =
module.exports.float = float32
module.exports.fract32 =
module.exports.fract = fract32

// return fractional part of float32 array
function fract32 (arr) {
	let fract = new Float32Array(arr.length)
	fract.set(arr)
	for (let i = 0, l = fract.length; i < l; i++) {
		fract[i] = arr[i] - fract[i]
	}
	return fract
}

// make sure data is float32 array
function float32 (arr) {
	if (arr instanceof Float32Array) return arr

	let float = new Float32Array(arr)
	float.set(arr)
	return float
}

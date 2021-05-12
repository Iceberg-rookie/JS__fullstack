export function a() {}
export function b() {}

export default function() {}

import {a, b} from './a.js'
import xxx from 'b.js'

// CommonJs
// CommonJs 是node独有的规范，浏览器种使用需要用到 Browserify 解析
module.exports = {
  a: {}
}
exports.a = 1

var module = requeire('./a.js')
module.a


var module = {
  exports: {}
}
var exports = module.exports

// AMD
// 是由 requeire.js 提出
define(['./a', './b'], function(a, b) {
  a.do()
  b.do()
});
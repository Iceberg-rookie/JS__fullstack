function once(func) {
  var tag = true
  return function() {
    if (tag === true) {
      func.apply(null, arguments)
      tag = false
    }
    return undefined
  }  
}

function test() {
  console.log('hello');
}

once(test())



function debounce(fn, delay = 500) {
  var timeout ;
  return function() {
    clearTimeout (timeout)
    timeout = setTimeout(fo, delay)
  }
}
  
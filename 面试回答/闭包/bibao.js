for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i*1000) // 6 6 6 6 6
}

// let
for (let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i*1000) // 1 2 3 4 5
}

// 自执行函数
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 1 2 3 4 5 
    }, j*1000)
  })(i)
}

// setTimeout的第三个参数
for (var i = 1; i <= 5; i++) {
  setTimeout(function(j) {
    console.log(j);
  }, i*1000, i) // 1 2 3 4 5
}
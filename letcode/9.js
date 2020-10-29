var isPalindrome = function(x) {
  if (x < 0) return false;
  var y = 0;
  var temp = x;
  while(x != 0){
      y = y * 10 + x % 10;
      x = parseInt(x / 10); // JS中用parseInt取整
      // console.log(x);
      // console.log(y);
  }
  // console.log(y);
  // console.log(temp);
  // console.log(y === temp);
  return y === temp; 
};

// isPalindrome(121);
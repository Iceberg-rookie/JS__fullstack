// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })

// 1 7 6 8 2 4 3 5 9 11 10 12

async function async1() {
  console.log( '1' )
  console.log(await async2())
  console.log( '2' )
}
async function async2() {
  console.log('3')
  setTimeout(
    ()=>console.log('4')
  ,0)
  console.log( '5' )
}
console.log( '6' )
setTimeout( function () {
  console.log( '7' )
}, 0 )
async1();
new Promise( function ( resolve ) {
  console.log( '8' )
  resolve();
} ).then( function () {
  console.log( '9' )
} )
console.log( '10' )

// 6 1 3 5 8 10 undefind 2 9 7 4
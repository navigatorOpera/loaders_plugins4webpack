// test
import * as demo from './test';
console.log(22);
function test(){console.log('log'); demo();};
console.log(223);



// console.log((function(window, undefined){
//     window.onload = function(){
//         return new Promise(resolve => {
//             resolve(1)
//         }).then(data => setTimeout(() => {
//             console.log(data);
//         }, 1000));
//     }
// })(window));

console.log((function(){}));
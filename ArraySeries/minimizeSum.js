//Minimize Sum Of Array (Array Series #1)
/*Given an array of intgers , Find the minimum sum which is obtained
from summing each Two integers product .
1. Array/list will contain positives only .
2. Array/list will always has even size

Ex:  minSum({5,4,2,3}) ==> return (22) */

function minSum(arr) {
  var arr_asc = arr.sort((a,b) => a-b) 
  let sum = 0;
  for(let i = 0; i < arr.length / 2; i++){
      sum += arr[i] * arr[arr.length - i - 1];
  }
return sum;
}
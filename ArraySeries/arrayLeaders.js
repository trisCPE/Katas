//Array Leaders
/* An element is leader if it is greater than The Sum all the elements 
to its right side.
Given an array/list [] of integers , Find all the LEADERS in the array.
*/

var arrayLeaders = numbers => {
  return numbers.filter((v, i) => {

  let sum = 0;
  
  i === numbers.length - 1 ? (sum = 0)
  : (sum = numbers.slice(i+1).reduce((a,b) => a+b));
 
 return v > sum;
  
  });
};
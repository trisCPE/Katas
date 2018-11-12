//sort the Odd
/*  Takes an array as argument and return it only sorting the odd numbers, all
the even numbers have to stay at their place*/
/* Example : sortArray([5,3,2,7,6,1]) = [1,3,2,5,6,7] */

function sortArray(array) {
  const oddtab = [];
  const eventab = [];
  const result = [];
for (let i = 0; i < array.length; i ++) {
    if (array[i]%2 === 0) {
      eventab.push(array[i]);
    } else {
      oddtab.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b); //sort the odds in ascending order
  for (let i = 0; i < array.length; i ++) {
    if (array[i]%2 === 0) {
      result.push(eventab.shift()); //push the first number of evenArr
    } else {
      result.push(oddtab.shift());
    }
  }
  return result;
}
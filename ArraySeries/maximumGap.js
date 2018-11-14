//Maximum Gap

/*Given an array/list [] of integers , Find The maximum difference 
between the successive elements in its sorted form. */

function maxGap (numbers){
  var sorted = numbers.sort((a,b) => a-b);
  const arr = []
  for(let i = 1; i<numbers.length;i++){
      arr.push(sorted[i] - sorted[i-1]);
  }
  return Math.max(...arr);
}
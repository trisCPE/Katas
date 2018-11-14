//Minimum Steps (Array Series #6)

/*Given an array of N integers, you have to find how many times 
you have to add up the smallest numbers in the array until their 
Sum becomes greater or equal to K.
Ex: minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2) */
function minimumSteps(numbers, value){
  var n = 0;
  var sorted = numbers.sort((a,b) => a-b);
  var sum = sorted[0];
  
  if(value <= sum) {return n}
  
  for(let i=1;i<numbers.length;i++){
      sum += numbers[i];
      n++; //number of steps
      if(sum >= value){
          return n;
      }
  }
}
//Find the parity outlier

/* Given an array of integers(with a length of 3 at least, 
there is either N-1 odd integers or even integers except for 
a single integer n which is returned by this function */
function findOutlier(integers){
  let n = 0,m = 0;
  let outlier = 0; 
  for(let i = 0; i < 3; i++){ /* Count number of odd and even integers for minimum length */
      (Math.abs(integers[i]) % 2 === 0) ? n++ : m++; 
  }
  
  if(n > m){ // if there is more even numbers
    let i = 0;
    while(i < integers.length){
      if (Math.abs(integers[i]) % 2 === 1) {
        outlier = integers[i]; // retrieve the only odd number
      }
      i++;
    }
  }
  else{
    let i = 0;
    while(i < integers.length){
      if (Math.abs(integers[i]) % 2 === 0) {
        outlier = integers[i];
      }
      i++;
    }      
  }
 return outlier;
}
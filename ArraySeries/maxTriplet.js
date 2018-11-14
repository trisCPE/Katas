//Maximum Triplet Sum (Array Series #7)

/* Given an array/list [] of n integers ,
find maximum triplet sum in the array Without duplications. */
function maxTriSum(numbers){
  let arr = Array.from(new Set(numbers)).sort((a,b) => b-a);//new Set to avoid duplications
  return arr.slice(0,3).reduce((a,b) => a+b);
}

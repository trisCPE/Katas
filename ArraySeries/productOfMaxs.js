//Product Of Maximums Of Array 

/* Given an array/list [] of integers , 
Find the product of the k maximal numbers.
Ex: maxProduct ([4, 3, 5], 2) ==>  return (20)*/
function maxProduct(numbers, size){
 return numbers.sort((a,b) => b-a).slice(0,size).reduce((a,b)=>a*b);
}
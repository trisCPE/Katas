//Product Array (Array Series #5)

/*Given an array/list [] of integers , Construct a product array Of
same size Such That prod[i] is equal to
The Product of all the elements of Arr[] except Arr[i].*/
function productArray(numbers){
 prod = numbers.reduce((a,b) => a*b);
 return numbers.map(x => prod/x)
}
//FindNextPerfectSquare

/*Given a number sq, if it's square is an integer, return the next perfect square*/
/*Example : findNextSquare(16) = 25*/
function findNextSquare(sq) {

  const root = Math.sqrt(sq);
  if(Number.isInteger(root)){
    sq += 2*root+1;
    return sq; // Difference (n+1)²-n² = 2n+1 between two perfect squares      
  }

return -1;
  
}
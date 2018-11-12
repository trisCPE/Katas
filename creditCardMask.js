//Credit card mask

/* Changes all characters into "#" excepted the last four and return the result */
/* Example : maskify('123456') = '##3456', maskify('15') = '15' */
function maskify(cc) {
  var tab = cc.split("");
  for(i=0; i < tab.length - 4; i++){
     tab[i] = "#";
  }
return tab.join("");
}
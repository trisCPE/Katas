//Write a number in expanded
/*Example : expandedForm(15) = '10 + 5' expandedForm(113)='100+10+3'*/

function expandedForm(num) {
 const len =num.toString().length
  let i = 10**(num.toString().length-1)
  let str = "";
  
while(num>0){
  if(Math.floor(num/i)*i !== 0){
        str += (Math.floor(num/i)*i).toString() + ' + ';}
  num = num % i;
  i /= 10;
    }
 return str.substring(0,str.length-3);

  }

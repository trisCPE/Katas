function longest(s1, s2) {

  s1=s1.split("");
  s2=s2.split("");
    
  var new_s = [...s1,...s2];//spread to concatenate s1 and s2
  new_s=new_s.sort();
  var ans_s=[];
    
  for(var i=0;i<new_s.length;i++){
        if(ans_s.indexOf(new_s[i])===-1)
        {
            ans_s.push(new_s[i]); //Add to the final array
        }
  }
  ans_s=ans_s.join("");
    
  return ans_s;
}

function rot13(str) {
    //modified alphaphet
    const alphaphet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];
    //performing operation on the input (str)
    let decoded=str.toUpperCase()
    
    .split('')
    
    .map(element=>{
         if(alphaphet.indexOf(element)>=0){
          return alphaphet[alphaphet.indexOf(element)+13]
         }
         else{
           return  element;
         }
       })
      .join('');
      
        return decoded.toLowerCase();
    
       
    }
     
    
    
     console.log(rot13("zl anzr vf thfgnib  naq v shpxrq lbhe tvey"));
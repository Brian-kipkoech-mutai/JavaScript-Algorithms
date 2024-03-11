function convertToRoman(num) {
    let results='';
   const globalVariable={
  1000:'M',
  900:'CM',
  500:'D',
  400:'CD',
  100:'C',
  90:'XC',
  50:'L',
  40:'XL',
  10:'X',
  9:'IX',
  5:'V',
  4:'IV',
  1:'I'
   }
  
  const objectKeys=Object.keys(globalVariable);
        objectKeys.sort((a,b)=>b-a);
        
  
  
   while(num>0){
  for(let key of objectKeys){
  if( num>=key){
    
    results+=globalVariable[key];
    num-=key;
    break;
  }
  
  }
   }
   return results;
  }
  
   console.log(convertToRoman(800));
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


  //  second  solution utilizing   recursion concept   

   

function convertToROman(input){
  const romanNumerals = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    };
    if(input==0){
      return ""
    }
    for(const key of Object.keys(romanNumerals).sort((a,b)=>b-a)){
       if(input>=key){
      input-=key
         let answer=convertToROman(input)+romanNumerals[key];
         
         return answer.split('').reverse().join('')
         //  we are  reversing the  string because the call stack utilize LIFO(last in first out) 
        //  hence the roman numbers will be added in reverse
      
       }
    }

}

console.log(convertToROman(8));
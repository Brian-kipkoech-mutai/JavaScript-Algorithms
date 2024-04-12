const toBinary=(input)=>{
    console.log('input',input);
    let binaryString='';
    while (input>0) {
    binaryString+=input%2;
    input=Math.floor(input/2)
    }
     
    console.log('binaryString',binaryString);
 
  let backToDecimal=binaryString.split('').reduceRight((accumulator,element,index)=>{
   
    if(element==='1'){
      let  placeValue=index
       return accumulator+Math.pow(2,placeValue)
    }
      return accumulator 
  },0)

  console.log('Back to decimal:',backToDecimal);
  }

   

  toBinary(20)



  
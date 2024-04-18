
//solution one
const bubbleSort=(array)=>{
    let swapped=false;
  do {
     swapped=false
     for (let index = 0; index < array.length-1; index++) {
      
         if(array[index]>array[index+1]){
             let temp =  array[index+1];
             array[index+1]=array[index];
         
             array[index]=temp;
             swapped=true
             
         }
         
      
     }
  } while (swapped);
 
  
 return array
 }
 console.log('solution 1:',bubbleSort([3,7,2,1,9]));
 
 
 // solution 2 
  
 const bubbleSort2=(array)=>{
     let swapping= true;
  
 while(swapping){
     let noSwap=true;
     for (let index = 0; index < array.length-1; index++) {
      
         if(array[index]>array[index+1]){
             let temp =  array[index+1];
             array[index+1]=array[index];
         
             array[index]=temp;
              
             noSwap=false;
         }
          
 }
 
  if(noSwap){
     swapping=false;
  }
 }
 return array;
 }
 console.log('solution 2:',bubbleSort2([3,7,2,1,9]));

 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
 }
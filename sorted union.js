function uniteUnique(...arr) {
   
    let sorted=[];
    let newArray=[];
    
    // concatinating multiple  arrays to one array
    newArray=arr.reduce((accumulator,element)=>{
      return accumulator.concat(element);
    },[])

    //sorting the   array to make sure there are no duplicates 
    const arrayMap= new Map();
      newArray.forEach((element,i) => {

          if(!arrayMap.get(element)){
            arrayMap.set(element,i)
            
            sorted=[...sorted,element]
          }
          
      });

     
    
   
     
 
  return sorted;
  }
  
   console.log( uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
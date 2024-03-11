function destroyer(arr,...rest) {
let newArray=[];
for(let i=0;i<arr.length;i++){
  if(  rest.indexOf(arr[i])==-1){
newArray.push(arr[i])
  }
 }
 return newArray
}

 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

  // alternative 
  function destroyer(arr,...rest) {
    let newArray=[];
    return newArray=arr.filter(item=>rest.indexOf(item)==-1)
     
    }
    
     console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

     
      
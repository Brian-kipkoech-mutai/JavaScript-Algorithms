// function fearNotLetter(str) {
//   let alphaphet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let splited=str.split('');
// let newArray=[];
// for(let i=alphaphet.indexOf(splited[0]);i<splited.length+alphaphet.indexOf(splited[0]);i++){
//  newArray.push(alphaphet[i]);
// }
// let found= newArray.filter(elemnt=>newArray.indexOf(elemnt)!==splited.indexOf(elemnt));
//  console.log(found)
// return found[0];



// }
 
//  console.log(fearNotLetter("abde"))

 // alternative  
 function fearNotLetter(str) {
    let alphaphet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let splited=str.split('');
  let newArray=[];
  for(let i=alphaphet.indexOf(splited[0]);i<splited.length+alphaphet.indexOf(splited[0]);i++){
   newArray.push(alphaphet[i]);
  }
  console.log(newArray)
  let found= newArray.filter(elemnt=>!splited.includes(elemnt));
   return found[0]
  
  
  
  }
   
   console.log(fearNotLetter("cdfg"))
  
   

 
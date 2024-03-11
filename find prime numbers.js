let isPrime=numm=>{
  for (let i = 2; i <= Math.sqrt(numm); i++) {
    // console.log(i);
    if (numm % i === 0) return false; 
  }
  return true;
}

function sumPrimes(num) {
  let newArray=[];
  let answer=2;
while(answer<=num){
    newArray=[...newArray,answer]
    console.log(newArray);
  
  answer++;}
  

let spliced=newArray 
let found=spliced.filter(element=>isPrime(element));
// console.log(found);
return found.reduce((accumulator,element)=>{
  return accumulator+element;
},0)
}
 console.log(sumPrimes(7));
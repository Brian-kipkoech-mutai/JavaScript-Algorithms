function sumFibs(num) {
    let array=[];
    let fibonacci=[];  
  for(let i=0;i<=num;i++){
    array.push(i);
  }
  fibonacci=array.slice(0,2);
  for(let i=fibonacci[1];i<=num;i+=fibonacci[fibonacci.length-2]){
   fibonacci.push(i)
  }
  console.log(fibonacci);
  let filterd=fibonacci.filter(element=>!(element%2===0));
  console.log(filterd);
  let reduced=filterd.reduce((accumulator,element)=>{
   return accumulator+element
    
  },0)
  return reduced
  }
  
   console.log(sumFibs(30));
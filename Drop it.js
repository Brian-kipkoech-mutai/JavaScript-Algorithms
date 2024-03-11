function dropElements(arr, func) {
    let copied=arr.slice();
  for (let i = 0; i < copied.length; i++) {
         if(func(arr[i])){
           return arr
         }
         else{
        arr.shift();
        i--;
        } ;     
      }
      return arr
  }
  
   console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
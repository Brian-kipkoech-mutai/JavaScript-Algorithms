function steamrollArray(arr) {
    let ar=arr
   return ar.reduce((acccumulator,element)=>{
      return acccumulator.concat(element)
    },[]).reduce((acccumulator,element)=>{
      return acccumulator.concat(element)
    },[]).reduce((acccumulator,element)=>{
      return acccumulator.concat(element)
    },[]);
  }
  
   console.log(steamrollArray([1, {}, [3, [[4]]]]))
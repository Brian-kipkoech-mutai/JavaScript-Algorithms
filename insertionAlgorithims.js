 const insertionSort=(array)=>{
    for (let i = 1; i < array.length; i++) {
        const currentElement = array[i];
        let  j=i-1;
        while ( j>=0 && array[j]>currentElement) {
    
            array[j+1]=array[j];
            j--;
            
        }
        array[j+1]=currentElement;
        
    }
    return array;
 }

 console.log(insertionSort([2,5,6,8,1,9]));
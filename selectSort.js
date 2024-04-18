const selectSort=(array)=>{
for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i+1; j < array.length; j++) {
        const element = array[j];
        if(element<array[minIndex]){
          minIndex=j;
        }

         
    }
    const temp=array[i]
        array[i]=array[minIndex]
        array[minIndex]=temp;
}
return array
}


console.log(selectSort([9,7,8,4,1,6]));
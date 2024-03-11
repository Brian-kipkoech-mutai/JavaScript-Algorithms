const Person = function(first, last) {
    let newArray=[first,last]
    let copied=newArray.slice();
    
      this.getFullName =()=> copied[0]+" "+copied[1];
      this.getFirstName=()=>copied[0];
      this.getLastName=()=>copied[1];
      this.setFirstName=(newFirst)=>copied[0]=newFirst;
      this.setLastName=(newLast)=>copied[1]=newLast;
      this.setFullName=(newFirst,newLast)=>{return(copied[0]=newFirst ,copied[1]=newLast)};
      
    };
    
    const bm=new Person('brian','mutai');
    bm.setFullName("Emily Martinez", "de la Rosa");
    let found=bm.getLastName();
    console.log(found);
    console.log(Object.keys(bm))
    
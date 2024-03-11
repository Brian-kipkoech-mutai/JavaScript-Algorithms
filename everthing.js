function truthCheck(collection, pre) {
    let answer='';
  for(let i=0;i<collection.length;i++){
    if(!collection[i][pre]){
      return false;
    }
    else answer=true;
  }
  return answer;
  }
   
   console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users"));
function addTogether() {
    const [first, second] = arguments;
    // console.log(arguments.length)
  
    if (typeof (first) === "number") {
      if (typeof (second) === "number") return first + second;
      if (arguments.length === 1) return (second) => addTogether(first, second);
    }
  }
  
  // console.log(addTogether(2))
              console.log(addTogether(3)(2));




              
              
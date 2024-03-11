function whatIsInAName(collection, source) {
  let found;
  found=collection.filter(object=>{
  return Object.keys(source).every(key=>source[key]==object[key]);
})
  return found;
}

 console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
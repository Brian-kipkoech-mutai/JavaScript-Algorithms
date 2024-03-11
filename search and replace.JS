function myReplace(str, before, after) {
let newString=str.slice(); 


if(/^[a-z]/.test(before)){
     after= after[0].toLowerCase()+after.slice(1);

}
else if(/^[A-Z]/.test(before)){
   after= after[0].toUpperCase()+after.slice(1);

}

 return newString.replace(before,after)
 
}
 
 console.log( myReplace("His name is Tom", "Tom", "john"));
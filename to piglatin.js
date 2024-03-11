function translatePigLatin(str) {
    let withVowels=(/^[aeiouAEIOU]+/);
    let withconsonanst=(/^[^aeiouAEIOU]+/);
    let latin="";
    let matched="";
    if(withVowels.test(str)){
    return latin=str+"way";
  }
  else if(withconsonanst.test(str)){
    
    matched= str.match(withconsonanst);
    let element=matched[0];
    latin=str.split(/^[^aeiouAEIOU]+/).filter(element=>element!=="").join();
    return latin+=element+"ay";
  }
  }
  
 console.log(  translatePigLatin("an"));
 console.log(translatePigLatin("Brian"));
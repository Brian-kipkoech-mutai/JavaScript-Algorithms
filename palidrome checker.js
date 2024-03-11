function palindrome(str) {
    //matching string
    const myRegex=/[a-z0-9]+/g;
    console.log(str.match(myRegex).join('').split(''))
    // reversing the matched string
   let reversed=str
   .toLowerCase()
   .match(myRegex)
   .join('')
   .split('')
   .reverse()
   .join('');
   console.log(reversed);
   //matching the original string
   let original=str
   .toLowerCase()
   .match(myRegex)
   .join('');
   console.log(original)
   //comparing the matched original string with the reversed string
   return reversed==original?  true: false;
   
   
   
  
  }
  
   console.log(palindrome("0_0 (: /-\ :) 0-0"));
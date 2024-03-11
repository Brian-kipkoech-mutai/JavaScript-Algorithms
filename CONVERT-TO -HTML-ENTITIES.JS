function convertHTML(str) {
    console.log(str)
  let newStr=str.split('').map(element=>{
    return element=='&'?'&amp;':element=='<'?'&lt;':element=='>'?'&gt;':element=='"'?'&quot;':element==="'"?'&apos;':element;
  }).join('');
  
    
    return newStr;
  }
  
   console.log(convertHTML('Stuff in "quotation marks"'));
   let array=[ 0, 1, 1, 2, 3, 5 ];
   let answer=[] 
   answer=array.filter(element=>!element%0.5==0);
   console.log(answer)
   let answerr=  2%2
   console.log(answerr);
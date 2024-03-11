function sumPrimes(num) {
    let newArray = [];
    let answer = 0;
    while (answer <= num) {
      newArray.push(answer);
      answer++;
    }
  
    let spliced = newArray.splice(2);
  
    let found = spliced.filter(element => {
      if (element === 2 || element === 3 || element === 5 || element === 7) {
        return true;
      } else if (
        element % 2 !== 0 &&
        element % 3 !== 0 &&
        element % 5 !== 0 &&
        element % 7 !== 0
      ) {
        return true;
      } else {
        return false;
      }
    });
  
    return found.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
  }
  
  console.log(sumPrimes(977));
  
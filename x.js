function kangaroo(x1, v1, x2, v2) {
    // Write your code herev2
    let velocityOfTheLast= x1<x2?v1:v2;
    let velocityOfTheFirst= x1>x2?v1:v2;

    
    return  velocityOfTheLast<=velocityOfTheFirst ?"NO":"YES"
    
 
}


console.log(kangaroo( 0, 3, 4, 2));
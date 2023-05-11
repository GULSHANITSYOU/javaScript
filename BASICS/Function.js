
// A simple declayretion of function 

function sum(a , b ){
    return a+b ;     
}

// const a = 12 ; 
// const b = 24 ; 

// console.log(sum(a,b)); 

// const c = 15 ; 
// const d = 15 ; 

// console.log(sum(c , d)); 
 


// Function Expression 

const sqr= function(num) {return num*num ; }   // this expression can't call upper code 

// console.log(sqr(3)) ; 
// console.log(sqr(9)) ; 





// Nested function 

function addSquares(a , b) {
    // nested 
    function square(num){
        return num*num;
    }

    const as = square(a) ; 
    const bs = square(b) ; 

    return as + bs; 
}


// console.log(addSquares(15 , 12)) ; 
// console.log(addSquares(9 , 5)) ; 

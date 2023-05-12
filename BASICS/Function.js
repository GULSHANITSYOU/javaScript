
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






// advance function conscepts  Call back function , arrow function 


// arrow function

const greet = (num) => {             // this function has no name & declession of "functionn" 
    for(i = 0 ; i<num ; i++){
        console.log("Hello world "); 
    }
}


// greet(5) ; 








// callback fuctions (A callback is a function passed as an argument to anther function)

const calculate = (a , b , operation) => {
    return operation(a , b ) ; 
}; 

// method one 

const addition =  calculate(3 , 4 , function(num1 , num2 ){ return num1+num2}); 
// console.log(addition);



// method two 

const  subtraction = (a , b) => a-b ; 

const subResult = calculate(8 , 3 , subtraction);

// console.log(subResult);






/// asyncroness function  & promises in js 
 

//setTimeout(function(){console.log("Hello Gulshan")} , 5000) ; 


//cheese 
function getCheese(){
    return new Promise((resolve , reject)=>{ 
    setTimeout(() => {
    const cheese = "🧀" ;
    resolve(cheese) ; 
    }, 2000);
    })
   }
   
   //dough
   function makedough(cheese){
    return new Promise((resolve , reject)=>{ 
    setTimeout(() => {
    const dough = cheese + "🍩" ;
    resolve(dough) ; 
    // reject("bad dough")
    }, 2000);
    })
   }
   
   // pizza
   function backpizza(dough){
    return new Promise((resolve , reject)=>{ 
    setTimeout(() => {
    const pizza = dough+"🍕" ;
    resolve(pizza) ; 
    }, 2000);
    })
   }



   async function orderpizza(){
         const cheese = await getCheese(); 
         const dough = await makedough(cheese) ; 
         const pizza = await backpizza(dough) ; 

         console.log("Here is pizza " + pizza) ; 
   }

   orderpizza( ) ; 
   
//    getCheese().then((cheese)=>{
//     console.log("This is cheese " , cheese) ; 
//     return makedough(cheese)
//    })
//    .then((dough)=>{
//     console.log("This is dough " , dough) ; 
//     return backpizza(dough) ;
//    })
//    .then((pizza)=>{
//     console.log("This is pizza " , pizza) ; 
//    }).catch((Data)=>{ console.log(Data)});
   
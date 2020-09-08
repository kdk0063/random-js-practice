// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer. 

function aspectRatio(x,y){
    console.log(x)
    console.log(y)
    
    return [Math.ceil(y * 1.77777), y];
    console.log([Math.ceil(y * 1.77777), y])
  }

//Math.ceil rounds up to the nearest Int
//ex https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_floor



// The function takes in 2 inputs x and y, and should return x to the power of y
// Simple, right? But you're NOT allowed to use Math.pow();
// Obs: x and y will be naturals, so DON'T take fractions into consideration;


function power(x,y){
  //SHOW ME WHAT YOU GOT!
  var p=1;
  for (var i=0;i<y;i++){
    p*=x;
  }
  return p;
}


// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1


function excludingVatPrice(price){
  //return (price/1.15).toFixed(2)
  
  console.log(Math.round((price / 1.15) * 100))
  
   return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100
}






//                                 Question / I dont get it stuff...
//      1. Math.floor()  

//      2. function orderByProperty(prop) {
//           var args = Array.prototype.slice.call(arguments, 1);
//           return function (a, b) {
//           var equality = a[prop] - b[prop];
//           if (equality === 0 && arguments.length > 1) {
//             return orderByProperty.apply(null, args)(a, b);
//          }
//          return equality;
//        };

//      3. console.log(JSON.stringify(this.newcatList, null, 3))  ----> look up consle.log table    





//                                Answers / Explanation ...
//      1. 	/[\W_]/g
// \W Matches any non-word character. Equivalent to [^A-Za-z0-9_].

// For example, /\W/ or /[^A-Za-z0-9_]/ matches '%' in "50%."

// the underscore (_) matches a literal underscore

// The brackets define a character class meaning that the regexp will match if any non word or an underscore character is present


// find value of A B C
// A<B<C
// A^2+B^2 = C^2
// A+B+C = 1000

// a
// b
// c


for(a=0; a<1000; a++){
  for(b=a+1; b<1000; b++){
    // for(c=b+1; c<1000; c++){    
      c=1000-a-b;  
      if(a < b < c && a^2+b^2==c^2){
        console.log(a, b, c)
      }
    }
  }








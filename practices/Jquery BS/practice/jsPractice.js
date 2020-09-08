//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number){
    if(number%2 == 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
};


// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  };


// Get the number n to return the reversed sequence from n to 1.
// Example : n=5 >> [5,4,3,2,1]

let seq = [];

const reverseSeq = n => {
while(n > 0){
  
  seq.push(n--);
}
  return seq;

  console.log(seq);
};


// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!


function cookie(x){
    // ...
    if(typeof x === "string"){
      return "Who ate the last cookie? It was Zach!";
    }
    if(typeof x === "number"){
      return "Who ate the last cookie? It was Monica!"
    }
    else{
      return "Who ate the last cookie? It was the dog!"
    }
  };

// OR ES6 version 

function cookie(x){
    return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : 
           typeof x == "number" ? "Who ate the last cookie? It was Monica!" : 
                                  "Who ate the last cookie? It was the dog!"
  };



//   Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

  function multipleOfIndex(array) {
    var multiArr = [];
    for(var i = 0; i < array.length; i++){
      if(array[i] % i === 0 || -0){ 
        multiArr.push(array[i]);
      }
    }
   return multiArr;
  };


// Create a function that returns the CSV representation of a two-dimensional numeric array.

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'


  function toCsvText(array) {
    return array.join('\n');
 }

 // or ES6 

 toCsvText = array => array.join('\n');




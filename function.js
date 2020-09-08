//1. Function declartion
function printHello() {
  console.log("hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello message");
log("1234");

//Q1
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function arrs(nums, k) {
  let arr1 = nums.slice(0, k + 1);
  let arr2 = nums.slice(k + 1);

  for (i = arr2.length; 0 < arr2.length; i--) {
    arr1.unshift(arr2.pop(i));
  }
  console.log("final arr1", arr1);
  return arr1;
}

arrs(nums, k);

//Q2
let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;

var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  let max = Math.max(...candies);

  for (i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= max ? result.push(true) : result.push(false);
  }

  return result;

  // const max = candies.reduce((a, curr) => a > curr ? a : curr, 0);
  // return candies.map(c => c + extraCandies >= maxf
};

//Q3
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

let address = "1.1.1.1";
function splitingString(address) {
  let x = address.replace(/\./g, "[.]");

  console.log("addrres", x);
}

splitingString(address);

//Q4
//Input: J = "aA", S = "aAAbbbb"
//Output: 3

let J = "aA";
let S = "aAAbbbb";

var numJewelsInStones = function(J, S) {
  let j = J.split("");
  let s = S.split("");
  let jewels = [];

  // loop thru s - if j includes an element in s, push that to an output array
  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    if (j.includes(element)) {
      jewels.push(element);
    }
  }

  // if the jewels array is > 0, return that length - otherwise return 0
  return jewels.length > 0 ? jewels.length : 0;
};

//Q5
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

function restoreString(s, indices) {
  let x = [];

  for (i = 0; i < indices.length; i++) {
    x[indices[i]] = s[i];

    console.log("indices: ", indices[i]);
    console.log("s: ", s[i]);
    console.log("current x ", x);
  }

  console.log("x final is", x);
  return x.join("");
}

restoreString(s, indices);

//Q6
{
  let numbs = [8, 1, 2, 2, 3];

  var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let count = 0;

    for (i = 0; i < nums.length; i++) {
      for (j = 0; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          count += 1;
        }
      }
      result.push(count);
      count = 0;
    }
    console.log("resut", result);
    return result;
  };
  smallerNumbersThanCurrent(numbs);
}

//Q7
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
{
  let n = 234;
  var subtractProductAndSum = function(n) {
    let nums = n
      .toString()
      .split("")
      .map(Number);

    console.log("nums is", nums);
    let sumTotal = nums.reduce((a, b) => {
      return a + b;
    });

    console.log("sum is", sumTotal);

    let timesTotal = nums.reduce((a, b) => {
      return a * b;
    });

    console.log("times is", timesTotal);

    result = timesTotal - sumTotal;

    console.log("result", result);
  };
  subtractProductAndSum(n);
}

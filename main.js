//Code Wars
//Sum without highest and lowest number
//With a given array, remove the lowest and highest number and add the rest together.

//Thought process
//To get the highest and lowest value, it'll be easier to just sort the array from lowest to highest, take off the lowest and highest value after sorted and then add the remaining together.
//Also test cases have null and undefined when null is entered and an empty array

function sumArray(array) {
  //Used and if else statment to see if the array is null or undefined
  if (array != null || array != undefined) {
    //sorted the array from lowest to highest
    array.sort((a, b) => a - b);

    //removed the first element, meaning the lowest number in the array because it's already sorted from lowest to highest
    array.shift();

    //now removing the highest value by removing the last element.
    array.pop();

    //then just did a for loop to add the remaining values and getting final result
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } else {
    return 0;
  }
}

console.log(sumArray([3, 8, 15, 2, 5]));

//Change previous time complexity from O(nlogn) to O(n)
//had issues with null and array length of 1 and 2, issues fixed
//time complexity 0(n)
function sumArray(array) {
  if(array == null || array.length <= 2){
    return 0;
  } 
  let min = array[0];
  let max = array[0];
  let sum = 0; 
  for(let i = 0; i < array.length; i++){
      if(min > array[i]){
         min = array[i];
      }
      if(max < array[i]){
        max = array[i];
     } 
      sum += array[i];
    }
    return sum - min - max;
  }
  
  console.log(sumArray([6, 2, 1, 8, 10]))

//LeetCode
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

//Thought process
//Need to be able to go through the array and match each number of the array again with the array of numbers but removing the first element of the array each time it goes through the first loop, because it'll use the same number again, thus giving us the same position of the array,

var twoSum = function (nums, target) {
  //Will go through the first number in the array and then jump into the nested loop to match
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    // console.log(num1);

    //This will start from the next number each time in the array so we can avoid the issue of having the same position come out twice in the result. for example if position 0 = value 5 and the target value is 10, result would be [0,0]. Can't use the same position twice
    for (let j = i + 1; j < nums.length; j++) {
      //Will skip first number each time it's gone through the first loop to see if it adds up to the target
      const num2 = nums[j];
      // console.log(num2);

      const sum = num1 + num2;
      // console.log(num1, num2);
      // console.log(i, j);

      //Once there's a match, it will return each of the positions necessary
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([1, 5, 3, 5, 15], 10));




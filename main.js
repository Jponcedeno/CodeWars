//Code Wars
//Sum without highest and lowest number
//With a given array, remove the lowest and highest number and add the rest together.
//Also test cases have null and undefined when null is entered and an empty array

//To get the highest and lowest value, it'll be easier to just sort the array from lowest to highest, take off the lowest and highest value after sorted and then add the remaining together.

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

console.log(sumArray([3, 5]));

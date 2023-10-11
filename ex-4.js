//Exercise#4 : Debugging 2

//Start coding here


function removeDuplicates(array) {
  let uniqueArray = []; //  This array will store the unique elements from the input array.
  for (let i = 0; i < array.length; i++)
  // for loop that iterates through each element of the input array. The loop variable i is used to access elements in the array.
  {
    if (uniqueArray.indexOf(array[i]) === -1) 
    // The indexOf method is used to check if the element exists in uniqueArray. If it doesn't (indexOf returns -1), it means the element is unique, and it is added to uniqueArray.
    {
      uniqueArray.push(array[i]);
      // If the current element from the input array is unique, it is added to the uniqueArray using the push method.
    }
  }
  return uniqueArray;
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
// the function removes the duplicates and returns [1, 2, 3, 4, 5] because it filters out the repeated occurrences of the elements.
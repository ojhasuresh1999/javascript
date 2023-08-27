// !How to find Duplicate elements in a given array
const arr1 = [1, 2, 8, 2, 9, 8];
const duplicate = arr1.filter((elem, index, arr) => {
  arr.indexOf(elem) !== index;
});
// console.log(duplicate);

// !How to find max and min value in a given array
const maxFunction = (arr) => {
  return arr.reduce((previous, current) => {
    return previous > current ? current : previous;
    // TODO: return previous > current ? previous : current;
  });
};
// console.log(maxFunction(arr1));

// !How to find second largest value and remove first largest value in array

function largestValue(arr) {
  const firstLargestValue = Math.max(...arr);
  const index = arr.indexOf(firstLargestValue);
  arr.splice(index, 1);
  const secondLargestValue = Math.max(...arr);
  return secondLargestValue;
}
console.log(largestValue(arr1));

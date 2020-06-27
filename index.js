//Exercises: 

//#1
//Room of 15 people - each have a dog 
//Goal => find dog of the same breed (golden retriever)
/*What's happening:
- You're calling out to all 15 people at the same time
- Best case: O(1) [you get a single answer if 2 ppl answer] (Answer)
 */

//Part II of #1: same as question above 
//Worst case: O(n)

//#2 Even or odd
//O(1)
const isEven = (value) => {
  if (value % 2 === 0) {
    return true; 
  }
  else {
    return false; 
  }
}

//#3 Are you here?
//O(n^2)
//2 arrays = outer loop iterates 2x - inner iterates 2x bcz outer does 
const areYouHere = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true; 
    }
  }
}

//#4 Doubler
//Answer: O(n)
//We're looking for values that can be multipled by 2
//Why: Array has 10 double items = print 10x or 100 dI = print 100x 
const doubleArrayValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2; 
  }
  return array 
}

//#5 Naive Search
//Worst Case: O(n) = anywhere in the array but the first (Answer)
//item: 10
//Best Case: O(1) = 1st item in the array 
const naiveSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
        return i;
    }
}
}

//#6: Creating pairs
//O(n^2)
const createPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        console.log(arr[i] + ", " +  arr[j] );
    }
}
}

//#7: Compute the sequence
//Best & Worse = 0(1)
//Best: it is a number that can be pushed 
//Worst: the number doesn't exist to push to end of array 
const compute = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0)
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3])
    }
  }
  return result; 
}

//#8: An effecient search 
//Constraint: array is always sorted
// O(log(n)) => regardless of the the array size, 
// it will divide the array in half and search either half for 'item' and only add a single operation
const effecientSearch = (array, item) => {
  let minIndex = 0; 
  let maxIndex = array.length - 1; 
  let currentIndex; 
  let currentElement; 

  while (minIndex <= maxIndex) {

    //Math.floor = returns largest int <= a given number 
    currentIndex = Math.floor((maxIndex + maxIndex) / 2);
    currentElement = array[currentIndex]

    if (currentElement < item) {
      minIndex = currentIndex + 1; 
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1; 
    }
    else {
      return currentIndex; 
    }
  }
  return -1; 
}

//#9 Random element 
//Function finds largest input & floating number * the entire length of the arr 
//Worst: O(n) it chooses the last item in the array 
//Best: O(1) it chooses the 1st item in the array 
//Answer: O(1) because its doesn't matter how many items in array it'll only choose 1 
const findRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

//#10 What Am I? 
//Answer: O(1) = no matter the answer it'll only be 1 input 
const isWhat = (n) => {
  if (n < 2 || n % 1 !== 0) {
    return false; 
  } for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false
  } 
  return true; 
}
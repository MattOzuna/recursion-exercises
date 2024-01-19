/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1
  const num = nums.pop()
  return num * product(nums)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0
  const word = words.pop()
  const length = word.length
  let next = longest(words)
  return length > next ? length : next
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(i >= str.length) return ''
  return str[i] + everyOther(str, i+2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// 'tacoocat'
//     ^^
function isPalindrome(str, i=0) {
  if (i >= str.length - (i+1)) return true
  return str[i] === str[str.length - (i+1)] && isPalindrome(str, i+1) ? true : false
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr.length === 0 || i >= arr.length) return -1
  let currVal = arr[i]
  if (currVal === val) return i
  else return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if(i === str.length) return ''
  const lastLetter = str[str.length-(i+1)]
  return lastLetter + revString(str, i+1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let answer = []
  for (let key in obj){
    if (typeof(obj[key]) === 'object'){
      let value = gatherStrings(obj[key])
      value.forEach(val => answer.push(val))
    } 
    else if(typeof(obj[key]) === 'string'){
      answer.push(obj[key])
    }
  }
  return answer
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// [1,2,3,4],3
//    ^

function binarySearch(arr, val , start=0, end=0) {
  let halfWayPoint = 0
  if(end === 0){
    halfWayPoint = Math.floor(arr.length/2) - 1
  }
  else{
    halfWayPoint = start + Math.floor((end-start)/2)
  }

  if(halfWayPoint === 0 && arr[halfWayPoint] !== val) return -1

  else if (arr[halfWayPoint] === val) return halfWayPoint

  else if (arr[halfWayPoint] > val) {
    return binarySearch(arr, val, start=0, end=halfWayPoint)
  }
  else if (arr[halfWayPoint] < val) {
    return binarySearch(arr, val, start=halfWayPoint+1, end=arr.length-1)
  } 
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

var arr=[1,2,3,4,5,6,7,8,9,10,11,23,44,86];

function binarySearch (arr, low, high, key) {
  if (low > high) {
    return -1;
  }
  let mid = parseInt((high+low)/2, 10);
  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid - 1;
    return binarySearch(arr, low, high, key)
  } else if (arr[mid] < key) {
    low = mid + 1;
    return binarySearch(arr, low, high, key)
  }
}

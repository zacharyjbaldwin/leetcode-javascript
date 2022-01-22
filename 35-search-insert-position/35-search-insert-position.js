/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

var binarySearch = function(array, target, start, end) {
    if (start > end) return start;

    let midpoint = Math.floor((start + end) / 2);

    if (array[midpoint] == target) return midpoint;
    if (array[midpoint] > target) return binarySearch(array, target, 0, midpoint - 1);
    if (array[midpoint] < target) return binarySearch(array, target, midpoint + 1, end)
}

nums = [1, 3, 5, 6]
console.log(searchInsert(nums, 2));
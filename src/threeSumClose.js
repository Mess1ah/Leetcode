/**
 * Created by Messiah_S on 23/04/2017.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort(function (a, b) { return a - b; });
  var numsLength = nums.length;
  var left;
  var right;
  var tempMinDiff = Infinity;
  var diff;
  for (var i = 0; i < numsLength - 2; i++) {
    left = i + 1;
    right = numsLength - 1;
    while (left < right) {
      diff = nums[i] + nums[left] + nums[right] - target;
      tempMinDiff = Math.abs(diff) < Math.abs(tempMinDiff) ? diff : tempMinDiff;
      if (diff === 0) {
        break;
      } else if (diff > 0) {
        right--;
      } else if (diff < 0) {
        left++;
      }
    }
    if (diff === 0) break;
  }
  return target + tempMinDiff;

};
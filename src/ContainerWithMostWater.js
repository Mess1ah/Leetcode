/**
 * Created by Messiah_S on 18/04/2017.
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var len = height.length;
  var left = 0,
      right = len-1;
  var maxArea = 0;
  while (left < right && left >=0 && right<=len-1){
    maxArea = Math.max(maxArea, Math.min(height[left],height[right])*(right-left))
    if (height[left] > height[right]){
      right--
    }else {
      left ++
    }
  }
  return maxArea
};
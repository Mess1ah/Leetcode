/**
 * Created by Messiah_S on 15/04/2017.
 */
var twoSum = function(nums, target) {
  var len = nums.length;
  var o = 0 ;
  var result=[];
  for (var i=0;i<len;i++){
    o = target - parseInt(nums[i]) ;
    if (nums.indexOf(o,i+1) !== -1){
      result.push(i,nums.indexOf(o,i+1));
    }
  }
  return result;
};



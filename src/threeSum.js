/**
 * Created by Messiah_S on 20/04/2017.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort(function(num1,num2){
    return num1-num2
  })
  var temp = 0;
  var tempArr = [];
  var result = [];
  for (var i=0,len=nums.length;i<len;i++){
    temp = -nums[i];
    tempArr = nums;
    tempArr.splice(i,1);
    twoSum(temp,tempArr,result)
  }
  return result;
};

var twoSum = function(num,arr,result){
  var i ,
    j = arr.length,
    tempResult=[];
  for(i=0;i<j;i++){
    if ((arr[i]+arr[j])>num){
      j--
    }else if((arr[i]+arr[j])<num){
      i++
    }else{
      tempResult.push(arr[i],arr[j]);
        result.push(tempResult)
    }
  }
};


console.log(threeSum([-1,0,1,2,-1,-4]))
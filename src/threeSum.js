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
    //一定要复制，array不是基本类型值，会按引用赋值
    tempArr = nums.slice(0);
    tempArr.splice(i,1);
    twoSum(temp,tempArr,result)
  }
  return result;
};

var twoSum = function(num,arr,result){
  var i = 0  ,
    j = arr.length-1,
    tempResult=[];
    var tempsum = 0;
  while (i<j){
    tempsum = arr[i]+arr[j]
    if ( tempsum > parseInt(num)){
      j--;
    }else if( tempsum < parseInt(num)){
      i++;
    }else if( tempsum  == parseInt(num)){
      tempResult.push(arr[i],arr[j],-num);
        result.push(tempResult);
        break;
    }
  }
};


console.log(threeSum([-1,0,1,2,-1,-4]))
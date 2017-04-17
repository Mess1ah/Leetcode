/**
 * Created by Messiah_S on 17/04/2017.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x == Number(String(x).split('').reverse().join(''))
};
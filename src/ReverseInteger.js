/**
 * Created by Messiah_S on 16/04/2017.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var pn = x >= 0 ? '' : '-';
  var num = Math.abs(x);
  var result = Number(pn + num.toString().split('').reverse().join(''));
  if (result > Math.pow(2, 31)) {
    return 0;
  }
  if (result < 1 - Math.pow(2, 31)) {
    return 0;
  }
  return result;
};
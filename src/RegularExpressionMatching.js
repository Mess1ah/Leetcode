/**
 * Created by Messiah_S on 17/04/2017.
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var p = '^' + p + '$';
  var pattern = new RegExp(p, 'g');
  return pattern.test(s);
};
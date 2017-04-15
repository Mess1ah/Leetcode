/**
 * Created by Messiah_S on 15/04/2017.
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = module.exports = function (s) {
  if (s.length === 0) return '';
  /**
   * 将 s 字符之间插入 #
   * banana => #b#a#n#a#n#a#
   * abba => #a#b#b#a#
   * abcd => #a#b#c#d#
   * 这样处理的好处是 aba 和 abba 的两种情况可以一起处理
   */
  var insertedS = '#' + s.split('').join('#') + '#';
  var length = insertedS.length;
  var result = '';
  for (var i = 1; i < length - 1; i++) {
    var j = 1;
    while (i - j >= 0 && i + j <= length - 1 && insertedS[i - j] === insertedS[i + j]) {
      j++;
    }
    if (j - 1 > result.length) {
      result = insertedS.substr(i - j + 1, j * 2 - 1).replace(/#/g, '');
    }
  }
  return result;
};
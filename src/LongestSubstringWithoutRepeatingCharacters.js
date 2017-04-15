/**
 * Created by Messiah_S on 15/04/2017.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var hash = {};
  var start = 0;
  var result = 0;

  for (var i = 0, len = s.length; i < len; i++) {
    var item = s[i];

    if (!hash[item])
      hash[item] = true;
    else {
      // item has already existed in hash
      for (; ;) {
        if (s[start] === item) {
          start++;
          break;
        }

        hash[s[start]] = false;
        start++;
      }
    }

    result = Math.max(result, i - start + 1);
  }

  return result;
};
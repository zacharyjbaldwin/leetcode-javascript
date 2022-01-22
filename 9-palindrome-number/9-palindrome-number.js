/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    else {
        let temp = reverseString(x.toString());
        if (x.toString() == temp) return true;
    }
    return false;
};

var reverseString = function(s) {
    return s.split("").reverse().join("");
}
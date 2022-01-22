/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {   
    let stack = [];
    let curr;
    
    for (let i = 0; i < s.length; i++) {
        curr = s[i];
        if (curr == "(" || curr == "[" || curr == "{") {
            stack.push(curr);
        }
        
        if (curr == ")") {
            if (stack.pop() != "(") return false;
        }
        
        if (curr == "]") {
            if (stack.pop() != "[") return false;
        }
        
        if (curr == "}") {
            if (stack.pop() != "{") return false;
        }
    }
    
    if (stack.length > 0) return false;
    else return true;
};
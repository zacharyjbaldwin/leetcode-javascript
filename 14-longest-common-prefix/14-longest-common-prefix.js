/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";

    let prefix = "";
    let currentLetter;
    let shortestLength = Infinity;

    // This block gets the shortest length item in the array of strings.
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < shortestLength) {
            shortestLength = strs[i].length;
        }
    }

    let success = true;

    while (success)
    {
        // Outer loop changes the current letter.
        for (let i = 0; i < shortestLength; i++) {
            if (!success) break;
            currentLetter = strs[0][i];
            
            // Inner loop checks that each letter in each string matches.
            // j = the string being checked
            for (let j = 0; j < strs.length; j++) {
                // console.log(`Comparing ${currentLetter} with ${strs[j][i]}`);

                if (strs[j][i] !== currentLetter) {
                    success = false;
                    break;
                }

                
            }
            if (success) prefix += currentLetter;
        }
    }
    return prefix;
};

let strs = ["flower", "flow", "flight"]; // "fl"
console.log(longestCommonPrefix(strs));

// 1. grab the first letter of the first item in the array
// 2. starting at the first letter of each string, compare it to the selection
// 3. if same for all strings, append to common prefix
// 4. if not same for all strings, break. return prefix.
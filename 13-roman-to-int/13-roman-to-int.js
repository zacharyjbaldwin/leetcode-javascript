/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let sum = 0;
    let prev;

    for (let i = 0; i < s.length; i++)
    {
        switch(s[i]) {
            case "I": 
                sum += 1;
                break;
            case "V":
                if (prev == "I") {
                    sum += 4;
                    sum -= 1;
                }
                else sum += 5;
                break;
            case "X":
                if (prev == "I") {
                    sum += 9;
                    sum -= 1;
                }
                else sum += 10;
                break;
            case "L":
                if (prev == "X") {
                    sum += 40;
                    sum -= 10;
                }
                else sum += 50;
                break;
            case "C":
                if (prev == "X") {
                    sum += 90;
                    sum -= 10;
                }
                else sum += 100;
                break;
            case "D":
                if (prev == "C") {
                    sum += 400;
                    sum -= 100;
                }
                else sum += 500;
                break;
            case "M":
                if (prev == "C") {
                    sum += 900;
                    sum -= 100;
                }
                else sum += 1000;
                break;
        }
        prev = s[i];
    }
    return sum;
};
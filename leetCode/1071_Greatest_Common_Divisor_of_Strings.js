/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';

    const NSD = (len1, len2) => {
        while (len2 !== 0) {
            const rest = len1 % len2;
            len1 = len2;
            len2 = rest; 
        }
        return len2
    }
    const devision = NSD(str1.length, str2.length);

    return str1.slice(0, devision);
  
};
//1 ABA ABAABA -> ABA
//2 AAA AAAAAA -> AAA
//3 ABCD ABC -> ""
//4 aba aba -> aba

// length1 length2
const PUNCTUATIONS_AND_SPACE = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

const palindromes = function (string) {
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        let charLeft = string
            .charAt(left)
            .toLowerCase();
        let charRight = string
            .charAt(right)
            .toLowerCase();
        if (isPunctuationOrSpace(charLeft)) {
            left++;
            continue;
        }
        if (isPunctuationOrSpace(charRight)) {
            right--;
            continue;
        }

        if (charLeft != charRight) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

function isPunctuationOrSpace (char) {
    return PUNCTUATIONS_AND_SPACE.includes(char);
}
// Do not edit below this line
module.exports = palindromes;

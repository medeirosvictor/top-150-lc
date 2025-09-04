/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const targetMap = new Map();
    for (let char of t) {
        targetMap.set(char, targetMap.get(char) + 1 || 1);
    }

    let left = 0;
    let right = 0;
    let count = 0;
    let minLength = Infinity;
    let minWindow = '';

    while (right < s.length) {
        const char = s[right];
        if (targetMap.has(char)) {
            targetMap.set(char, targetMap.get(char) - 1);
            if (targetMap.get(char) >= 0) {
                count++;
            }
        }

        while (count === t.length) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }

            const leftChar = s[left];
            if (targetMap.has(leftChar)) {
                targetMap.set(leftChar, targetMap.get(leftChar) + 1);
                if (targetMap.get(leftChar) > 0) {
                    count--;
                }
            }

            left++;
        }

        right++;
    }

    return minWindow;
};

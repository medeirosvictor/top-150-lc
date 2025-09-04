/**
 * @param {number[]} nums
 * @return {number}



 [2,2,1,1,1,2,2]
 */
var majorityElement = function (nums) {
    let sol;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            sol = num;
        }
        count += num === sol ? 1 : -1;
    }

    return sol;
};

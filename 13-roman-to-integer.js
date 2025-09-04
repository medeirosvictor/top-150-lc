/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // I, V, X, L, C, D and M.
    // I can be placed before V (5) and X (10) to make 4 and 9. 
    // X can be placed before L (50) and C (100) to make 40 and 90.     
    // C can be placed before D (500) and M (1000) to make 400 and 900.
    let sarr = s.split('')
    const letterToNumber = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let totalSum = 0

    for (let i = 0; i < sarr.length; i++) {
        let current = sarr[i];
        let currentValue = letterToNumber[current]

        let next = sarr[i + 1];
        console.log('next value: ' + next)
        if (next === undefined) {
            totalSum = totalSum + currentValue
            continue
        }

        let nextValue = letterToNumber[next]

        //check if next value is bigger than current -> if it is we SUBTRACT before total sum

        if(currentValue >= nextValue) {
            console.log(`sum of ${currentValue} to ${totalSum}`)
            totalSum += currentValue
        } else if(currentValue < nextValue) {
            console.log(`sum ${totalSum} + difference of ${nextValue} and ${currentValue}`)
            totalSum = totalSum + (nextValue - currentValue)
            i++
        }
    }

    return totalSum

};

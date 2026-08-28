/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // let maximum = 0;
    // for (const candie of candies) {
    //     if (candie > maximum) {
    //         maximum = candie;
    //     }
    // } 
    const maximum = Math.max(...candies)
    
    const largest = [];
    for (const candie of candies) {
        if (candie + extraCandies >= maximum) {
            largest.push(true);
        } else {
            largest.push(false);
        }
    }

    return largest;
};
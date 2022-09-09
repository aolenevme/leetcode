/**
56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(([first], [second]) => {
        if (first <= second) {
            return -1;
        } else {
            return 1;
        }
        
        return 0;
    });
    
    const results = [];
    
    for (const interval of intervals) { 
        concat(results, interval);
    }
    
    return results;
};

const isOverlapped = ([from1, to1], [from2, to2]) => {
    return from2 <= to1 && from2 >= from1 || to2 <= to1 && from1 <= to2 || from1 <= from2 && to1 >= to2 || from1 >= from2 && to1 <= to2
}

const concat = (results, interval) => {
    const length = results.length;
    
    if (length === 0 || !isOverlapped(results[length - 1], interval)) {
        results.push(interval);
        
        return;
    }
    
    const [from, to] = results[length - 1];
    const [intervalFrom, intervalTo] = interval;
            
    results[length - 1] = [Math.min(from, intervalFrom), Math.max(to, intervalTo)];
}

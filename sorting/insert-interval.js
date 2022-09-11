/**
57. Insert Interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    
    if (intervals.length === 0) {
        result.push(newInterval);
        
        return result;
    }
    
    let isInserted = false;
    
    for (let i = 0; i < intervals.length; i++) {
        if (intervals.length < 2) {
            const [from1] = intervals[i];
            const [fromNewInterval] = newInterval;
            
            if (from1 < fromNewInterval) {
                result.push(intervals[i], newInterval);
            } else {
                result.push(newInterval, intervals[i]);
            }
            
            break;
        }
        
        const [from1] = intervals[i];
        const [fromNewInterval] = newInterval;
        
        if (i + 1 === intervals.length) {
            result.push(intervals[i]);
            
            if (!isInserted) {
                result.push(newInterval);
            }
            
            break;
        }
        
        const [from2] = intervals[i + 1];
        
        if (!isInserted) {
            if (from1 <= fromNewInterval && fromNewInterval <= from2) {
                result.push(intervals[i], newInterval);
                
                isInserted = true;
            } else if (fromNewInterval < from1) {
                result.push(newInterval, intervals[i]);
                
                isInserted = true;
            }
            
            if (isInserted) {              
                continue;
            }
        }
        
        result.push(intervals[i]);
    }
    
    const merged = [];
    
    for (const interval of result) {
        concat(merged, interval);
    }
    
    return merged;
};

const isOverlapped = ([from1, to1], [from2, to2]) => {
    return from2 <= to1 && from2 >= from1 || to2 <= to1 && from1 <= to2 || from1 <= from2 && to1 >= to2 || from1 >= from2 && to1 <= to2
}

const concat = (merged, interval) => {
    const length = merged.length;
    
    if (length === 0 || !isOverlapped(merged[length - 1], interval)) {
        merged.push(interval);
        
        return;
    }
    
    const [from, to] = merged[length - 1];
    const [intervalFrom, intervalTo] = interval;
            
    merged[length - 1] = [Math.min(from, intervalFrom), Math.max(to, intervalTo)];
}

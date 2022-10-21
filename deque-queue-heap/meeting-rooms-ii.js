/**
253. Meeting Rooms II

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1

Constraints:
1 <= intervals.length <= 104
0 <= starti < endi <= 106
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
	const starts = [...intervals].sort(([firstStart], [secondStart]) => (firstStart - secondStart));
    const ends = [...intervals].sort(([__, firstEnd], [_, secondEnd]) => (firstEnd - secondEnd));

	let rooms = 0;
	let end = 0;

	for (let i = 0; i < intervals.length; i++) {
		if (starts[i][0] < ends[end][1]) {
			rooms++;
		} else {
			end++;
		}
	}

	return rooms;
};

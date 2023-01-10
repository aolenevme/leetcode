/**
939. Minimum Area Rectangle

You are given an array of points in the X-Y plane points where points[i] = [xi, yi].

Return the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes. If there is not any such rectangle, return 0.

Example 1:
Input: points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4

Example 2:
Input: points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2

Constraints:
1 <= points.length <= 500
points[i].length == 2
0 <= xi, yi <= 4 * 104
All the given points are unique.
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  const xAxis = {};
  const yAxis = {};
  for (const [x, y] of points) {
    if (x in xAxis) {
      xAxis[x].add(y);
    } else {
      xAxis[x] = new Set([y]);
    }

    if (y in yAxis) {
      yAxis[y].add(x);
    } else {
      yAxis[y] = new Set([x]);
    }
  }

  const min = minMax(xAxis, yAxis);

  return min;
};

const minMax = (xAxis, yAxis) => {
  let min = +Infinity;
  const xs = Object.keys(xAxis);

  for (let i = 0; i < xs.length; i++) {
    const x1 = xs[i];
    const x1Ys = xAxis[x1];

    if (!x1Ys) {
      continue;
    }

    for (let j = i + 1; j < xs.length; j++) {
      const x2 = xs[j];
      const x2Ys = xAxis[x2];
      const xDiff = +x1 >= +x2 ? x1 - x2 : x2 - x1;

      const commonYs = [];

      for (const y1 of x1Ys) {
        if (y1 in yAxis && x2Ys?.has(y1)) {
          commonYs.push(y1);
        }
      }

      for (let k = 0; k < commonYs.length; k++) {
        const y1 = commonYs[k];

        for (let t = k + 1; t < commonYs.length; t++) {
          const y2 = commonYs[t];

          const yDiff = y1 >= y2 ? y1 - y2 : y2 - y1;
          const nextMin = xDiff * yDiff;

          if (nextMin !== 0) {
            min = Math.min(nextMin, min);
          }
        }
      }
    }
  }

  if (min === +Infinity) {
    return 0;
  }

  return min;
};

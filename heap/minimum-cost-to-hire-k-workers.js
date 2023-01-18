/**
857. Minimum Cost to Hire K Workers

There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.

We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:

Every worker in the paid group should be paid in the ratio of their quality compared to other workers in the paid group.
Every worker in the paid group must be paid at least their minimum wage expectation.
Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10-5 of the actual answer will be accepted.

Example 1:
Input: quality = [10,20,5], wage = [70,50,30], k = 2
Output: 105.00000
Explanation: We pay 70 to 0th worker and 35 to 2nd worker.

Example 2:
Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
Output: 30.66667
Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.

Constraints:
n == quality.length == wage.length
1 <= k <= n <= 104
1 <= quality[i], wage[i] <= 104
*/

const mincostToHireWorkers = function (quality, wage, K) {
  const workers = wage
    .map((w, i) => ({ ratio: w / quality[i], quality: quality[i] }))
    .sort((a, b) => b.ratio - a.ratio);

  const pq = new Heap((a, b) => a.quality < b.quality);

  let qualitySum = 0;
  let result = Number.POSITIVE_INFINITY;

  while (workers.length) {
    const worker = workers.pop();
    qualitySum += worker.quality;
    pq.insert(worker);
    if (pq.getLength() > K) {
      qualitySum -= pq.pop().quality;
    }
    if (pq.getLength() === K) {
      result = Math.min(result, worker.ratio * qualitySum);
    }
  }

  return result;
};

class Heap {
  constructor(comparator) {
    this.arr = [];
    this.comparator = comparator;
  }

  siftDown(i) {
    const { arr } = this;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left >= arr.length) return;

    if (right >= arr.length) {
      if (this.comparator(arr[i], arr[left])) this.swap(i, left);
      return;
    }
    if (
      this.comparator(arr[left], arr[i]) &&
      this.comparator(arr[right], arr[i])
    ) {
      return;
    }

    if (this.comparator(arr[right], arr[left])) {
      this.swap(i, left);
      this.siftDown(left);
      return;
    }

    this.swap(i, right);
    this.siftDown(right);
  }

  bubbleUp(i) {
    const parent = Math.floor((i - 1) / 2);
    if (parent !== -1 && this.comparator(this.arr[parent], this.arr[i])) {
      this.swap(i, parent);
      this.bubbleUp(parent);
    }
  }

  insert(value) {
    this.arr.push(value);
    this.bubbleUp(this.arr.length - 1);
  }

  pop() {
    const { arr } = this;
    if (arr.length === 0) return -1;

    const popValue = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    this.siftDown(0);
    return popValue;
  }

  getLength() {
    return this.arr.length;
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  empty() {
    return this.arr.length === 0;
  }
}

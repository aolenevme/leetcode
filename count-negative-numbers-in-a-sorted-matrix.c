/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
*/

#include <stdio.h>

int countNegatives(int** grid, int gridSize, int* gridColSize){
	int x = gridSize - 1,
	    y = 0,
	    counter = 0;

	while (x >= 0 && y < *gridColSize) {
		if (grid[y][x] < 0) {
			counter += *gridColSize - y;
			x -= 1;
		} else {
			y += 1;
		}
	}

	return counter;
}

int main() {
	int grid[4][4] = {
		{4,3,2,-1},
		{3,2,1,-1},
		{1,1,-1,-2},
		{-1,-1,-2,-3}
	}; 

	int gridSize = 4;
	int gridColSize = 4;

	printf("%d", countNegatives(grid, gridSize, &gridColSize)); 
}

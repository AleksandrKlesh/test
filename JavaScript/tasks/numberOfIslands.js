// node numberOfIslands.js

let grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

let grid3 = [["1", "0", "1", "0", "1"]];

let numIslands = function (grid) {
  // function numIslands(grid) {
  let counter = 0;
  let rowsL = grid.length;
  let colsL = grid[0].length;
  if (rowsL === 0) return 0;

  function markNeighbor(grid, R, C) {
    grid[R][C] = "6";
    if (grid[R][C - 1] === "1") {
      markNeighbor(grid, R, C - 1);
    }
    if (grid[R][C + 1] === "1") {
      markNeighbor(grid, R, C + 1);
    }
    // if (grid[R - 1] && grid[R - 1][C] === '1') { markNeighbor(grid, R - 1, C) }
    if (grid?.[R - 1]?.[C] === "1") {
      markNeighbor(grid, R - 1, C);
    }
    if (grid?.[R + 1]?.[C] === "1") {
      markNeighbor(grid, R + 1, C);
    }
  }

  for (let R = 0; R < rowsL; R++) {
    for (let C = 0; C < colsL; C++) {
      if (grid[R][C] === "1") {
        counter++;
        markNeighbor(grid, R, C);
      }
    }
  }

  console.log(grid);

  return counter;
};

console.log(numIslands(grid1));
console.log(numIslands(grid2));
console.log(numIslands(grid3));

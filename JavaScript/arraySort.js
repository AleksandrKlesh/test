// const unsorted = [3, 1, 4, 2];

// const ascending = unsorted.sort((a, b) => a - b).map((d) => d * 10);

// const descending = ascending.sort((a, b) => b - a).map((d) => d * 10);

const unsorted = [3, 1, 4, 2];

const ascending = [...unsorted].sort((a, b) => a - b).map((d) => d * 10);

const descending = [...ascending].sort((a, b) => b - a).map((d) => d * 10);

console.log("unsorted", unsorted);
console.log("ascending", ascending);
console.log("descending", descending);

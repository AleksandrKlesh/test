// node importAndRequiresDifferences.js
// import { capitalizeString } from "exportImport";  doesn't work

const capitalizeString = (str) => str.toUpperCase();

const cap = capitalizeString("hello!");

console.log(cap);

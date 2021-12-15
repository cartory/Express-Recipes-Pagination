const recipes = require("./recipes.json");

let page = 2;
const limit = 3;

let start = (page - 1) * limit;
console.log(recipes.slice(6));

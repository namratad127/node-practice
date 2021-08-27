const path = require("path");
console.log(path.dirname("C:/Users/namra/OneDrive/Desktop/projects/js demo/path/path.js"));
console.log(path.extname("C:/Users/namra/OneDrive/Desktop/projects/js demo/path/path.js"));
console.log(path.basename("C:/Users/namra/OneDrive/Desktop/projects/js demo/path/path.js"));
// console.log(path.parse("C:/Users/namra/OneDrive/Desktop/projects/js demo/path/path.js"));
const myPath = path.parse("C:/Users/namra/OneDrive/Desktop/projects/js demo/path/path.js");
console.log(myPath.name);
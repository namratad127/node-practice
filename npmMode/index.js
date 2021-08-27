const chalk = require("chalk");
// console.log(chalk.green.bold.inverse("success"));
 
const validator = require("validator");
const res = validator.isEmail("nammo@nammo.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
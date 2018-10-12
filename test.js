const {ExcelManagement} = require("./Lib");

const {appendFileSync} = require("fs");
var excel = new ExcelManagement();


console.log(excel.findReg("Data", {edad:12}))
//sync function

// let fs = require("fs");

// fs.readFile("./demo.txt", "utf-8", (error, content) => {
//   if (error) throw error;
//   else console.log(content);
// });
// console.log("HELLO");
// let s = fs.readFileSync("./demo.txt", "utf-8");
// console.log(s);
// console.log("hello");

// fs.writeFile("./dem.txt", "new data", (err) => {
//   if (err) throw err;
//   else console.log("File write successfull");
// });

// fs.appendFile("./dmo.txt", " Appended Data", (err) => {
//   if (err) throw err;
//   else console.log("Append Sucessfull");
// });

// fs.rename("./demo.txt", "newname.txt", (err) => {
//   if (err) throw err;
//   else console.log("Rename Sucessfull");
// });

// fs.unlink("./newname.txt", (err) => {
//   if (err) throw err;
//   else console.log("File Deleted");
// });




/****************************************************************************************************************************************/



//async function




let fs = require('fs');

// fs.writeFileSync("./write.txt","This is a write file");
// console.log("File written successfully");

// const result = fs.readFileSync("./write.txt","utf-8");
// console.log(result);

// fs.appendFileSync("./write.txt"," Appended Data");
// console.log("Data Appended");

// fs.mkdirSync("Code",{recursive:true});
// console.log("Directory created");

// fs.cpSync("./dmo.txt","./copy.txt");
// console.log("File copied");

// fs.renameSync("./copy.txt","./cpy.txt");
// console.log("Renamed successfully");

// fs.unlinkSync("./cpy.txt");
// console.log("File unlinked successfully");

let stats = fs.statSync("./write.txt");
console.log(stats);
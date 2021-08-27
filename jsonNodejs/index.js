const fs = require("fs");
const bioData ={
    name: "namrata",
    age: 23,
    gender: "female",
};
// console.log(bioData.name);
//  const jsonData = JSON.stringify(bioData);
//  console.log(jsonData);

//  const objData = JSON.parse(jsonData);
//  console.log(objData); 

const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) =>{
//     console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})

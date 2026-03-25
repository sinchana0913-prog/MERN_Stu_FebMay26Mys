//Reading & writing files asynchronously with fs/promises

const fs = require("fs/promises");
const path = require("path");

async function runPromiseBasedFileFlow(){
 const filePath = path.join(__dirname,"promises-node.txt");
 try{
    await fs.appendFile(filePath,"written using fs/promises.this work with async/await");
    console.log("File written using fs/promises");

    const content = await fs.readFile(filePath,"utf-8");
    console.log(content);
 }
 catch(error){
    console.log("Promise-based fs error: ",error.message);
 }
}
runPromiseBasedFileFlow();
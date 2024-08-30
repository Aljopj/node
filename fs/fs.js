// write file
const { error, log } = require("console")
const fs=require("fs")
// fs.writeFile("message.txt","have a good day",(error)=>{
//     if(error){
//         console.log("unable to write");
//     }
// })

// append
// fs.appendFile("message.txt","ready to work",(error)=>{
//     if(error){
//         console.log("unable to write");
//     }
// })

// read file

// fs.readFile("message.txt","utf-8",(error,data)=>{
//     if (error) {
//   console.log("unable to write");        
//     }
//     else{
//         console.log(data);
//     }
// })
// delete
// fs.unlink("message.txt",(error)=>{
//     if(error){
//         console.log("unable to delete");
//     }
// })
// create folder
// fs.mkdir("hello",(error)=>{
//     if(error){
//         console.log("unable to create folder");
//     }
// })
fs.readdir("hello",(error,data)=>{
    if(error){
        console.log("unable to read");
    }
    else{
        console.log(data);
    }
})
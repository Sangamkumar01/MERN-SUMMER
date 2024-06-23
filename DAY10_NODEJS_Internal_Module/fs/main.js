// Internal Module
//BLOCKING

// console.log("Start");
// const  fs = require("fs");

// const data1 = fs.readFileSync('./text.txt');
// const text1 = data1.toString();
// console.log(text1);
// console.log("Mid");
// const data2 = fs.readFileSync('./text.txt', {encoding:"utf-8"});
// console.log(data2);
// console.log("End");


// NON-BLOCKING

// console.log("Start");
// const  fs = require("fs");
// fs.readFile('./text.txt', {encoding:"utf-8"},(err, data)=>{
//     if(err)console.log("error occured", err);
//     else console.log(data);

// });
// console.log("End");


// const  fs = require("fs");
// console.log("Start");
// fs.writeFile('./newFile.txt', "Sanga, | Muzaffarpur", (err, data) =>{
//     console.log(err, data);
// });

// // console.log(res);
// console.log("End");


// const fsPromises = require("fs/promises");
// console.log("Start");
// fsPromises.readFile('./text.txt',{encoding: "utf-8"})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("Error", err);
// })
// console.log("End");



// const fsPromises = require("fs/promises");
// console.log("Start");
// fsPromises.writeFile('./textFileWrite.txt',"Dummy Text\n").then(()=>{
//     console.log("Write Done");
// }).catch((err)=>{
//     console.log("Error:", err);
// })
// fsPromises.appendFile('./textFileAppend.txt',"Dummy Text\n").then(()=>{
//     console.log("Append Done");
// }).catch((err)=>{
//     console.log("Error:", err);
// })
// console.log("End");


// const fsPromises = require("fs/promises");
// const pr = fsPromises.readFile('./data.json')



// pr.then((bf) =>{
//     const text = bf.toString();
//     const arr = JSON.parse(text);
//     // let mt = 0, sc = 0;
//     // for(let i=0;i<arr.length;i++){
//     //     mt+=arr[i].MathScore;
//     //     sc+=arr[i].ScienceScore;
//     // }
//     // console.log("Maths Score is:", mt);
//     // console.log("Science Score is:", sc);


//     
// })
// .catch(console.log);


const fsPromises = require("fs/promises");
const pr = fsPromises.readFile('./data.json')

const getObjectById = (id, err) =>{
 
    for(let i=0;i<arr.length;i++){
        if(arr[i].id == id){
            return arr[i];
        }
    }

    // const res = arr.filter((elem)=>{
    //     if(elem.id == id ) return true;
    //     else return false;
    // });
    // return res;

    // const res = arr.find((elem)=>{
    //     if(elem.id == id ) return true;
    //     else return false;
    // });
    // return res;
}



pr.then((bf) =>{
    const text = bf.toString();
    const arr = JSON.parse(text);
   
    const obj = getObjectById(21, arr);
    console.log(obj);
})
.catch(console.log);
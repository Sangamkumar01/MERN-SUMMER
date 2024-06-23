// const {sum, mul} = require('./myMath.js');

// const res = sum(10, 12);
// console.log(res);

// const res2 = mul(10, 12);
// console.log(res2);

const figlet = require('figlet');
figlet("Sangam!", (err,data)=>{
    if(err)
         console.log(err);
    else 
    console.log(data);
});
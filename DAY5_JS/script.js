// let age = 10;

// let username1 = "Sangam";
// let username2 = "Ajay";

// let n = username1 + ' ' + username2;

// let a = username1 +10;
// let b =  10 + username1;
// let c = username1-10;

// console.log(a);
// console.log(b);
// console.log(c);

// let r = 10 + 12 + 14+ "Hello"
// console.log(r);

// let v1 = 'Hello';
// let v2 = 'Hello';

// // double equal to will check for the equality values and datatypes
// if(v1==v2){
//     console.log("YES");
// }
// else{
//     console.log("YES");
// }

// if(v1==v2){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// let v1 = '10';
// let v2 = 10;

// // double equal to will check for the equality values and datatypes
// if(v1==v2){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// if(v1==v2){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }




// let u1 = "Sangam";
// let u2 = "Gaurav";

// let ans1 = u1 + ' ' + u2;
// let ans2 = '${u1} ${u2}';

// console.log(ans1)
// console.log(ans2)


// // fnc definition with fnc keyboard
// function printHello(x){
//     console.log("Hello", x);
// }

// // function invocation
// printHello();

// const pHi = function(x){
//     console.log("Hii", x);
// }
// pHi("Sangam")

// const pHii = function(x){
//     console.log("Hiii", x);
// }
// pHii("Aman")



// function sum(a, b){
//     const ans = a+b;
//     console.log(ans);
// }

// // arrow fnc
// let calsum = (a, b) => {
//     const ans = a+b;
//     console.log(ans);
// }
// sum(10, 20);
// calsum(20,30);


// const a =10
// if(a<20){

//     console.log("YES");
// }
// else{
//     console.log("Its no same");
// }


// function sum(a, b){
//     if(a==undefined){
//         console.log(0);
//     }
//     else if(b!==undefined){
//         console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }
// }

// function sum(a, b){
//     if(a==undefined){
//         console.log(0);
//     }
//     else if(b!==undefined){
//         console.log(a+b);
//     }
//     else{
//         console.log(a);
//     }
// }
// function sumNum(a=0, b=0){
//     console.log(a+b);
// }
// sum(); // 0
// sum(10); // 10
// sum(10, 20); // 30

// sumNum();
// sumNum(10);
// sumNum(10, 20);



// const obj1 = new Object();
// const obj2 = {};

// obj1.name = "Sangam";
// obj2.name = "Aman";

// console.log(obj1);
// console.log(obj2);

// const obj={
//     name:"Sangam",
//     "age": 18,
//     10:"ten",
//     20: 200,
//     "city":"Muzaffarpur"
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj[10]);

// const input = prompt();
// console.log(obj[input]);



// const arr = new Arr();
// const arr = ["one", "two", 100];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);


// let u1 = "Akshay";
// let u2 = u1;
// u2 = "Raj";

// console.log(u1);
// console.log(u2);

// ---------------------------------------------------------------------------------------

// console.log('Program Start')

// const arr=  [
//     "fruits", "apple", "banana","oranges"
// ]
// for(let i = 0; i <= 4; i++) {
//     console.log(arr[i]);
// }

// for (const i of arr) {
//     console.log(i);
    
// }

// console.log('Program Ended')


// ---------------------------------------------------------------------------------------

// console.log(window);
console.dir(document);
// const body=document.getElementsByTagName("body");
const div=document.getElementsByTagName("div");
div[0].innerText="D O M";

// console.log(body);
// console.log(div);
// console.log(div[0]);


// const d1 = document.getElementsByClassName("container")
// console.log(d1);
// d1[0].style.color = 'blue';
// d1[0].style.backgroundColor = 'cyan';

// by ID

// const d1 = document.getElementById("c1")
// d1.style.color= "brown"

// const d1 = document.querySelector(
//     '#c1',
//     // 'div'
// );
// d1.style.color= "yellow"

const d1 = document.querySelectorAll(".container");
d1[1].style.color= "green"




// const student = {
//     userName: "Sangam",
//     rollno: "12105977",
//     city: "Muzaffarpur",
// }
// console.log(student.name);
// const {userName , city} = student;
// console.log(userName, city);


// const fruits = ['Banana', 'Apple', 'Mango'];
// console.log(fruits[0]);

// const [ , i2, i3] = fruits;
// console.log(i2, i3);


// Destructuring

// const student = {
//     userName: "Sangam",
//     rollno: "12105977",
//     city: "Muzaffarpur",
//     hobbies: ['Cricket', 'Dancing', 'Painting'],
// }
// const {hobbies} = student;
// hobbies[0]  = 'Studying';
// console.log(hobbies);
// console.log(student);


// rest --> to pack the values
// spread --> to unpack the values



// const s1 = {
//         userName: "Sangam",
//         rollno: "12105977",
//         city: "Muzaffarpur",
//         hobbies: ['Cricket', 'Dancing', 'Painting'],
//     }
//     const s2 = {...s1};
//     s2.userName = 'Ajay';
//     s2.hobbies = 'Playing';

//     console.log(s1);
//     console.log(s2);


// function sum(...arr){
    // console.log(arguments);
    // console.log(arr);

   
// sum()
// sum(10, 20)
// sum(10, 20, 12)
// sum(10, 11, 12, 1)
// sum(2, 4, 5, 7, 9, 8)

// reduce

// function sum(...arr){
// const res = arr.reduce((acc, elem, idx) =>{
//     console.log(acc, elem, idx);
//     return acc+elem;
// }, -1);
// console.log('-->', res);
// }
// sum(10, 20, 11)

// Async Await

console.log("Start");
async function  getData(){
    console.log("Inside");
    const res = await fetch('https://dummyjson.com/products')
    console.log("Step1");
    const data = await res.json();
    console.log(data);
}
getData();
console.log("End");
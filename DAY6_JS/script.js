// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title = secondSection.document.getElementsByTagName('h4');
// title[0].innerText = "JS CALLBACKS"

// ALTER


// const title = document.getElementsByTagName('section')[1].getElementsByTagName('h4');
// title[0].innerText = "JS CALLBACKS 123"


// const title = document.querySelector
//              ("section:first-of-type>h4");
// title.style.color = 'red';
// // title.className = 'cs1';
// title.setAttribute('class', 'cs22')
// title.setAttribute('name', 'Sangam')

// const pr = document.createElement("p")
// // const p = document.createElemet("p")
// pr.innerText = "New line from DOM!";
// const sec = document.getElementsByTagName('section')[0];


// REMOVE
// const lastLang = document.querySelector('li:last-child')
// lastLang.remove()

// sec.appendChild(pr) // last line
// sec.prepend(pr)  // first line



// EVENTS

// function printHello(){
//     console.log("Hello...!");
// }

// function inputClicked(){
//     console.log("inputClicked...");
// }

// function inputkeydown(e){
//     console.log("inputkeydown");
//     console.log(e.target.value);
// }

// function inputkeyup(e){
//     console.log("inputkeyup");
//     console.log(e.target.value);
// }

// function inputChange(e){
//     console.log("inputChange");
//     console.log(e.target.value);
// }


// FORM

// function handleUserName(e){
//     console.log("Name:", e.target.value);
// }
// function handleUserAge(e){
//     console.log("Age:", e.target.value);
// }
// function handleSubmit(e){
//     e.preventDefault();   
//     // console.dir(e.target);
//     const userName = e.target(0).value;
//     const userAge = e.target(1).value;

//     console.log(userName, userAge);

//     if(userAge<30){
//         document.body.append("Validation Successful")
//     }
//     else{
//         document.body.append("Please input less age")
//     }
// }


// const handleSubmit = (e) =>{
//     e.preventDefault();
//     const arr = e.target;
//     const name = arr[0].value;
//     const email = arr[1].value;

//     // const form = document.getElementsByTagName("form")
//     // form.style.display = "none";   // nothing will show in form
//     renderCard(name, email);

// }
// const renderCard = (n, e) =>{
//     const root = document.getElementById("root");
//     root.innerHTML = `
//         <h3 class='name'>Name is: ${n}</h3>
//         <h3 class='email'>Email is: ${e}</h3>
//         `;
// }



// const showResult =(res) =>{
//     console.log(res);
//     const root = document.getElementById("root");
//     root.innerText = res;
// }
// const sum = (a,b) =>{
//     const res = a+b;
//     showResult(res);
// }
// const mul = (a,b) =>{
//     const res = a*b;
//     showResult(res);
// }


// const printPretty =(res) => {
//     const root = document.getElementById("root");
//     root.style.color = 'red'
//     root.innerHTML = res;
// }
// // const sum = (a, b, fn) =>{
// //    const res = a+b;
// //    fn(res);
// // }
// // const rr = sum(10, 20, printPretty)
// const mul = (a, b, fn) =>{
//     const res1 = a*b;
//     fn(res1);
//  }

// const ss = mul(10, 20, printPretty)





// ARRAY

// const arr = [10,20,30];
// console.log(arr);

// arr.shift()
// console.log(arr);

// arr.onshift("12")
// console.log(arr);

// const arr = ["flash", "batman", "superman"]
// const printValues = (a, b, c) =>{
//     console.log('Value is:', a);
//     console.log('Value is:', b);
//     console.log('Value is:', c);
//     console.log('-------------');

// }
// // for (let i = 0; i < arr.length; i++) {
// //     printValues(arr[i], i,arr);
    
// // }

// arr.forEach(printValues);

// const arr =[21, 31,41, 52];
// let sum=0;
// arr.forEach((b)=>{
//    sum += b;
// })
// console.log(sum);

// const isEven =(x)=>{
//     if(x%2) return true;
//     else return false
// }
// const res= arr.filter(isEven);
// console.log("arr:", arr);
// console.log("res:", res);





function validateForm(event) {
    event.preventDefault();


    const fname = document.getElementsByName('fname')[0].value.trim();
    const lname = document.getElementsByName('lname')[0].value.trim();
    const mail = document.getElementsByName('mail')[0].value.trim();
    const phone = document.getElementsByName('phone')[0].value.trim();
    const username = document.getElementsByName('username')[0].value.trim();
    const psw = document.getElementsByName('psw')[0].value.trim();
    const cpsw = document.getElementsByName('cpsw')[0].value.trim();

    
    const fnameError = document.getElementById('fnameError');
    const lnameError = document.getElementById('lnameError');
    const mailError = document.getElementById('mailError');
    const phoneError = document.getElementById('phoneError');
    const usernameError = document.getElementById('usernameError');
    const pswError = document.getElementById('pswError');
    const cpswError = document.getElementById('cpswError');

    
    fnameError.textContent = '';
    lnameError.textContent = '';
    mailError.textContent = '';
    phoneError.textContent = '';
    usernameError.textContent = '';
    pswError.textContent = '';
    cpswError.textContent = '';


    let valid = true;

    if (fname === '') {
        fnameError.textContent = 'First name is required';
        valid = false;
    }

    if (lname === '') {
        lnameError.textContent = 'Last name is required';
        valid = false;
    }

    if (mail === '') {
        mailError.textContent = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(mail)) {
        mailError.textContent = 'Email is invalid';
        valid = false;
    }

    if (phone === '') {
        phoneError.textContent = 'Phone number is required';
        valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = 'Phone number is invalid';
        valid = false;
    }

    if (username === '') {
        usernameError.textContent = 'Username is required';
        valid = false;
    }

    if (psw === '') {
        pswError.textContent = 'Password is required';
        valid = false;
    }

    if (cpsw === '') {
        cpswError.textContent = 'Confirm password is required';
        valid = false;
    } else if (psw !== cpsw) {
        cpswError.textContent = 'Passwords do not match';
        valid = false;
    }

    if (valid) {
        
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('userCard').style.display = 'block';

        
        document.getElementById('cardFname').textContent = fname;
        document.getElementById('cardLname').textContent = lname;
        document.getElementById('cardMail').textContent = mail;
        document.getElementById('cardPhone').textContent = phone;
        document.getElementById('cardUsername').textContent = username;
    }
}

function resetForm() {
    document.getElementById('registrationForm').reset();
}

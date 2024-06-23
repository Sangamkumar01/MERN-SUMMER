// console.log("Start");
// function abc(x){
//     console.log(x*2);
//     temp(x/2);
// }
// abc(8)
// console.log("Mid");
// function temp(x){
//     console.log(x/2);
// }
// console.log("End");


// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click',cb)

// function cb(){
//     console.log('Button Clicked');
// }



// console.log('Start');
// const input = document.getElementsByTagName('input')[0];

// const cb = function abc(ev){
//     console.log('Input is', ev.target.value);
// }
// input.addEventListener('keyup',cb);
// console.log('End');



// console.log('Start');
// const delay = 1000;
// const cb = () =>{
//     console.log('CB Called');
// }
// setTimeout(cb, 0);
// console.log('End');


// console.log('Start');
// setTimeout(()=>{
//     console.log('CB Called');

//     setTimeout(()=>{
//         console.log('Internal CB Called');
//     }, 10000);
// },10000);

// console.log('End');


// console.log('Start');
// setTimeout(()=>{
//     console.log('A');
// },0)
// console.log('Mid');
// function abc(){
//     console.log('B');
// }
// function xyz(){
//     console.log('C');
//     setTimeout(()=>{
//         console.log('D');
//     },0);
// }
// setTimeout(abc,0)
// xyz();
// console.log('End');


// Promises

// const pr = fetch('https://api.github.com/users/Sangamkumar01')
// console.log(pr);

// const cb1 = (e) =>{
//     console.log('Fetch+', e);
//     e.json();
// }
// const cb2 = (e) =>{
//     console.log('Fetch-', e);

// }
// pr.then(cb1).catch(cb2)

// Alter

// const pr = fetch('https://api.github.com/users/Sangamkumar01')
// Fetch and render products from the API
fetch('https://dummyjson.com/products/search?q=phone')
  .then(res => res.json())
  .then(data => {
    data.products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'products-card';
      div.innerHTML = `<h3>${p.title}
      </h3><p>${p.price}</p>
      <img src="${p.thumbnail}">`;
      document.getElementById('root').appendChild(div);
    });
  })
  .catch(alert);

document.getElementById('searchBar').oninput = e => {
  const term = e.target.value.toLowerCase();
  Array.from(document.getElementsByClassName('products-card')).forEach(c => 
    c.style.display = c.querySelector('h3').textContent.toLowerCase().includes(term) ? '' : 'none'
  );
};


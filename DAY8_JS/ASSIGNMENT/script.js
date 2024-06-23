const pr = fetch('https://dummyjson.com/products');

pr.then((res) => res.json())
  .then((data) => {
    createUI(data);
  })
  .catch((err) => {
    console.log("Error Occurred", err);
  });

const main = document.getElementById("root");
function createUI(data) {
  const products = data.products;
  main.innerHTML = '';

  
    for (let i = 0; i < products.length; i++) {
      const newCard = document.createElement("div");

      newCard.innerHTML = `
        <h3>${products[i].title}</h3>
        <img src="${products[i].thumbnail}">
        <p>${products[i].price}</p>
      `;

      main.appendChild(newCard);
    
  }
}

function searchProducts(e){
    const searchText = e.target.value;
    const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`)
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) =>{
            createUI(data);
            // console.log(data);
        })
    });
}












// const pr = fetch('https://dummyjson.com/products');

// pr.then((res)=>{
//     const pr2 = res.json();
//     pr2.then((data) =>{
//         // console.log(data);
//     })
// }).catch((err) =>{
//     console.log("Error Occured", err);
// })

// const main = document.getElementById("root")
// function createUI(data){
//     const products = data.products;
//     // const root = document.getElementById("root");
//     // console.log(products);

//     for(let i=0; i<products.length; i++){
//         const newCard = document.createElement("div");
//     //     const title = document.createElement("h3");

//     //    title.innerText = products[i].title;
//     //    newCard.append(title);
//     //    const img = document.createElement('img');
//     //    img.src =  products[i], thumbnail;
//     //    newCard.appendChild(img);

//     //    const price = document.createElement('p');
//     //    price.innerText = products[i].price;
//     //    newCard.appendChild(price)

//        newCard.innerHTML = `
//            <h3>${products[i].title}</h3>
//            <img src = "${products[i].thumbnail}">
//            <p>${products[i].price}</p>
//        `;

//        main.appendChild(newCard);

//     }
// }


const http = require('http');
const fsPromises = require("fs/promises");
const fs = require('fs');
const url = require('url');

const dataText = fs.readFileSync("./data.json");
const data = JSON.parse(dataText);

const app = http.createServer(async (req, res)=>{
    res.writeHead(200, {
        "Content-Type":"text/html",
    });

    const {query, pathname}= url.parse(req.url, true);
    switch (pathname) {
        case "/":{
            const bf = await fsPromises.readFile("./homePage.html")
            res.end(bf);
            break;
        }
        case"/product":{
            const bf = await fsPromises.readFile("./productPage.html")
            let text = bf.toString();
            console.log(text);
            let productText = "";
            for(let i=0; i<data.length; i++){
            productText += `<div class="product-card">
                    <h3>${data[i].title}</h3>
                    <img src="${data[i].thumbnail}" alt='product-image'></img>
                    <p>${data[i].description}</p>
                    <a href="/view?id=${data[i].id}" target="_blank">More</a>
                </div>`;
        }
        
            text = text.replace("$PRODUCTS$", productText)
            res.end(text);
            break;

        }
        case"/view":{
            const product = data.find((elem)=>{
                if(elem.id==query.id) return true;
                else return false;
            });
            const bf = await fsPromises.readFile("./viewPage.html");
            let text = bf.toString();
            text = text.replace(
            "$VIEW$",
            `<div>
                <h2>${product.title}</h2>
                <img src="${product.thumbnail}" height='300'></img>
                <h4>${product.price}</h4>
                <p>${product.description}</p>
               </div>`
            );
               res.end(text);
               break;
        }
        
        default:{
            res.end("<h2>Oops! Page not found...</>");
        }   
    }
});
app.listen(3000, ()=>{
    console.log("-------Server Started------");
});

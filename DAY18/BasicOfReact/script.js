// const parent = document.getElementById("root");

// const list = document.createElement("ul");

// list.setAttribute("style", "width: 400px; padding: 24px; display: block; background-color: cyan; margin: 48px auto;")

// const listItem1 = document.createElement("li");
// listItem1.setAttribute("style", "margin: 12px; color: brown");
// listItem1.innerText = "Item 1";
// list.appendChild(listItem1);

// const listItem2 = document.createElement("l2");
// listItem2.setAttribute("style", "margin: 12px; color: brown");
// listItem2.innerText = "Item 2";
// list.appendChild(listItem2);


// parent.appendChild(list);

// const listItem1 = React.createElement("li", {}, "Item 1");
// const listItem2 = React.createElement("l2", {}, "Item 2");
// const list= React.createElement("ul", {}, [listItem1, listItem2]);

// const root = ReactDOM.createRoot(parent);
// root.render(list);
// or
// const root = ReactDOM.createRoot(parent).render(list);

// -------- Understand the diff b/w react dom element and js dom element-------

// const d1 = document.createElement("div");
// console.log(typeof d1);
// console.dir(d1);
// const d2 = React.createElement("div",{}, "");
// console.log(typeof d2);
// console.dir(d2);


//-----Second Half -----------------
// const parent = document.getElementById("root");
// const listItem1 = <li>Item 11</li>

// const list = <ul>{listItem1}</ul>

// const root = ReactDOM.createRoot(parent);
// root.render(list);
 

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

const textHello = <h3>Hello</h3>;  //React element
const TextFrom =() =>{
   return <h3>From</h3>;
}
const TextReact = () => <h3>React</h3>;

const container = (
    <div>
        {textHello}
        {/* {TextFrom()} */}
        <TextFrom/>
        {TextReact()}
    </div>
);
root.render(container);


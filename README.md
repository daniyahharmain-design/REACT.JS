# Steps to create a react application

- create a folder (Batch-6-React)
- create index.html and script.js
- add boilerplate to index.html and script with src="script.js"

- npm init (Batch-6-React)
- npm i react react-dom
- npm i parcel


- ## In script.js file on top
- import React from "react" 
- import ReactDOM from "react-dom/client"
- in package.json change to "type": cd desktop
- in script tag add attribute type: "module"


- npx parcel index.html 



// const parent = React.createElement("div", {}, [
//   React.createElement("h1", { id: "h1-react" }, "Hello world from react"),
//   React.createElement("h2", {id: "h2-react"}, "Hello h2"),
//   React.createElement("div", {id: "child-div", className: "child"}, [
//   React.createElement("h1", {}, "I am h1 of child-div"),
//   React.createElement('h2', {}, "I am h2 of child-div")
//   ])
// ]);
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);  this code is in react




const heading =(
  <!-- <div> 
    <h1  className="blue"> HELLO WORLD </h1>
    <p> im a paragraph</p>
    
  </div> -->

);

const body =(
  <!-- <div> 
    <h2  className="blue"> im a h2 heading from body </h2>
    <p> r;sezergp;kf"Skb,D"Bv </p>
    
  </div> -->

);

const parent =(
  <!-- <div> -->
  {heading}
  {body}           alaways use {} for giving child to parent 
                  
  <!-- </div> -->
)
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);  this is a basic example of jxml code in react 


<!-- day 1 const h1 = <h1>HELLO</h1>;

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h1); -->

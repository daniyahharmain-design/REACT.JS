import React from "react"
import ReactDOM from "react-dom/client"




const heading =(
  <div> 
    <h1  className="blue"> HELLO WORLD </h1>
    <p> im a paragraph</p>
    
  </div>

);

const body =(
  <div> 
    <h2  className="blue"> im a h2 heading from body </h2>
    <p> r;sezergp;kf"Skb,D"Bv </p>
    
  </div>

);

const parent =(
  <div>
  {heading}
  {body}

  </div>
)



let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);



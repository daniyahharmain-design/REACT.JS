import React from "react";
import ReactDOM from "react-dom/client";

const Headers = () => {
    return (<div>
        <h1> MY MINI STORE </h1>
        <p>WELCOME TO MY STORE </p>
    </div>)
}


const Product = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
        </div>
    )
}


function App (){
    return(
        <div>
            <Headers/>

            <Product name="crocher page" price="800" />
            <Product name="fllower bracelet" price="370" />
            <Product name="mini purse" price="500" />

            

        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
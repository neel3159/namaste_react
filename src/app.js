import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";



const AppComponent = () => (
    <div className="app-component">
        <Header />
        <Body />
    </div>
    )


const root =  ReactDom.createRoot(document.getElementById("root"))

root.render(<AppComponent/>)
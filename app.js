import React from "react";
import ReactDom from "react-dom/client";

const Title = () => <p>Paragraph</p>
const HeadingComponent = () => (
    <div>
        <h1 className="">Testing</h1>
        <Title/>
    </div>
    )


const root =  ReactDom.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)
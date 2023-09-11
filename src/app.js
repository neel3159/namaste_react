import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import RestaurantPage from "./components/RestaurantPage";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"



const AppComponent = () => (
    <div className="app-component">
        
        <Header />
        <Outlet/>
    </div>
)

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/aboutus",
                element: <Aboutus/>
            },{
                path: "/restaurants/:resId",
                element: <RestaurantPage/>
            }
            
        ]
    }
])

const root =  ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={routes}/>)
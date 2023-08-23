import React from "react";
import ReactDom from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="flex">
                <div className="logo">
                    <p className="logo-p">Logo</p>
                </div>
                <div className="links">
                    <ul>
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Contact Us</li>
                        <li className="nav-link">Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l7va77zuwafqa20wn37h" class="img-responsive" alt="" />
            <div className="res-des">
                <h3>Meghna Foods</h3>  
                <h4>Biryani, North India, Asian</h4> 
                <h4>4.4 Stars</h4>
                <h4>38 minutes</h4>             
            </div>

        </div>
    )
}

const Body = () => {
    return (
        <div className="res-body">
            <div className="restro-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppComponent = () => (
    <div className="app-component">
        <Header/>
        <Body />
    </div>
    )


const root =  ReactDom.createRoot(document.getElementById("root"))

root.render(<AppComponent/>)
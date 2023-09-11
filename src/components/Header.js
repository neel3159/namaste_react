import {useState} from "react"
import { Link } from "react-router-dom"
const Header = () =>{

    const [btnNameReact, useBtnNameReact] = useState("login")

    return(
        <div className="header">
            <div className="flex">
                <div className="logo">
                    <p className="logo-p">Logo</p>
                </div>
                <div className="links">
                    <ul>
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><Link to="/aboutus">Contact Us</Link></li>
                        <li className="nav-link">Cart</li>
                        <li>
                            <button className="login-btn" onClick = {() => {
                                return btnNameReact == "login" ? useBtnNameReact("logout") : useBtnNameReact("login")
                                    
                            }} >{btnNameReact}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
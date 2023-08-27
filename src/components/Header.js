import {useState} from "react"
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
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Contact Us</li>
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
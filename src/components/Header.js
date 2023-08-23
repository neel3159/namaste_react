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

export default Header;
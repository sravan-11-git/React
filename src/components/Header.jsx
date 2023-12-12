import { logo_img1 } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {

    const onlineStatus = useOnlineStatus();

    let butname = "Log In"
    let [butname1,setbutname] = useState(butname);
    return (
            <div id="header">
                <div className="logo">
                    <img alt="logo" className="logo_img" src={logo_img1}></img>
                </div>

                <div className="nav-container">
                    <ul className="nav-items">
                        <li className="status">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/About">About Us</Link></li>
                        <li><Link to ="/Contact">Contact</Link></li>
                        <li><Link to="/Grocery">Grocery</Link></li>
                        <li className="cart">Cart</li>
                        <button className="butto" onClick={() => {
                            butname1 === "Log In" ? setbutname("Log Out") : setbutname("Log In");
                        }}>{butname1}</button>

                    </ul>
                </div>
            </div>
            
    )
}
export default Header;
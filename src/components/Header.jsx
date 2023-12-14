import { logo_img1 } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {

    const onlineStatus = useOnlineStatus();

    let butname = "Log In"
    let [butname1,setbutname] = useState(butname);
    return (
            <div className="flex justify-between border border-solid border-black mt-2" >
                <div className="logo">
                    <img alt="logo" className="w-40" src={logo_img1}></img>
                </div>

                <div className="flex items-center ">
                    <ul className="flex p-5 mb-5">
                        <li className="px-2 text-lg" >Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                        <li className="px-2 text-lg"><Link to ="/">Home</Link></li>
                        <li className="px-2 text-lg"><Link to ="/About">About Us</Link></li>
                        <li className="px-2 text-lg"><Link to ="/Contact">Contact</Link></li>
                        <li className="px-2 text-lg"><Link to="/Grocery">Grocery</Link></li>
                        <li className="px-2 text-lg">Cart</li>
                        <button className="px-2 text-lg" onClick={() => {
                            butname1 === "Log In" ? setbutname("Log Out") : setbutname("Log In");
                        }}>{butname1}</button>

                    </ul>
                </div>
            </div>
            
    )
}
export default Header;
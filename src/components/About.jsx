import useOnlineStatus from "../utils/useOnlineStatus";
import UserAbout1 from "./UserAbout";
import Aboutclass2 from "./ClassCompAbove";

const About = () => {

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return <h1>Looks Like your Internet is OFF , Kindly check your Internet connection !!!!</h1>
    }

    return (<div>
        <h1 className="text-2xl font-bold my-2 ml-1 ">Hi, Iam Sravan Thipparthy</h1>
        <h2 className="text-lg font-bold ml-1">Welcome to My React Project</h2>
        <UserAbout1 name ="thipparthy"/>
        <Aboutclass2 location = "warangal"/>
        
    </div>)
}
export default About; 
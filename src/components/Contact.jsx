import useOnlineStatus from "../utils/useOnlineStatus";



const Contact = () => {

    
const onlineStatus = useOnlineStatus();

if(onlineStatus === false){
  return <h1>Looks Like your Internet is OFF , Kindly check your Internet connection !!!!</h1>
}
    return (<div>
        <h1>Sravan Thipparthy</h1>
        <h2>React Developer</h2>
        <h3>Phone: +919959285609</h3>
        <h3>Gmail: sravanthipparthy@gmail.com</h3>
    </div>)
}
export default Contact;
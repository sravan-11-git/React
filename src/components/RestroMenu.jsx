import Shimmer from "./Shimmerui";
import useRestroMenuHook from "../utils/useRestroMenuHook";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestroMenu =  () => {

 

    const resInfo = useRestroMenuHook();

       const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return <h1>Looks Like your Internet is OFF , Kindly check your Internet connection !!!!</h1>
    }

    if (resInfo === null){
        return <Shimmer/> ;
    }

    const {name,costForTwo} =     
    resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);
    return (

    <div className="menu">
        <h1>{name}</h1>
        <p>Price - {costForTwo/100} per two</p>
        
        <h2>Menu</h2>
        <ul>
        {itemCards.map((item) => (
        <li className="menuitems" key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100} per two</li>
      ))}    
        </ul>
    </div>
    );
};
export default RestroMenu;
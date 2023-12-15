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

    const {name,costForTwo} = resInfo?.cards[0]?.card?.card?.info;

    

    //const {selectedcard} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



    const { itemCards: itemCards1 = [] } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { itemCards: itemCards2 = [] } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const mergedItemCards = [...itemCards1, ...itemCards2];



    return (
    <div className="menu">
        <h1 className="font-bold m-1 text-2xl">{name}</h1>

        <p className="ml-7"> Price - {costForTwo/100} per two</p>
        
        <h2 className="font-bold m-1 text-xl">Menu</h2>
        <ul >
        {mergedItemCards.map((item) => (
        <li className="ml-7" key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} per two</li>
      ))}    
        </ul>
    </div>
    );
};
export default RestroMenu;
import Rest_cont from "./Rest_count";
import {  useState , useEffect } from "react";
import Shimmer from "./Shimmerui";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import MockData from "../utils/MockData";
import GroupedMenuData from "./GroupedMenuData";

const Body = () => {

  console.log(GroupedMenuData)

  let [listofRestros ,setlistofRestros] = useState([]);

  let [fliteredRestro , setFilteredRestro] = useState([]);

  let [searchtext ,setsearchtext] = useState("")

      useEffect(() => {

      fetchData();

    },[]);

    const fetchData = async () => {
      const Mockdata1 = MockData;
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0011459&lng=79.5747427&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //const json =await data.json();

  

      //setlistofRestros(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistofRestros(Mockdata1);
      setFilteredRestro(Mockdata1);
    }
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return <h1>Looks Like your Internet is OFF , Kindly check your Internet connection !!!!</h1>
    }

  return listofRestros == 0 ? <Shimmer/> :( 
    <div className="Second ">
         <div className="m-4 flex ">
            <input type="text" className="border border-solid border-black" value={searchtext} onChange={(e) => {setsearchtext(e?.target?.value)}}></input>
            <button className="px-3 py-[0.5] mx-2 bg-white  hover:bg-gray-200" onClick={() => {
              //filter
              let filteredText = listofRestros.filter(MockData => MockData?.name?.toLowerCase().includes(searchtext.toLowerCase()));
              setFilteredRestro(filteredText)
            }}>Search</button>
            <button className="px-3 py-[0.5] mx-1 bg-white hover:bg-gray-200  "  onClick={() => {
                  let newList = listofRestros.filter(MockData=> MockData?.avgRating > 4.4)
                  setFilteredRestro(newList);
            }   
            }  >Top Rated Restaurents</button>
            </div>
         <div className="flex  flex-wrap items-center ml-5 ">
           {fliteredRestro.map(MockData =>  
              <Link to={"/restaurants/"+MockData?.id} key = {MockData?.id} className=""><Rest_cont   resData = {MockData}/></Link>    
           )}
         </div>
     </div> 
     )
          }
export default Body;
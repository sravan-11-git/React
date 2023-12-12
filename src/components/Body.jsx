import Rest_cont from "./Rest_count";
import {  useState , useEffect } from "react";
import Shimmer from "./Shimmerui";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  let [listofRestros ,setlistofRestros] = useState([]);

  let [fliteredRestro , setFilteredRestro] = useState([]);

  let [searchtext ,setsearchtext] = useState("")

      useEffect(() => {

      fetchData();

    },[]);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      //https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0011459&lng=79.5747427&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      const json =await data.json();

      console.log(json)
      setlistofRestros(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return <h1>Looks Like your Internet is OFF , Kindly check your Internet connection !!!!</h1>
    }

  return listofRestros == 0 ? <Shimmer/> :( 
    <div className="Second">
         <div className="search">

            <input type="text" className="searching" value={searchtext} onChange={(e) => {setsearchtext(e.target.value)}}></input>
            <button className="searchbut" onClick={() => {
              //filter
              let filteredText = listofRestros.filter(restaurants => restaurants.info.name.toLowerCase().includes(searchtext.toLowerCase()));
              setFilteredRestro(filteredText)
            }}>Search</button>

            <button className="but"  onClick={() => {
                  newList = listofRestros.filter(restaurants => restaurants?.info?.avgRating > 4.4)
                  setFilteredRestro(newList);
                  console.log(newList);

            }   
            }  >Top Rated Restaurents</button>
            </div>
         <div className="restro-cont">
           {fliteredRestro.map(restaurants =>  
              <Link to={"/restaurants/"+restaurants.info.id} key = {restaurants.info.id} className="linkk"><Rest_cont   resData = {restaurants}/></Link>    
           )}
         </div>
     </div> 
     )
          }
export default Body;
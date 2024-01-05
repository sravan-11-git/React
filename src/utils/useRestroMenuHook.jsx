
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import GroupedMenuData from "../components/GroupedMenuData";

const useRestroMenuHook = () =>{

    const [resInfo, setresInfo] = useState(null);

    const {ressId} = useParams();
    
    useEffect(() => {
        fetchMenu1();

    },[]);

    const fetchMenu1 =  () => {

        //const RestroData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ressId+"&catalog_qa=undefined&submitAction=ENTER");
        //const json = await RestroData.json();
        let MenuData =GroupedMenuData;

        setresInfo(MenuData)
    }
    
    return resInfo;
    


};

export default useRestroMenuHook;

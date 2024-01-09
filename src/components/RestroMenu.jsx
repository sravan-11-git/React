import Shimmer from "./Shimmerui";
import useRestroMenuHook from "../utils/useRestroMenuHook";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestroMenu = () => {
  const { ressid } = useParams();
  const [indexnum, setIndexnum] = useState(0);

  useEffect(() => {
    // Update indexnum based on ressid
    if (ressid === '502957') {
      setIndexnum(0);
    } else if (ressid === '281469') {
      setIndexnum(1);
    }else if (ressid === '5938') {
      setIndexnum(2);
    }else if (ressid === '347868') {
      setIndexnum(3);
    }else if (ressid === '43836') {
      setIndexnum(4);
    }else if (ressid === '23847') {
      setIndexnum(5);
    }else if (ressid === '396748') {
      setIndexnum(6);
    }else if (ressid === '30531') {
      setIndexnum(7);
    }else if (ressid === '65797') {
      setIndexnum(8);
    }else if (ressid === '614642') {
      setIndexnum(9);
    }else if (ressid === '3434') {
      setIndexnum(10);
    }else if (ressid === '69876') {
      setIndexnum(11);
    }else if (ressid === '12808') {
      setIndexnum(12);
    }else if (ressid === '396741') {
      setIndexnum(13);
    }else if (ressid === '448116') {
      setIndexnum(14);
    }else if (ressid === '16073') {
      setIndexnum(15);
    }else if (ressid === '363507') {
      setIndexnum(16);
    }else if (ressid === '29784') {
      setIndexnum(17);
    }else if (ressid === '124178') {
      setIndexnum(18);
    }else if (ressid === '29063') {
      setIndexnum(19);
    }
  }, [ressid]);

  const resInfo = useRestroMenuHook();
  const onlineStatus = useOnlineStatus();

  // Loading state
  if (resInfo === null) {
    return <Shimmer />;
  }

  // Error state
  if (!onlineStatus || resInfo.error) {
    return (
      <h1>
        {onlineStatus
          ? 'An error occurred while fetching data.'
          : 'Looks like your internet is off. Please check your internet connection!'}
      </h1>
    );
  }

  // Data is available, proceed with rendering
  const { name, costForTwo } = resInfo[indexnum]?.data?.cards[0]?.card?.card?.info;
  const { itemCards: itemCards1 = [] } = resInfo[indexnum]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { itemCards: itemCards2 = [] } = resInfo[indexnum]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const mergedItemCards = [...itemCards1, ...itemCards2];

  return (
    <div className="menu text-center bg-slate-200">
      <h1 className="font-bold m-1 text-2xl">{name}</h1>
      <p className="ml-7"> Price - {costForTwo/100} per two</p>
      <h2 className="font-bold m-1 text-xl">Menu</h2>
      <ul>
        {mergedItemCards.map((item, index) => (
          <li className="ml-7 m-3" key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100} per two
          </li>
        ))}
      </ul>
    </div> 
  );
};

export default RestroMenu;

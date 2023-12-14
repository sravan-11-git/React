import { food_logo1 } from "../utils/links";

const Rest_cont = (props) => {
    const {resData} = props
    const {name,cuisines,avgRating,costForTwo} = resData?.info 
    return (
       
            <div className="m-4 p-4 w-[250px] h-96  bg-gray-50  hover:bg-gray-200 rounded-lg" >
                <img  alt={resData.info.name + " Image"} className="w-52 ml-2 h-40 mb-1 rounded-sm" src ={food_logo1+ resData.info.cloudinaryImageId}></img>
                <h4 className=" ml-2 font-bold">{name}</h4>
                <h4 className="ml-2 overflow-hidden break-words">{cuisines.join(',')}</h4>
                <h4 className=" ml-2">{avgRating} Stars</h4>
                <h4 className=" ml-2">{costForTwo}</h4>
            </div>
        
    )
}
export default Rest_cont;



export const restroPromoted = (Rest_cont) => {
    return () =>{
        return (<div>
            <label>Promoted</label>
            <Rest_cont/>
        </div>)
    }
}
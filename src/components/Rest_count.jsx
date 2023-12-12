import { food_logo1 } from "../utils/links";

const Rest_cont = (props) => {
    const {resData} = props
    const {name,cuisines,avgRating,costForTwo} = resData?.info 
    return (
        <div className="restro-card">
            <div className="card">
                <img  alt={resData.info.name + " Image"} className="food_logo" src ={food_logo1+ resData.info.cloudinaryImageId}></img>
                <h4>{name}</h4>
                <p>{cuisines.join(',')}</p>
                <p>{avgRating} Stars</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}
export default Rest_cont;
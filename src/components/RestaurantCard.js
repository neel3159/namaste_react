import { CDN_URL } from "../utils/constants"
const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, costForTwo, locality} = resData?.info
    return (
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId} className=" res-img img-responsive" alt="" />
            <div className="res-des">
                <h3>{name}</h3>  
                <h4>{cuisines.join(", ")}</h4> 
                <h4>{costForTwo}</h4>
                <h4>{locality}</h4>             
            </div>

        </div>
    )
}

export default RestaurantCard;
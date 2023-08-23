import RestaurantCard from "./RestaurantCard"
import {resList} from "../utils/mockData"
const Body = () => {
    return (
        <div className="res-body">
            <div className="restro-container">
                {
                    resList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>
                    
                    ))
                }
            </div>
        </div>
    )
}

export default Body
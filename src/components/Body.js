import {useState} from "react"
import RestaurantCard from "./RestaurantCard"
import {resList} from "../utils/mockData"
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    return (
        <div className="res-body">
            <button className="highest-rating" onClick={() => {
                const filteredArray = listOfRestaurant.filter(
                    (res) => res.info.avgRating >= 4
                )
                setListOfRestaurant(filteredArray)
            }} >Highest rating</button>
            <div className="restro-container">
                {
                    listOfRestaurant.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id}  resData={restaurant}/>
                    
                    ))
                }
            </div>
        </div>
    )
}

export default Body
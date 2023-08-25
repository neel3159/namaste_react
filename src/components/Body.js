import {useState, useEffect} from "react"
import RestaurantCard from "./RestaurantCard"
import {resList} from "../utils/mockData"
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    useEffect (() => {
        console.log("useEffect loaded")
        fetchData();
    }, [])
    console.log("body loaded")
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const jsonData = await data.json();
            console.log(jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
            setListOfRestaurant(jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    }
    return (
        <div className="res-body">
            <button className="highest-rating" onClick={() => {
                const filteredArray = listOfRestaurant.filter(
                    (res) => res.info.avgRating >= 4
                )
                setListOfRestaurant(filteredArray)
                }} 
            >Highest rating</button>
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
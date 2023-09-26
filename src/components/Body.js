import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
// import {resList} from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"


const Body = () => {
    const [originalListOfRestaurant, setOriginalListOfRestaurant] = useState([])
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState([])
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
            console.log()
            const restaurants = jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
            setOriginalListOfRestaurant(restaurants)
            setListOfRestaurant(restaurants)
    }

    // Conditional Rendering
    // if(listOfRestaurant.length == 0){
    //     return <Shimmer />
    // }
    return listOfRestaurant.length == 0 ? <Shimmer /> : (
        <div className="res-body">
            <input type="text" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
            }} />
            <button onClick={() => {
                const searchedValue = originalListOfRestaurant.filter(
                    (res) => (
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                )
                setListOfRestaurant(searchedValue)
            }}>Submit</button>
            <button className="highest-rating" onClick={() => {
                const filteredArray = listOfRestaurant.filter(
                    (res) => res.info.avgRating >= 4
                )
                setListOfRestaurant(filteredArray)
                }} 
            >Highest rating</button>
            <button onClick={()=>{
                const pureVegRestaurant = originalListOfRestaurant.filter(
                    (res) => (res.info.veg)
                )
                setListOfRestaurant(pureVegRestaurant)
            }}>Pure Veg</button>
            <div className="restro-container">
                {

                    listOfRestaurant.map((restaurant)=>(
                    <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body
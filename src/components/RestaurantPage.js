import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom"

const RestaurantPage = () =>{
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu()        
    },[])
    const fetchMenu = async() =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=" +
            resId
            )
        const json = await data.json()
        setResInfo(json.data)
    }
    if (resInfo === null) return <Shimmer />
    
    const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
    const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    console.log(cards)
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    return (
        <div className="menu-page">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Menu</h2>
            <ul>    
                {
                    itemCards.map(item => (
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    ))
                }
               
            </ul>
        </div>
        
    )
}

export default RestaurantPage
import { useState, useEffect } from "react"

const RestaurantPage = () =>{
    const [itemList, setItemList] = useState(null)
    useEffect(()=>{
        fetchData()        
    }
    ,[])
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=23716")
        const json = await data.json()
        console.log(json.data)
        setItemList(json.data)
    }

    return(
        <div className="menu-page">
            <h1>{itemList.cards[0].card.card.info.name}</h1>
            <h2>Menu</h2>
            <ul>
                
                <li>Burhers</li>
            </ul>
        </div>
        
    )
}

export default RestaurantPage
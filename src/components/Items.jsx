import { useState } from "react"
import { useSelector } from "react-redux"
import SingleItem from "./SingleItem"

export default function Items() {

    const items = useSelector(state => state.items.stock)

    const [multiBuyOptions, setMultiBuyOptions] = useState(false)
    
    return (
        <div className="grow">
            <div className="grid grid-cols-2">
                { items.map((item, index) => <SingleItem key={index} item={item} /> ) }
            </div>
            <button className="bg-red-400 text-center m-1 mt-3 w-full p-3 hover:cursor-pointer hover:bg-red-500" onClick={() => setMultiBuyOptions(multiBuyOptions => !multiBuyOptions)}>Change MultiBuy Offers</button>
            { multiBuyOptions && (
                <div className="m-1 grid grid-cols-2">
                    { items.map((item, index) => <p className="bg-blue-400 text-center m-1 p-3 hover:cursor-pointer hover:bg-blue-500" key={index}>{`Item ${item.name} - ${item.multiBuyQty} for ${item.multiBuyPrice/100}`}</p> ) }
                </div>
            ) }
        </div>
    )
}
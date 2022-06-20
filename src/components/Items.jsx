import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeItemOfferAction } from "../redux/actions"
import SingleItem from "./SingleItem"

export default function Items() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.items.stock)

    const [multiBuyOptions, setMultiBuyOptions] = useState(false)
    const [editMultiOffers, setEditMultiOffers] = useState(false)
    const [itemSelected, setItemSelected] = useState(null)
    
    return (
        <div className="grow">
            <div className="grid grid-cols-2">
                { items.map((item, index) => <SingleItem key={index} item={item} /> ) }
            </div>
            <button className="bg-red-400 text-center m-1 mt-3 w-full p-3 hover:cursor-pointer hover:bg-red-500" onClick={() => setMultiBuyOptions(multiBuyOptions => !multiBuyOptions)}>Change MultiBuy Offers</button>
            { multiBuyOptions && (
                <div className="m-1 grid grid-cols-2">
                    { items.map((item, index) => <p className="bg-blue-400 text-center m-1 p-3 hover:cursor-pointer hover:bg-blue-500" onClick={() => {
                        setEditMultiOffers(true)
                        setItemSelected(item)
                    }} key={index}>{`Item ${item.name} - ${item.multiBuyQty} for ${item.multiBuyPrice/100}`}</p> ) }
                    { editMultiOffers && (
                        <>  
                            <p className="my-2 text-xl text-center col-span-2">Edit Item {itemSelected.name} Below</p>
                            <input type="number" value={itemSelected.multiBuyQty} onChange={e => setItemSelected(itemSelected => ({...itemSelected, multiBuyQty: e.target.value }))} className="text-center mt-2" />
                            <input type="number" value={itemSelected.multiBuyPrice} onChange={e => setItemSelected(itemSelected => ({...itemSelected, multiBuyPrice: e.target.value }))} className="text-center mt-2" />
                            <button className="bg-green-400 text-center m-1 mt-3 col-span-2 p-3 hover:cursor-pointer hover:bg-green-500" onClick={() => dispatch(changeItemOfferAction(itemSelected))}>Confirm Changes</button>
                        </>
                    ) }
                </div>
            ) }
        </div>
    )
}
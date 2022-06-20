import { useEffect } from "react"

export default function Pricing({ itemsInBasket }) {
    
    useEffect(() => {
        console.log(itemsInBasket)
    }, [itemsInBasket])

    return (
        <div className="flex flex-col justify-between">
        <p className="mx-3">{itemsInBasket ? itemsInBasket.name : 'Add an Item'}</p>
        <p className="mx-3">Total</p>
        </div>
    )
}
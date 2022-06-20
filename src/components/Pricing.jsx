import { useSelector } from "react-redux"

export default function Pricing() {

    const itemsInBasket = useSelector(state => state.basket.items)

    return (
        <div className="flex flex-col justify-between">
        <p className="mx-3">{itemsInBasket.length > 0 ? itemsInBasket[0].name : 'Add an Item'}</p>
        <p className="mx-3">Total</p>
        </div>
    )
}
import { useSelector } from "react-redux"

export default function Pricing() {

    const itemsInBasket = useSelector(state => state.items.basket)

    return (
        <div className="min-w-[15%] items-center text-center">
        <p className="mx-3 text-2xl font-semibold underline mb-3">{`Total - ${itemsInBasket.map(item => item.price).reduce((prev, current) => prev + current, 0)/100}`}</p>
        <p className="mx-3">{itemsInBasket.length > 0 ? itemsInBasket.map(item => <p>{`${item.name} - ${item.price / 100}`}</p>) : 'Add an Item'}</p>
        </div>
    )
}
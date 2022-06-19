export default function Pricing({ itemsInBasket }) {
    return (
        <p className="mx-3">{itemsInBasket ? itemsInBasket : 'Add an Item'}</p>
    )
}
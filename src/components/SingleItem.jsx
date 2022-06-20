export default function SingleItem({ item, setItemsInBasket }) {

    const handleClick = () => {
        setItemsInBasket(itemsInBasket => [...itemsInBasket, item])
    }
    
    return (
        <div className="bg-green-400 text-center m-1 p-3 hover:cursor-pointer hover:bg-green-500" onClick={handleClick}>Item {item.name}</div>
    )
}